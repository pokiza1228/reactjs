//import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MapRadio from "./map-radio";
import "./map.scss"
import { Link } from "react-router-dom";
import { ProductContext } from "../../App";
const Map = ()=> {
    const {posts}=useContext(ProductContext);

    const [count, setCount]=useState({
        planned:0,
        suggetsion:0,
        inPland:0,
        live:0
    })

    useEffect(()=>{
        const counstClone={...count};
        posts.productRequests.forEach(element => {
            switch (element.status) {
                case "in-progress":
                    return ++counstClone.inPland
                case "live":
                    return ++counstClone.live
                case "suggestion":
                    return ++counstClone.suggetsion
                default:
                    return ++counstClone.planned
            }
        });
        setCount(counstClone)
    },[])
    
    return (
        <div className="map">
            <div className="map__content">
                <h2 className="map__title">Roadmap</h2>
                <Link children={"View"} to={"/map"} className={"map__link"}/>
            </div>
            {/*  */}
            <MapRadio nomber={count.planned} type={"radio"}  name={"map"} child={"Planned"} color={"pink"}/>
            <MapRadio nomber={count.inPland} type={"radio"}  name={"map"} child={"In-Progress"}color={"fiolet"} />
            <MapRadio nomber={count.live} type={"radio"}  name={"map"} child={"Live"} color={"blue"}/>
            <MapRadio nomber={count.suggetsion} type={"radio"}  name={"map"} child={"Suggestion"} color={"pink"}/>
        </div>
    )
}
export default Map;