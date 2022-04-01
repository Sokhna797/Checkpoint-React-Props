import logo from './logo.svg';
import './App.css';
import { Image } from './Profile/profile';
import Row from './Profile/profile';

import { checkPropTypes } from 'prop-types';
import PropTypes from "prop-types";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


const  App= () => {
  /*const doSomethingAmazing = name =>alert(name)*/
  
  return (
    <div className="App container mt-5 mb-5 "  style={{height: "100%",width:"100%",marginLeft: "200px", marginRight: "200px"}}>

    <div >

   
        <div className="col-lg-6" >

            <div className="card">
      <div className="div1 card-body" >
        

      <Row  style={{float : "right"}} >
        <div style= {{float: "left" ,marginRight:"100px"}}>
        <Image ></Image>

        </div>
     </Row>
    <div>
      
    </div>
        
     </div>
   
</div>

</div>
</div>
</div>


  
  );
}




App.prototype ={
  firstName:PropTypes.string,
  lastName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string
  
}




export default App;

