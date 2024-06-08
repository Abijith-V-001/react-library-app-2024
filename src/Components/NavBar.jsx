import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Library</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add books</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search books</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete books</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/viewall'>View all books</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar