import Button from "../../components/button"
import "./styles.css"

import { BsTelephoneFill } from "react-icons/bs";


import heroImg from "../../assets/hero.png"
import SocialMidia from "../../components/socialMidia";
import { useEffect, useRef, useState } from "react";


type propsFoco={
    focoSections(t:"Home" | "Cardàpio" | "Avaliacão"):void
   
}
export default function  HomeSection({focoSections}:propsFoco){
    const refHome=useRef<HTMLDivElement>(null)

    const[visible,setVisible]=useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry=entries[0]
                if(entry.isIntersecting){
                    setVisible(true)
                    console.log("elementos entro")
                }else{
                    setVisible(false)
                }
            },{threshold:0.1})
    
            if (refHome.current) {
                observer.observe(refHome.current);
            }
    
            return () => observer.disconnect();
      }, []);
    return(
        <section ref={refHome} className={visible?"conteinerHome active":"conteinerHome"}>
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
                   <Button title="Ver cardápio" onClick={()=>focoSections("Cardàpio")}/>

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