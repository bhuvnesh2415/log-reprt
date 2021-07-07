import React, { useState } from "react";
import "./Final.css";
import axios from "axios";
function Final() {
    
    const [postData1,setpostData1]=useState();
    const [postData2,setpostData2]=useState();
    const [postData3,setpostData3]=useState();
    const [postData4,setpostData4]=useState();
    const [postData5,setpostData5]=useState();

    const handleChange1=(event)=>{
      setpostData1(event.target.value)
    }
    const handleChange2=(event)=>{
      setpostData2(event.target.value)
    }
    const handleChange3=(event)=>{
      setpostData3(event.target.value)
    }
    const handleChange4=(event)=>{
      setpostData4(event.target.value)
    }
    const handleChange5=(event)=>{
      setpostData5(event.target.value)
    }

    const submitHandler=(event)=>
    {event.preventDefault();
      const postData={DateFrom:postData1,DateTo:postData2,UserCode:postData3,FormName:postData4,LogType:postData5}
      console.log(postData)
      axios.post('',postData).then(response=>console.log(response)).catch(error=>console.log(error))
    }





  return (
    <>
    <form onSubmit={submitHandler}>
      <div className="main">
        <div className="main1">
          <h3>User Log Report</h3>
        </div>
        <br></br>
        <div className="">
          <h4>Log Date From &nbsp;<input type="date" onChange={handleChange1} value={postData1}></input></h4>
          <br></br>
          <h4>Log Date To &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" value={postData2} onChange={handleChange2}></input></h4>
        </div>
        <br></br>

        <div className="">
          <h4>User Code &nbsp;<input type="search" onChange={handleChange3} value={postData3} placeholder="User Code"></input></h4>
        </div>
        <br></br>

        <div className="">
          <h4>Form Name &nbsp;<input type="search" onChange={handleChange4} value={postData4} placeholder="Form Name"></input></h4>
        </div>
        <br></br>

        <div className="">
          <h4>Log Type  &nbsp;  
            <select name="cars" id="cars" placeholder="951" onChange={handleChange5} value={postData5} >
              <option value="" disabled selected hidden>--Select--</option>
              <option value="Insert">Insert</option>
              <option value="Update">Update</option>
              <option value="Delete">Delete</option>
            </select>
          </h4>

        </div>
        <br></br>

        <div className="">
        <button>Search</button>
        </div>
        <br></br>
        <div>

        <input type="reset" value="Reset"></input>
        </div>

      </div>
      </form>
      <table >
  <tr>
    <th>USER CODE</th>
    <th>CREATED  AT</th> 
    <th>CREATED BY</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
    </>

  )
}
export default Final;