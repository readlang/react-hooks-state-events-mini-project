import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit } ) {
  const [inputs, setInputs] = useState( {text: "", category: "Code"} )
  console.log(inputs)


  return (
    <form className="new-task-form" onSubmit={(e)=> {e.preventDefault(); onTaskFormSubmit(inputs)} }>

      <label>
        Details
        <input type="text" name="text" onChange={(e)=> setInputs( {...inputs, text: e.target.value } ) } />
      </label>

      <label>
        Category
        <select name="category" value={inputs.category} onChange={(e)=> setInputs( {...inputs, category: e.target.value} )} >
          { ( categories.filter(x=> (x !== "All")) ).map(x=> (  <option key={x} value= {x}> {x} </option> ) ) }
          
        </select>
      </label>

      <input type="submit" value="Add task" />

    </form>
  );
}

export default NewTaskForm;
