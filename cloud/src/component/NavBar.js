import {NavLink} from "react-router-dom";


const NavBar = ()=>{
    const activateStyle = {
        backgroundColor:'black',
        color:'white'
    };
    return(
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) =>
                        isActive ? activateStyle : null}>home</NavLink>
                </li>
                <li>
                    <NavLink to="/menupage" style={({isActive}) =>
                        isActive ? activateStyle : null}>menuPage</NavLink>
                </li>
            </ul>
        </>
    )
}
export default NavBar;