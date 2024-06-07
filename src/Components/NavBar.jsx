import React from 'react'

const NavBar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Add books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delete books</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=''>View all books</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar