import React from 'react'

const Searching = () => {
  return (
    <div className="container">
    <form className="container-input">
      <span className="icon-form">
        <button type="submit" class="btn btn-link" id="geolocation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="grey"
            class="bi bi-geo-alt-fill text-center"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </button>
      </span>
      <span className="search-text">
        <input
          type="search"
          id="search-text"
          className="form control placeholder col-12 text-center  bg-transparent mt-3"
          placeholder="Enter a city"
          autoComplete="off"
        />
      </span>
      <span className="icon-form">
        <button type="submit" className="btn btn-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="grey"
            class="bi bi-search text-center"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </span>
    </form>
  </div>
  )
}

export default Searching