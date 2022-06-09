import { Fragment } from "react";
import Button from "../../components/Button";

import "./style.css";

export default function Acerca() {
    return (
        <div className="acerca">
           <div className="acerca-box box-shadow-1">
                <div>
                    <div className="acerca-box-photo box-shadow-1">
                        <img src="hero-image.jpg"></img>
                    </div>
                    <div className="acerca-box-presentation box-shadow-1">
                
                    </div>
                </div>
                <div className="acerca-box-button"></div>
            </div>
        </div>
    );
}