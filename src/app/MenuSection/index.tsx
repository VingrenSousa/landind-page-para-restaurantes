import "./styles.css"
import { FaHeart } from "react-icons/fa";
import dish1 from "../../assets/dish.png" 
import dish2 from "../../assets/dish2.png" 
import dish3 from "../../assets/dish3.png" 
import dish4 from "../../assets/dish4.png" 
import Dish from "../../components/dish";
export default function MenuSection(){
    return(
        <section className="menu">
            <h2 className="sectionTitle"> Cardápios</h2>
            <h3 className="sectionSubtitle"> Nossos pratos especiais</h3>

            <div className="dishes">
                <Dish 
                prece={79} 
                reviews={' (500+)'} 
                heart={5} 
                srcDishImg={dish1} 
                title="Prato Chines" 
                description="prato maravilhoso que enche seu palar" 
                />
                <Dish 
                prece={79} 
                reviews={' (500+)'} 
                heart={5} 
                srcDishImg={dish2} 
                title="Prato Chines" 
                description="prato maravilhoso que enche seu palar" 
                />
                <Dish 
                prece={79} 
                reviews={' (500+)'} 
                heart={5} 
                srcDishImg={dish3} 
                title="Prato Chines" 
                description="prato maravilhoso que enche seu palar" 
                />
                <Dish 
                prece={79} 
                reviews={' (500+)'} 
                heart={5} 
                srcDishImg={dish4} 
                title="Prato Chines" 
                description="prato maravilhoso que enche seu palar" 
                />
                <Dish 
                prece={79} 
                reviews={' (500+)'} 
                heart={5} 
                srcDishImg={dish1} 
                title="Prato Chines" 
                description="prato maravilhoso que enche seu palar" 
                />
            </div>
        </section>
    )
}