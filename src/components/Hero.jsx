import grid from "../assets/grid.png"

export default function Hero(){
    return(
        <div className="px-9 py-8">
            <div className="w-4/4">
                <img src={grid}/>
            </div>
            <div>
                <h1 className="font-bold text-4xl py-4">Online Experiences</h1>
                Join unique interative activities led by one-of-a-kind hosts-all without leaving home.
            </div>
        </div>
    )
}