import "./styles.css"
import banner from "../../assets/chef.png"
import avatar from "../../assets/avatar.png"
import Feedback from "../../components/feedback"
import Button from "../../components/button"


export default function AvaliacaoSection(){
    const description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam sed et voluptatibus fuga expedita cum porro vel, minus animi consequatur obcaecati iste distinctio delectus incidunt atque? Sapiente, eum illum!"
    return(
        <section className="conteinerAvaliacao">
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