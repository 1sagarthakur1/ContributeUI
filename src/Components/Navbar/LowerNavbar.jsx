import { NavLink } from "react-router-dom";


export default function LowerNavbar() {
    return (
        <div className="lower-navbar">
            <ul className="ulHSAE">
                <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/"><li>Home</li></NavLink>
                <NavLink  className={(e) => {return e.isActive? "red" : ""}} to="/creativdiv"><li>Creativity</li></NavLink>
                <NavLink className={(e) => {return e.isActive? "red" : ""}} to="/componentCreativity"><li>Create Component</li></NavLink>
                {/* <NavLink to='/service'><li>Service</li></NavLink>
                <NavLink to='/Contact'><li>Contact</li></NavLink> */}
            </ul>
        </div>
    )
}
