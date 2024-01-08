import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes,Route} from "react-router-dom";
import FeaturedProjects from "./Featured-Project";
import NewProjects from "./New-Projects";
import { AuthProvider } from "./Auth";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Login from "./Login"; 
import Logout from "./Logout";

/* const LazyContact= React.lazy(()=> import("./Contacts"))
const LazyAbout= React.lazy(()=> import("./About"))
const LazyProjects= React.lazy(()=> import("./Projects"))
const LazyLogin= React.lazy(()=> import("./Login"))
const LazyLogout= React.lazy(()=> import("./Logout")) */


const Main = () => {
    return ( 
        <AuthProvider>
            <div className="main"> 
                <div className="content">
                <Navbar />
                <div className="button"> 
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contacts" element={<Contacts />}/>  {/* {<React.Suspense fallback=""><LazyContact /></React.Suspense>} */}
                <Route path="/about" element={<About/>}/>  {/* {<React.Suspense fallback=""><LazyAbout /></React.Suspense>} */} 
                <Route path="/projects" element={<Projects/>}>  {/* {<React.Suspense fallback=""><LazyProjects /></React.Suspense>} */} 
                    <Route path="featured" element={<FeaturedProjects />}/>
                    <Route path="new" element={<NewProjects />}/>
                </Route>
                <Route path="/login" element={<Login />}/>
                 {/* {<React.Suspense fallback=""><LazyLogin /></React.Suspense>} */} 
                {/*<Route path="/logout" element={<Logout />}/>   {<React.Suspense fallback=""><LazyLogout /></React.Suspense>} */} 
            </Routes>
            </div>
            </div>            
        </div>  
        </AuthProvider>
     );
}
 
export default Main;
