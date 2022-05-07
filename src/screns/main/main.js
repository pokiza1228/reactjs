import { Link } from "react-router-dom"

const Main = () => {
    return (
        <>
        <h1>
            Main
        </h1>
            <Link to="/about">About</Link><br/> 
            <Link to="/add-feedback">add-feedback</Link>
        </>
    )
}

export default Main;