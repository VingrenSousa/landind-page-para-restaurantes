import { useState } from "react";
import Header from "./header";

import  HomeSection from "./HomeSections";
import MenuSection from "./MenuSection";
import AvaliacaoSection from "./AvalicaoSection";

export default function App(){

    const[foco,setFoco]=useState<"Home" | "Cardàpio" | "Avaliacão">("Home") // foco definida palo menuHeader sobre onde pagina se encontra


    return(
        <div>
            <Header foco={foco} setFoco={(t)=>setFoco(t)}/>
            <main>
                <HomeSection focoSections={foco}/>
                <MenuSection/>
                <AvaliacaoSection/>
            </main>
        </div>
    )
}