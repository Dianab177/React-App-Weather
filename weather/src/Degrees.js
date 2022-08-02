import React from 'react'

const Degrees = () => {
  return (
    <div className="container">
    <h1>22º</h1>
    <div className="dregrees-convert">
      <button
        type="submit"
        class="btn btn-link"
        title="link farhenheit degrees"
      >
        <h3>C</h3>
      </button>
      
      <button
        type="submit"
        class="btn btn-link"
        title="link celsius degrees"
      >
        <h3>F</h3>
      </button>
    </div>
  </div>
  )
}

export default Degrees