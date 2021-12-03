import React, {useState} from "react";

function CategoryFilter({categories, catFilter, setCategoryFilter} ) {
  function handleFilterClick(event) {
    console.log("1", event.target.textContent)
    console.log("2", event.target)
    setCategoryFilter(event.target.textContent)
    
    //event.target.className = "selected"

    /// Stuck here with an error
  }
  console.log("3", catFilter)

  function mapper(x) {
    let classVari = ""
    if (x === catFilter) {
      classVari = "selected"
      console.log("selected")
    } 

    console.log("4", x)

    return( <button key={x} onClick={handleFilterClick} className={classVari} > {x} </button> )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(mapper)}
    </div>
  );
}

export default CategoryFilter;
