import React, {useState,useEffect} from "react";
import './App.css';
import Axios from 'axios'


function App() {

  const [startUpName,setStartUpName]= useState('');
  const [startUpReview,setStartUpReview]= useState('');
  const [startUpReviewList,setStartUpList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response)=>{
      setStartUpList(response.data);
    })
  }, [])

  const submitReview =()=>{
    Axios.post("http://localhost:3001/api/insert",{
      startUpName:startUpName,
      startUpReview:startUpReview,
    }).then(()=>{
      alert("successful insert");
    });
  };
  return (
    <div className="App">
      <h1>STARTUP REVIEW APPLICATION</h1>

      <div className="form">
      <label > STARTUP NAME: </label>
      <input type="text" name="startUPName" onChange={(e)=>{
        setStartUpName(e.target.value);
      }}

       />
      <label > REVIEW: </label>
      <input type="text" name="review" onChange={(e)=>{
        setStartUpReview(e.target.value);
      }} />
      <button onClick={submitReview}>Submit</button>
      {startUpReviewList.map((val)=>{
        return <h1>StartUpName:{val.startUpName}  | StartUp Review : {val.startUpReview}</h1>
      })}
      </div>
    </div>
  );
}

export default App;
