import { FaHeart } from "react-icons/fa6"
import"./styles.css"
import Button from "../button";
import { PiBasketFill } from "react-icons/pi";
type propsDish={
    srcDishImg:string,
    title:string,
    description:string
    heart:number,
    reviews:string
    prece:number
};
export default function Dish({srcDishImg,title,description,heart,reviews,prece}:propsDish){
    return(
    <div className="dish">
        <div className="dishHeart">
            <FaHeart/>
        </div>
        <img src={srcDishImg} className="dishImg"/>
        <h3 className="dishTitle">{title} </h3>
        <span className="dishDescription">
             {description}
        </span>
        <div className="dishLike">
            {
            heart&&
                Array.from({length:heart}).map((_,index)=>{
                    return(
                        <FaHeart key={index}/>
                    )
                })
            }
            <span>
                {reviews}
            </span>         
        </div>
        <div className="dishPrice">
            <h4>
                R${prece}
            </h4>
            <Button>
                <PiBasketFill/>
            </Button>

        </div>
    </div>
    );
};