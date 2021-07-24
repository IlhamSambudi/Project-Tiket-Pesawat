<template>
  <nav>
    <div class="bg-img">
      <div class="container">
        <nav>
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
            <a
              href="/"
              class="
                d-flex
                align-items-center
                mb-3 mb-md-0
                me-md-auto
                text-dark text-decoration-none
              "
            >
              <img class="logo" src="../assets/logo.png" alt="" />
            </a>

            <ul class="nav nav-pills">
              <li class="active nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <a href="#whyus" class="nav-link">WhyUs</a>
              </li>
              <li class="nav-item"><a href="#" class="nav-link">Offer</a></li>
              <li class="active nav-item">
                <router-link class="nav-link" to="/adminuser">Tes Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">
                  <button type="button" class="btn btn-primary">
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
  </nav>
  <router-view></router-view>
  <br /><br />
  <div class="container">
    <div class="containers">
      <div class="col-md-7 order-md-2">
        <h2 class="cardtulisan featurette-heading">Why Us?</h2>
        <p class="lead">
          Flightin adalah platform untuk memesan tiket pesawat dengan mudah.
          Flight in menawarkan fitur - fitur yang memudahkan anda dalam mencari
          penerbangan dan maskapai yang anda minati
        </p>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary" type="button">Read More</button>
        </div>
      </div>
      <div class="col-md-5" id="whyus">
        <img src="../assets/plane.png" class="img-culture" alt="..." />
      </div>
    </div>
  </div>
  <br />
  <hr class="featurette-divider" />
  <br /><br />
  <div class="container">
    <div class="container text-center">
      <h2 class="cardtulisan featurette-heading">What We Serve</h2>
      <h1 class="featurette-heading"><strong>TOP VALUES FOR YOU</strong></h1>
      <br /><br />
    </div>

    <div class="row">
      <div class="col text-center">
        <div class="mb-2">
          <img class="imgserver" src="../assets/Aircraft.png" />
          <div class="card-body">
            <h6 class="card-title">International Flight</h6>
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="mb-2">
          <img class="imgserver" src="../assets/FlightBook.png" />
          <div class="card-body">
            <h6 class="card-title">Exact Schedule</h6>
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="mb-2">
          <img
            class="imgserver"
            src="../assets/Secure.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h6 class="card-title">Safe Transaction</h6>
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="mb-2">
          <img
            class="imgserver"
            src="../assets/Coin.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h6 class="card-title">Price Selection</h6>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr class="featurette-divider" />
    <br /><br />
    <div class="container">
      <div class="containers">
        <div class="col-md-7 order-md-2">
          <h2 class="cardtulisan featurette-heading">What They Say?</h2>
          <h1 class="featurette-heading">
            <strong>WHAT OUR CUSTOMERS SAY ABOUT US</strong>
          </h1>
          <p class="lead">
            Flightin adalah platform untuk memesan tiket pesawat dengan mudah.
            Flight in menawarkan fitur - fitur yang memudahkan anda dalam
            mencari penerbangan dan maskapai yang anda minati
          </p>
        </div>
        <div class="col-md-5">
          <img src="../assets/GroupChat.png" class="img-culture" alt="..." />
        </div>
      </div>
    </div>
    <br />
    <hr class="featurette-divider" />
    <div class="container">
      <div class="container text-center">
        <h2 class="cardtulisan featurette-heading">Find Your Cities</h2>
        <h1 class="featurette-heading">TOP LOCAL DESTINATIONS</h1>
        <br /><br />
      </div>
      <div class="row">
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic2" src="../assets/RajaAmpat.jpg" />
            <div class="card-body">
              <h4 class="card-title">Raja Ampat</h4>
              <p>Papua Barat, Indonesia.</p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic2" src="../assets/Bromo.jpg" />
            <div class="card-body">
              <h4 class="card-title">Gunung Bromo</h4>
              <p>Jawa Timur, Indonesia.</p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic2" src="../assets/Gili_Trawangan.jpg" />
            <div class="card-body">
              <h4 class="card-title">Gili Trawangan</h4>
              <p>Nusa Tenggara Barat, Indonesia.</p>
            </div>
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic2" src="../assets/Borobudur.jpg" />
            <div class="card-body">
              <h4 class="card-title">Candi Borobudur</h4>
              <p>Jawa Tengah, Indonesia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr class="featurette-divider" />
    <br /><br />
    <div class="container">
      <div class="cardtulisan px-4 text-center h4" id="culture">
        <strong>With Your Favorite Maskapai</strong>
      </div>
      <br /><br />
      <div class="row">
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/GarudaIndonesia.png" />
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/SingaporeAirlines.png" />
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/LionAir.png" />
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/Citilink.png" />
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/MerpatiAir.png" />
          </div>
        </div>
        <div class="col text-center">
          <div class="mb-2">
            <img class="imgiconic" src="../assets/BatikAir.png" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <hr class="featurette-divider" />
    <br /><br />
    <div class="container">
      <div class="bg-info card text-center">
        <div class="card-body">
          <h5 class="cardtulisan2 card-title">Special title treatment</h5>
          <h3 class="cardtulisan2 card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </h3>
          <br />
          <a href="#" class="cardtulisan btn bg-light">Get started</a>
          <a href="#" class="cardtulisan btn bg-light">View Offer</a>
        </div>
      </div>
    </div>
    <br />
    <hr class="featurette-divider" />
    <br />
  </div>
  <div>
    <footer class="text-center text-lg-start text-muted" id="aboutus">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <img class="imgfooter" src="../assets//logo.png" alt="" />
            <p>We're a Mission to Help People Spend Less and Travel More</p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >Platform</a
              >
            </p>
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >Security</a
              >
            </p>
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >Help Center</a
              >
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >Company</a
              >
            </p>
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >User Manual</a
              >
            </p>
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >User Stories</a
              >
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4">About</a>
            </p>
            <p>
              <a href="#!" class="tulisan text-uppercase fw-bold mb-4"
                >hellouser@test.com</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="text-center p-4" style="background-color: #2a2829">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="">Team 3</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url("../assets/main.png");
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
  margin: 1%;
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

<script>
export default {
  name: "Home",
};
</script>