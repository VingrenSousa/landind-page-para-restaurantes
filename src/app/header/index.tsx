import { FaBurger } from "react-icons/fa6";
import Button from "../../components/button";
import { IoMenu } from "react-icons/io5";
import MenuMobile from "../../components/menuMobile";
import "./styles.css"
import { THEME } from "../../styles/theme";
import { useState,  } from "react";
import { MdRestaurantMenu } from "react-icons/md";

type propsHeader={
    foco:"Home"|"Cardàpio"|"Avaliacão",
    setFoco(t:"Home"|"Cardàpio"|"Avaliacão",):void,
   
}
export default function Header({foco,setFoco}:propsHeader){
    const[isMenu,setIsMenu]=useState(false)
    function handleButtomFoco(foco:"Home"|"Cardàpio"|"Avaliacão"){
        setFoco(foco)
        return
    }

    return(
        <header  className="conteinerHeader">
            <nav  className="NavBar">
                <div>
                    <FaBurger size={24} color={THEME.COLOR.laranja}/>
                    <p> FOOD</p>
                </div>
                
                
                <ul className="nav_list">
                    <li className={`nav_item ${foco === "Home" ? "active" : ""}`}>
                        <button onClick={()=>handleButtomFoco("Home")}>
                            Home
                        </button>
                    </li>
                    <li className={`nav_item ${foco === "Cardàpio" ? "active" : ""}`}>
                        <button onClick={()=>handleButtomFoco("Cardàpio")}>
                            Cardàpio
                        </button>
                    </li>
                    <li className={`nav_item ${foco === "Avaliacão" ? "active" : ""}`}>
                        <button onClick={()=>handleButtomFoco("Avaliacão")}>
                            Avaliacão
                        </button>
                    </li>
                </ul>
                
                <span className="btn">
                    <Button title="Peça aqui" /> 
                </span>
               
                <span className="bto_mobileMenu">
                    <Button onClick={()=>{
                        setIsMenu(!isMenu)
                    }}>
                        {
                           isMenu
                           ?(<MdRestaurantMenu size={28}/>)
                           :(<IoMenu size={28}/>)
                        }
                        
                    </Button>
                </span> 
                
            </nav>
            <div className={`MenuMobile ${isMenu?"menuAction":""}`}>
                <MenuMobile foco={foco} setFoco={(t)=>handleButtomFoco(t)}/>
            </div>
            
        </header>
    )
}