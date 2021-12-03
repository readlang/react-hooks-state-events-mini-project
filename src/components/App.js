import React, { useState }  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [catFilter, setCatFilter ] = useState( "All" )

  function handleNewTask(newTask) {
    setTasks( [...tasks, newTask] )
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter categories={CATEGORIES} catFilter={catFilter} setCatFilter={setCatFilter} />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={(inputs)=> handleNewTask(inputs)} />
      <TaskList tasks={tasks} setTasks={setTasks} catFilter={catFilter} />
    </div>
  );
}

export default App;