import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import './Footer.css'

function Footer(){
    return(
        <div className="Footer">
            <div className="container">
                <div className="parte1">
                    <p>Animes © 2023</p>
                </div>
                <div className="redes">
                    <FaFacebookSquare title="facebook"/>
                    <FaInstagramSquare title="instagram"/>
                </div>
            </div>
        </div>
    )
}

export default Footer