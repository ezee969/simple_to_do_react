import React, { useState } from "react";
import Overview from "./components/pages/Overview";
import uniqid from "uniqid";

export default function App() {
  const [task,setTask] = useState({text: "", id:uniqid()})
  const [tasks,setTasks] = useState([])
  
  const handleChange = () => {
    setTask({text: document.querySelector("input").value, id:uniqid()})
  }

  const handleSubmit = () => {
    if (task.text !== ""){
    setTasks(currentTasks => currentTasks.concat(task))
    setTask({text:"", id:uniqid()})
    }
  }
  
  const handleDelete = (e) => {
    let taskIndex = tasks.findIndex((task) => task.id === e.target.key)
    // setTasks(currentTasks => currentTasks.splice(taskIndex, 1))
    console.log(e.target.parentElement)
  }

  return (
    <div className="main-cont">
      <div className="to-do-cont"> 
        <div className="input-cont">
          <form>
            <input value={task.text} onChange={handleChange} maxLength="25" type="text" id="input" name="input" placeholder="Write your input"/>
          </form>
          <button onClick={handleSubmit} >Submit</button> 
        </div>
        <div className="tasksCont">
          <ul>
            <Overview tasks = {tasks} deleteFunction = {handleDelete}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

