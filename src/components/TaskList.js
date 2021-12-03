import React, {useState} from "react";
import Task from "./Task"



function TaskList({ tasks }) {
  const [taskArray, setTaskArray] = useState(tasks)


  return (
    <div className="tasks">
      { taskArray.map((x) => <Task key={x.text} text={x.text} category={x.category} 
        handleDeleteClick={(e)=> console.log(e) /* setTaskArray( taskArray.filter(x=>(x.text !== e.)))*/ }
        //stuck here with how to grab key or text out of event "e.target"
      />) }
    </div>
  );
}

export default TaskList;
