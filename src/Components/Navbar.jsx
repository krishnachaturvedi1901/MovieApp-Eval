import { Link } from "@chakra-ui/react";
import React from "react";

const links=[
  {path:"/",title:"Home"},
  {path:"/login",title:"Login"},
  {path:"/bookings",title:"Bookings"},
]

const Navbar = () => {
  return(

  <div style={{display:"flex", borderBottom:"1px solid #cecece", position:"fixed",zIndex:1, padding:"10px",backgroundColor:"#000000", width:"100%", justifyContent:"flex-end",backgroundColor:"black"}}>
       {links.map((link)=>(
          <div style={{margin:"10px", color:"white",fontSize:"18px"}}>
           <Link key={link.path} to={link.path}>{link.title}</Link>
          </div>

       ))}
  </div>
  )
};

export default Navbar;