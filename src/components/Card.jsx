export default function Card({image, rating, reviewCount, country, title, price}){
   let a  = 10;
    let str = `the value of a is  ${a}`;


    return(
        <div>
            <div className="rounded-xl">
                <img src={image}/>
            </div>
            <div>
            {rating} {reviewCount} Location : {country}
            <h3 style={{display: title ? "block" : "none"}} className="font-medium">Property : {title}</h3>

            {/* className={`${title ? "bg-slate-700" : "bg-red-700"}`}> */}

            <h4> Double Sharing : ${price} / month</h4>
            </div>
            
        </div>
    )
}

