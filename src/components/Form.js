import React from 'react'

export default function Form() {
  return (
    <div>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="3"></textarea>
        </div>
        <nav  className="navbar bg-body-tertiary">
      <form  className="container-fluid justify-content-start">
        <button  className="btn btn-outline-success me-2" type="button">Upper Case</button>
        <button  className="btn btn-outline-success me-2" type="button">Lower Case</button> 
      </form>
    </nav>
    </div>
    
  )
}
