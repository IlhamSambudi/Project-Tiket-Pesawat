<template>
  <body>
    <div class="d-flex flex row g-0">
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style="width: 230px; height: 800px"
      >
        <a
          href="/"
          class="
            d-flex
            align-items-left
            mb-3 mb-md-0
            me-md-auto
            text-dark text-decoration-none
          "
        >
          <img class="logo" src="../assets/logo.png" alt="" />
        </a>

        <br /><br /><br /><br />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link link-dark h5" aria-current="page">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-door"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark h5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-bookmark-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                />
              </svg>
              Bookmark
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark h5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-card-heading"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
                />
              </svg>
              Ticket
            </a>
          </li>
        </ul>

        <div class="dropdown">
          <a
            href="#"
            class="
              d-flex
              align-items-center
              link-dark
              text-decoration-none
              dropdown-toggle
            "
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul
            class="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 mt-3">
        <div class="input-group">
          <input
            type="text"
            name="search"
            v-model="search"
            class="form-control"
            placeholder="Search Your User"
          />
          <button
            class="btn btn-info glyphicon glyphicon-search"
            v-on:click="cari_data(user.id)"
          >
            Search
          </button>
        </div>

        <table class="table table-striped">
          <tr>
            <thead>
              <th class="info text-center" style="width: 30px">ID</th>
              <th class="info text-center" style="width: 200px">Nama</th>
              <th class="info text-center" style="width: 200px">
                Nomor Telepon
              </th>
              <th class="info text-center" style="width: 200px">Email</th>
              <th class="info text-center" style="width: 250px">Password</th>
              <th class="info text-center" style="width: 200px">Created At</th>
              <th class="info text-center" style="width: 200px">Updated At</th>
            </thead>
            <tbody>
              <tr v-for="user in user" :key="user.id">
                <td class="info text-center" style="width: 30px">
                  {{ user.id }}
                </td>
                <td class="info text-center" style="width: 200px">
                  {{ user.nama }}
                </td>
                <td class="info text-center" style="width: 200px">
                  {{ user.nomer_telepon }}
                </td>
                <td class="info text-center" style="width: 200px">
                  {{ user.email }}
                </td>
                <td class="info text-center" style="width: 250px">
                  {{ user.password }}
                </td>
                <td class="info text-center" style="width: 200px">
                  {{ user.created_at }}
                </td>
                <td class="info text-center" style="width: 200px">
                  {{ user.updated_at }}
                </td>
              </tr>
            </tbody>
          </tr>
        </table>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #e7f8ff;
}

.logo {
  border-radius: 10px;
  height: 50px;
  width: 100px;
}

.tulisan {
  text-decoration: none;
}

.table {
  background: none;
  width: 159%;
  height: 40%;
  margin-left: 40px;
  margin-top: 70px;
}
.input-group {
  margin-left: 30%;
  margin-top: 30px;
}
.form {
  border: none;
  border-radius: 10px;
  width: 90%;
  height: 40px;
}
</style>

<script>
export default {
  data: function () {
    return {
      user: [],
      search: "",
    };
  },
  created: function () {
    this.axios
      .get("http://localhost/tiket_pesawat/public/api/get_user")
      .then((response) => {
        this.user = response.data;
      });
  },

  cari_data: function () {
    this.axios
      .get("http://localhost/tiket_pesawat/public/api/get_user" + this.search)
      .then((response) => {
        this.user = response.data;
      })
      .catch((e) => console.log(e));
  },

  // cari_data: function () {
  //   this.axios
  //     .get(
  //       "http://localhost/tiket_pesawat/public/api/get_user/${id}" + this.search
  //     )
  //     .then((response) => {
  //       this.user = response.data;
  //     });
  // },
};
</script>
