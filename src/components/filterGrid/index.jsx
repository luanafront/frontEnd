import React from "react";
import "./index.css";

function FilterGrid ({label, filters, action, removeFiltersAction}) {
  return (
    <nav className="boxFilterGrid">
      <p className="boxFilterGrid--text">{label}</p>
      <ul className="boxFilterGrid--filterItens listCategories">{filters.map((item, index) => {
        return <li key={`${item}${index}`} className="listCategories--item" onClick={action}>{item}</li>
      })}</ul>
      <button className="boxFilterGrid--resetButton" onClick={removeFiltersAction}>Remover Filtros</button>
    </nav>
  )
}

export default FilterGrid