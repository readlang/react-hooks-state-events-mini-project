import React from "react";

function CategoryFilter({categories, catFilter, setCatFilter} ) {

  function mapper(x) {
    return( <button 
      key={x} 
      onClick={ ()=> setCatFilter(x) } 
      className={x === catFilter ? "selected" : "" } 
      > {x} </button> 
    )
  }

  //console.log("Selected Category Filter:", catFilter)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(mapper)}
    </div>
  );
}

export default CategoryFilter;