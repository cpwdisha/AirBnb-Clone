export default function Card({image, title, dprice, sprice}){
    return(
        <div>
            <div className="rounded-xl">
                <img src={image}/>
            </div>
            <div>
            <h3 className="font-medium">{title}</h3>
            <h4> Double Sharing : ${dprice} / month</h4>
            <h4> Single Sharing : ${sprice} / month</h4>
            </div>
            
        </div>
    )
}