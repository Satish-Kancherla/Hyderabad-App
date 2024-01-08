import{Link}from "react-router-dom"
import { useAuth } from "./Auth";
// import PrivateRoute from "./Private-Route";


const Navbar = () => {
    const { user, logout } = useAuth();
    return ( 
        <div className="con">
        <nav >
            <span>HYDERABAD</span>
            <Link to="/">Home</Link>
            <Link /* onClick={window.scrollTo(0,0)}  */to="/contacts">Contact Us</Link>
            <Link /* onClick={window.scrollTo(0,0)}  */to="/about">About</Link>
            <Link to="/projects" >
                Projects
            </Link>
            {/* <Link to="/projects">
                <PrivateRoute>Projects</PrivateRoute>
            </Link> */}
            {/* <Link to="/login"  style={{color: "yellow",paddingLeft:"70px"}}>Employee Login</Link> */}
            
            {user ? (
                    <Link to="/login" onClick={logout}>Logout</Link>
            ) : (
                    <Link to="/login">Employee Login</Link>
            )}
        </nav>
        </div>
     );
}
 
export default Navbar;