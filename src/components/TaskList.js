import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks, catFilter }) {
  let filteredTaskList 
  
  if (catFilter === "All") {
    filteredTaskList = tasks;
  } else {
    filteredTaskList = tasks.filter( x => (x.category === catFilter ) )
  }

  
  //console.log(filteredTaskList)

  return (
    <div className="tasks">
      { filteredTaskList.map((item) => 
        <Task 
          key={item.text} 
          text={item.text} 
          category={item.category} 
          handleDeleteClick={()=> setTasks( tasks.filter( x => (x.text !== item.text))) }
        /> ) 
      }
    </div>
  );
}

export default TaskList;