import { useState } from "react";
import SearchBox from "./SearchBox";
import WheatherCard from "./WheatherCard";
import "./WheaterApp.css"

export default function WheatherApp() {
    let [data, setNewData] = useState({
        city:"Delhi",
        feels_like: 29,
        humidity: 46,
        pressure: 1009,
        temp: 29,
        temp_max: 29,
        temp_min: 29,
    })
    let updateData = (result) => {
        console.log(result,"ok")
        setNewData({...result});
       
    }
    return (
        <>  <div className="WheatherApp">
            <h1>Wheather App</h1>
            <SearchBox updateData={updateData} />
            <WheatherCard data={data} />
        </div>
        </>
    )
}