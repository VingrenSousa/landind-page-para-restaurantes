import { useEffect, useRef, useState } from "react";
import Header from "./header";

import  HomeSection from "./HomeSections";
import MenuSection from "./MenuSection";
import AvaliacaoSection from "./AvalicaoSection";
import Footer from "./footer";

export default function App(){

    const[foco,setFoco]=useState<"Home" | "Cardàpio" | "Avaliacão">("Home") // foco definida palo menuHeader sobre onde pagina se encontra
    const HomeRef = useRef<HTMLDivElement>(null);
    const menuScrolRef = useRef<HTMLDivElement>(null);
    const AvalicaoRef = useRef<HTMLDivElement>(null);

     const [scrollY, setScrollY] = useState(0);

    function scrollToMenu() {
        if(foco==="Home"){
            HomeRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",});
        }else if(foco==="Cardàpio"){
            menuScrolRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",});
        }else{
             AvalicaoRef.current?.scrollIntoView({ behavior: "smooth",block: "start",inline: "nearest",});
        }
       
    }
  
    useEffect(()=>{
        scrollToMenu()
    },[foco])

    return(
        <div   ref={HomeRef}>
            <Header foco={foco} setFoco={(t)=>setFoco(t)}/>
            <main>
                <div>
                   <HomeSection focoSections={(t)=>setFoco(t)}/> 
                </div>
                
                <div ref={menuScrolRef}>
                    <MenuSection menuScrolRef={menuScrolRef}/>
                </div>
                    
                
                <div ref={AvalicaoRef}>
                    <AvaliacaoSection AvalicaoRef={AvalicaoRef}/>
                </div>
                
            </main>
            <Footer/>
        </div>
    )
}