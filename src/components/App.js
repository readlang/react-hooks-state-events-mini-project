import React, { useState }  from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES /* , TASKS*/ });



function App() {
  const [catFilter, setCatFilter ] = useState( "All" )

  //setCatFilter("Code")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} catFilter={catFilter} setCategoryFilter={(x)=> setCatFilter(x)}/>
      <NewTaskForm />
      <TaskList tasks={TASKS} />
    </div>
  );
}

export default App;
