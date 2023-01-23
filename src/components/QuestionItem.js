import React from "react";


function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

//patch 
function handleChange(event){
    let answerTobeChanged = event.target.value


fetch(`http://localhost:4800/questions/${id}`,{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify({ "correctIndex": answerTobeChanged})
 })
 .then((res)=>res.json())
 .then((data)=>console.log(data))
  
}

  
  function handleDelete() {
    fetch(`http://localhost:4800/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
    .then (r => r.json())
    .then((page)=>{
      alert("deleted")
    })
    document.location.reload();
  }



  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
