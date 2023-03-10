import { use, Suspense } from "react";
import { useSearchParams } from "react-router-dom";


import "./SearchResultsPage.css";

function ProductListing({ image, title, price, link, time }) {
    return (
      <div className="product">
        <a href={link} className="product-link">
          <img src={image} alt={title} className="product-image" />
        </a>
        <div className="product-details">
          <a href={link} className="product-link">
            <h2 className="product-title">{title}</h2>
          </a>
          <p className="product-price">{price}</p>
          <p className="product-time">
            Last updated: {new Date(time).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }


function Data({query}){

    const results = use(fetch("http://localhost:8000/search?q="+query)
                    .then(r => r.json()));
    

    let key = 0;

    return (
        <div>
            {results.map((result) => <ProductListing key={key++} {...result}/>)}

            {/*
                <a href={result.link} target="_blank" rel="noreferrer" key={key++}>
                    <div style={{}}>
                        <img src={result.image} style={{height:"30px"}} alt={result.title}/>
                        <span>{result.title}</span>
                        <div>
                            Last Updated: {new Date(result.time).toString()}
                        </div>
                    </div>
                </a>
                )}
            */}
        </div>
    )
}

function SearchPage(){
    const [searchParams, ] = useSearchParams();

    // const results = use(fetch("http://localhost:8000/search?q="+searchParams.get("q"))
    //                 .then(r => r.json()));

    return (
        <div>
            <div style={{height:"50px",borderBottom:"1px solid black"}}>
            </div>
            <div style={{display:"flex"}}>
                <div style={{width:"100px"}}>

                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Data query={searchParams.get("q")}/>
                </Suspense>
            </div>
        </div>
    )
}

export default SearchPage;