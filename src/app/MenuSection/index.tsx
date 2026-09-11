import "./styles.css"
import { FaHeart } from "react-icons/fa";
import dish1 from "../../assets/dish.png" 
import dish2 from "../../assets/dish2.png" 
import dish3 from "../../assets/dish3.png" 
import dish4 from "../../assets/dish4.png" 
import Dish from "../../components/dish";
import { useEffect, useRef, useState, type RefObject } from "react";


type propsRef={
     menuScrolRef:RefObject<HTMLDivElement | null>;
}
export default function MenuSection({menuScrolRef}:propsRef){

    const [visible, setVisible] = useState(false);
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry=entries[0]
            if(entry.isIntersecting){
                setVisible(true)
                
            }else{
                setVisible(false)
            }
            
        },{threshold:0.1})

        if (menuScrolRef.current) {
            observer.observe(menuScrolRef.current);
        }

        return () => observer.disconnect();
  }, []);

    return(
        <section className={visible?"menu active":"menu"} ref={menuScrolRef}>
            <h2 className={"sectionTitle"}> Cardápios</h2>
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