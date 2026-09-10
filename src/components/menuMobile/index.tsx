import "./styles.css"



type propsHeader={
    foco:"Home"|"Cardàpio"|"Avaliacão",
    setFoco(t:"Home"|"Cardàpio"|"Avaliacão",):void
}
export default function MenuMobile({foco,setFoco}:propsHeader){
    return(
        <div className="conteiner">
            <ul>
                <li className={`nav_item ${foco === "Home" ? "active" : ""}`}>
                    <button onClick={()=>setFoco("Home")} >
                        Home
                    </button>
                </li>
                <li className={`nav_item ${foco === "Cardàpio" ? "active" : ""}`}>
                    <button onClick={()=>setFoco("Cardàpio")}>
                        Cardàpio
                    </button>
                </li>
                <li className={`nav_item ${foco === "Avaliacão" ? "active" : ""}`}>
                    <button onClick={()=>setFoco("Avaliacão")}>
                        Avaliacão
                    </button>
                </li>
            </ul>
        </div>
    )
}