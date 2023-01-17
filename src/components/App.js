import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestion] = useState([])

  useEffect(()=>{
      fetch("http://localhost:4800/questions")
      .then((res)=>res.json())
      .then((data)=>{
        //console.log(data.questions)
        setQuestion(data)
      })
    },[])




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  /> : <QuestionList questions={questions}/>}

    </main>
  );
}

export default App;
