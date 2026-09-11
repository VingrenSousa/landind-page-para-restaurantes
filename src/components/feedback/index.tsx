import { FaStar } from "react-icons/fa";
import "./styles.css"
type propsFeedback={
    avatar:string,
    name:string,
    star:number,
    description:string
}




export default function Feedback({avatar,name,star,description}:propsFeedback) {
    return (
        <div className="feedback">
            <img src={avatar } className="feedbackAvatar" />
            <div className="feedbackContent">
                <p>
                    { name }
                    <span>
                       { star&&
                        Array.from({length:star}).map((_,index)=><FaStar/>)}
                    </span>
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}