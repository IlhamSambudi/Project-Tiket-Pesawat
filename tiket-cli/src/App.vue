<template>
  <div id="app">
    <!-- <nav>
      <div class="bg-img">
        <div class="container">
          <nav>
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
              <a
                href="#"
                class="
                  d-flex
                  align-items-center
                  mb-3 mb-md-0
                  me-md-auto
                  text-dark text-decoration-none
                "
              >
                <img class="logo" src="./assets/logo.png" alt="" />
              </a>

              <ul class="nav nav-pills">
                <li class="active nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item"><a href="#" class="nav-link">WhyUs</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Offer</a></li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login"
                    ><button type="button" class="btn btn-primary">
                      Sign-up
                    </button></router-link
                  >
                </li>
              </ul>
            </header>
          </nav>
        </div>

        <div class="form">
          <form>
            <h1></h1>
            <div class="form-box">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FROM
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TO
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  TO
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
              <button class="search-btn" type="button">Search</button>
            </div>
          </form>
        </div>
      </div>
    </nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.bg-img {
  background-image: url("./assets/main.png");
  min-height: 720px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  align-items: center;
  justify-content: center;
}

.logo {
  border-radius: 10px;
  height: 50px;
  width: 100px;
}

body {
  margin: 0;
  padding: 0;
}

.form {
  height: 90vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}

h1 {
  color: black;
  margin-bottom: 100px;
  font-size: 45px;
  letter-spacing: 2px;
}

.search-field {
  height: 50px;
  padding: 10px;
  border: none;
  border-radius: 25px;
  outline: none;
}

.search-btn {
  height: 50px;
  width: 100px;
  background: #00b7ff;
  border: none;
  color: #000;
  border-radius: 10px;
}

.form-box {
  background: white;
  padding: 10px;
  border-radius: 25px;
}

.btn-group {
  width: 200px;
  height: 90px;
}

.logo {
  border-radius: 10px;
  height: 50px;
  width: 100px;
}

.containers {
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-culture {
  border-radius: 10px;
  height: 480px;
  width: 460px;
}

.imgserver {
  border-radius: 10px;
  height: 150px;
  width: 150px;
  box-shadow: 2px 2px 2px 2px #819197;
  padding: 10px;
}

.imgiconic {
  border-radius: 10px;
  height: 150px;
  width: 150px;
  box-shadow: 2px 4px 4px #00b7ff;
  padding: 10px;
}

.imgiconic2 {
  border-radius: 10px;
  height: 400px;
  width: 280px;
  box-shadow: 2px 3px 2px #7a8f97;
  padding: 5px;
}

.cardtulisan {
  color: #00b7ff;
}

.cardtulisan2 {
  color: #ffffff;
}

.imgfooter {
  height: 70px;
  width: 120px;
}

.tulisan {
  text-decoration: none;
  color: black;
}
</style>
