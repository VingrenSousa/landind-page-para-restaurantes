import Button from "../../components/button"
import "./styles.css"

import { BsTelephoneFill } from "react-icons/bs";
import { FaWhatsapp,FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import heroImg from "../../assets/hero.png"

type propsFoco={
    focoSections:"Home" | "Cardàpio" | "Avaliacão"
}
export default function  HomeSection({focoSections}:propsFoco){
    return(
        <section>
            <div className="cta">
                <h1 className="title">
                    O sabor vai até 
                    <span>você</span>
                </h1>
                <p className="description">
                    Sabores irresistíveis preparados com carinho e entregues até você.
                    Escolha seu prato favorito e transforme cada refeição em um momento especial.
                </p>
                <div className="cta_Buttons">
                   <Button title="Ver cardápio"/>

                   <a href="tel:" className="buttonTel">
                        <Button title="(11)99999-9999">
                            <BsTelephoneFill/>
                        </Button>
                   </a>
                </div>
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
            </div>
            <div className="banner">
                <img src={heroImg} alt="banner"/>
            </div>
        </section>
      
    )
}