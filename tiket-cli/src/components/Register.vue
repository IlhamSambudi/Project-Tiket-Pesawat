<template>
  <div class="container">
    <div class="d-flex flex row g-0">
      <div class="img-wrapper col-md-6">
        <img class="img-login" src="../assets/SignUp.png" />
      </div>

      <div class="col-md-6 mt-3">
        <div class="card1 p-3">
          <div class="d-flex flex-column">
            <span class="login mt-3">Sign Up</span>
            <h5>Buat Akun Anda</h5>
          </div>
          <div class="input-field d-flex flex-column mt-3">
            <span>Email</span>
            <input class="form-control" placeholder="email@example.com" />
            <span class="mt-3">Nama Depan</span>
            <input class="form-control" placeholder="Enter Your First Name" />
            <span class="mt-3">Nama Belakang</span>
            <input class="form-control" placeholder="Enter Your Last Name" />
            <span class="mt-3">Nomor Telepon</span>
            <input class="form-control" placeholder="Enter Your Phone Number" />
            <span class="mt-3">Password</span>
            <input class="form-control" placeholder="Enter Your Password" />
            <button
              class="
                mt-4
                btn btn-info
                d-flex
                justify-content-center
                align-items-center
              "
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin-top: 20px;
  /* padding: 0; */
}

body {
  background-color: white;
}

.card1 {
  margin: auto;
  max-width: 400px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s;
}

.card1:hover {
  transform: scale(1.1);
}

.card2 {
  height: 400px;
  width: 100%;
  border: none;
  background-color: #00b7ff;
  border-radius: 8px;
  transition: all 0.5s;
}

.card2:hover {
  transform: scale(1.1);
}

.login {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

.input-field span {
  font-size: 12px;
  color: #bfbfbf;
  margin-left: 10px;
}

.form-control {
  font-size: 13px;
  color: #000000;
  font-weight: 500;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #9b9b9b;
  box-shadow: none;
}

.btn {
  height: 35px;
  width: 100%;
  background-color: #00b7ff;
  font-weight: 500;
  color: #ffffff;
  border: none;
  font-size: 15px;
}

.text1 .forget {
  color: #bfbfbf;
  font-weight: 500;
}

.text2 span {
  font-weight: 500;
  color: #7a7778;
}

.text2 .register {
  color: #00b7ff;
  font-weight: bold;
}
.im-wrapper {
  height: 100%;
  max-width: 50%;
  display: flex;
  justify-content: right;
  align-items: right;
}
.img-login {
  width: 90%;
  height: 92%;
}
</style>

<script>
export default {
  name: "Register",
};
</script>