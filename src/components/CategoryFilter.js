import React, {useState} from "react";

function CategoryFilter({categories, catFilter, setCategoryFilter} ) {
  function handleFilterClick(event) {
    console.log(event.target.textContent)
    console.log(event.target)
    setCategoryFilter(event.target.textContent)
    
    //event.target.className = "selected"

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        categories.map(x=>( <button key={x} onClick={() => handleFilterClick} 
          className={ catFilter === x ? "selected" : "" }  >{x}</button> ))
      }
    </div>
  );
}

export default CategoryFilter;
