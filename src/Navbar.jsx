import React from 'react';
import "./Navbar.css";
import Studymaterial from './Studymaterial';
import ExploreCourses from './ExploreCourses'
import  AskAQuestion from './AskAQuestion'

import SearchBar from './SearchBar'

import Logo from './Logo';

function Navbar(){
  return(
    // <>
    // <Logo/>
    // <div className ="Navbar">
    //     <SearchBar/>
    //   <div className= "leftSide">
    //     <div className="links">
    //     <StudyMaterial/>
    //     <ExploreCourses/>
    //     <AskAQuestion/> 
    //     <Mobiledrop/>
    //     </div>
    //   </div>
    // </div>
    // </>

      <>
       <div className="all" >
        <Logo/>
        
        <div className="Navbar">
        <i class='bx bx-search  scan'></i>
         <SearchBar/>
          <Studymaterial/>
          <ExploreCourses/>
          <AskAQuestion/>
        </div>
      </div>
      
      </>
  )
}
export default  Navbar;

