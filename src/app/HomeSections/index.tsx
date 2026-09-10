import Button from "../../components/button"
import "./styles.css"

import { BsTelephoneFill } from "react-icons/bs";


import heroImg from "../../assets/hero.png"
import SocialMidia from "../../components/socialMidia";

type propsFoco={
    focoSections:"Home" | "Cardàpio" | "Avaliacão"
}
export default function  HomeSection({focoSections}:propsFoco){
    return(
        <section className="conteinerHome">
            <div className="shape"></div>
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
                        <Button >
                            <BsTelephoneFill/>
                        </Button>
                        (11)99999-9999
                   </a>    
                   
                </div>
                <div className="socialMidia">
                    <SocialMidia/>
                </div>
                
            </div>
            <div className="banner">
                <img src={heroImg} alt="banner"/>
            </div>
        </section>
      
    )
}