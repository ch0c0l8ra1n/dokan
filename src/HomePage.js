import { Link, Outlet, useNavigate } from "react-router-dom";
import {BsSearch} from "react-icons/bs"

import "./HomePage.css"

function HomePage(){
    let navigate = useNavigate();


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log(event.target.value);
          navigate("/search?q="+event.target.value);
        }
      }


    return (
        <div className="HomePage">
            <div >
                <div className="LogoContainer">
                    <img src="/logo.png" style={{maxHeight:"100px"}}/>
                </div>
                <div className="SearchBarSection">
                    <div className="SearchBarContainer">
                        <BsSearch/>
                        <input placeholder="Search..." onKeyDown={handleKeyDown}/>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default HomePage;