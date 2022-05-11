//import { Link } from "react-router-dom";
import MapRadio from "./map-radio";
import "./map.scss"
import { Link } from "react-router-dom";
const Map = ()=> {
    return (
        <div className="map">
            <div className="map__content">
                <h2 className="map__title">Roadmap</h2>
                <Link children={"View"} to={"/map"} className={"map__link"}/>
            </div>
            <MapRadio nomber={3} type={"radio"}  name={"map"} child={"Planned"} color={"pink"}/>
            <MapRadio nomber={2} type={"radio"}  name={"map"} child={"In-Progress"}color={"fiolet"} />
            <MapRadio nomber={1} type={"radio"}  name={"map"} child={"Live"} color={"blue"}/>
        </div>
    )
}
export default Map;