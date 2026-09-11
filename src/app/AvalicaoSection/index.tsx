import "./styles.css"
import banner from "../../assets/chef.png"
import avatar from "../../assets/avatar.png"
import Feedback from "../../components/feedback"
import Button from "../../components/button"
import { useEffect, useState, type RefObject } from "react"

type props={
AvalicaoRef:RefObject<HTMLDivElement | null>;
}
export default function AvaliacaoSection({AvalicaoRef}:props){
    const [active,setActive]=useState(false)


useEffect(()=>{
    const observe = new IntersectionObserver((entres)=>{
        const entre =entres[0]
        if(entre.isIntersecting){
            setActive(true)
        }else{
            setActive(false)
            }
    },{threshold:0.2})
    if(AvalicaoRef.current){
        observe.observe(AvalicaoRef.current)

    }

    return ()=>observe.disconnect()
},[])





    const description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam sed et voluptatibus fuga expedita cum porro vel, minus animi consequatur obcaecati iste distinctio delectus incidunt atque? Sapiente, eum illum!"
    return(
        <section ref={AvalicaoRef} className={active?"conteinerAvaliacao active":"conteinerAvaliacao"}>
            <img src={banner} className="AvaliacaoBanner"/>
            <div className="contentAvaliacao">
                <h2 className="sectionTitle"> Avalição</h2>
                <h3 className="sectionSubtitle"> O que os clintes falam sobre nós</h3>

                <div className="feedbacks">
                    <Feedback name="Flavia Souza" avatar={avatar} star={4} description={description}/>
                    <Feedback name="julia Santos" avatar={avatar} star={4} description={description}/>
                </div>
                <Button title="Ver mais avalição"/>
                
            </div>
        </section>
    )
}