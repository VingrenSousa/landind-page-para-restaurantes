import { Children, type ButtonHTMLAttributes,  type ReactNode } from "react"
import "./styles.css"
type propsButton ={
    title?:string,
    children?:ReactNode,
   
    
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({title,children,...rest}:propsButton){
    
    
    return(
       
            <button
            className={`button `}
            {...rest}>
               
                {Children&&
                    <div>
                        {children}
                    </div>
                }
                {title&&title}
            </button>
        
    )
}