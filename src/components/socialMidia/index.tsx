import { FaFacebook, FaWhatsapp } from "react-icons/fa6"
import "./styles.css"
import { TiSocialInstagram } from "react-icons/ti"


export default function SocialMidia(){
    return(
          <div className="socialMidia">
                    
                <a href="#">  
                    <FaWhatsapp/>
                </a>
                <a href="#">
                    <TiSocialInstagram/>      
                </a>               
                <a href="#">
                    <FaFacebook/>  
                </a>

            </div>
    )
}