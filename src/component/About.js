import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>{/* navbar start  */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <Link className="nav-link active text-capitalize" to="/about">about</Link>
              {/* <a class="nav-link active text-capitalize" href="/">
                about
              </a> */}
            </li>

            <li class="nav-item">
              <a class="nav-link active text-capitalize" href="/">
                service
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link active text-capitalize" href="/">
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* navbar ends */}

    
    </>
  )
}

export default About