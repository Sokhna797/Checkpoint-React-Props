import React, { Profiler } from "react";

const styleObject = {heigth :"250px", width : "200px"}

export const Image = () =>{
    return (
        <div >
        <img src="/imageInPublic.jpg" style = {styleObject}/>
        </div>
    );
  };

  
  const Row = (props) =>{
      const {fullName="Sokhna Faye",bio="azert",profession="zerty"} =props;
       
      function HandleName () {

        function handleClick(ev) {
          ev.preventDefault();
          alert("Votre nom est " +fullName)
          };
        return  <button  class="btn btn-primary btn-block" onClick={handleClick} >Cliquez ici!</button>
      
       
      };
      return ( 
    <div>
       <div>
        {props.children}
     </div>
        <div className=" fw-bold lh-1 mb-3">
          <span >Full Name : {fullName} </span>
  
        </div>
       
        <div className=" fw-bold lh-1 mb-3">
          <span>Bio : {bio} </span>
        </div>
        <div >
          <span className="card-text fw-bold lh-1 mb-3" >Profession : {profession} </span>
        </div>
       <div>
         <HandleName/>
       </div>
    </div>
    )
  };
  
  

  
  export default Row;
   