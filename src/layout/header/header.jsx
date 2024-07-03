import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
   <div style={{display:"flex",justifyContent:"center",gap:"30px",padding:"20px"}}>
     <Link to={"/"}>Home</Link>
    <Link to={"/users"}>Users</Link>
    <Link to={"/contact"}>Contact</Link>
   </div>
  )
  
}
 