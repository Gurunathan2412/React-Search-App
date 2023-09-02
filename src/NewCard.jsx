import React, { useState } from 'react'
import './NewCard.css'

function NewCard({superb}) {
  return (
    <div className="grid">
    {superb.map((e)=>{
        return (
        <div className="grid__item" key={e.id}>
             <div className="card"><img className="card__img" src={e.image.url} alt="Snowy Mountains" />
                 <div className="card__content">
                     <h1 className="card__header">{e.name}</h1>
                     <p className="card__text"> {e.work.base !== '-' ? e.work.base: e.work.occupation !=='-' ? e.work.occupation: e.connections["group-affiliation"] !=='-' ? e.connections["group-affiliation"]:`First appearance: ${e.biography["first-appearance"]
}`} </p>
                     
                 </div>
             </div>
        </div>)

    })}
 </div>
  )
}

export default NewCard