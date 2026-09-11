import "./styles.css"
import weve from "../../assets/wave.svg"
import SocialMidia from "../../components/socialMidia"


export default function Footer(){
    return(
        <footer className="footer">
            <img src={weve} alt="" className="weve" />
            <div className="footerItems">
                <span>
                    2026 vingren souza 
                </span>
                <SocialMidia/>
            </div>
        </footer>
    )
}