<script>
export default {
  name: "HotelCard",
  props: ["hotelInfo"],
  methods: {
    goHotelPageRoute(hotelId) {
      this.$router.push({
        name: "HotelPage",
        params: {
          id: hotelId,
        },
      });
    },
  },
};
</script>

<template>
  <div class="mb-4">
    <b-card no-body class="card shadow p-3">
      <b-row no-gutters>
        <b-col md="7" class="p-0 d-flex align-items-center">
          <b-card-img
            :src="hotelInfo.images.cardImage"
            alt="Image"
            class="card-img shadow"
          ></b-card-img>
        </b-col>
        <b-col md="5">
          <b-card-body class="py-0" style="height: 192px">
            <!-- Hotel Name start-->
            <h3 class="m-0">{{ hotelInfo.hotelName }}</h3>
            <!-- Hotel Name finish-->

            <!-- Stars start -->
            <div class="mt-1 mb-2">
              <span
                v-for="i in Number(hotelInfo.starNumber)"
                :key="i"
                class="fa fa-star star-color mr-1"
              ></span>
            </div>
            <!-- Stars finish -->

            <!-- Price start -->
            <div class="my-2">
              <p class="m-0">
                <strong class="price-text">${{ hotelInfo.price }}</strong>
                <small> / per night</small>
              </p>
            </div>
            <!-- Price finish -->

            <!-- Location start -->
            <div class="my-2">
              <div class="row">
                <div class="col-1">
                  <span><i class="fas fa-map-marker-alt loc-icon"></i></span>
                </div>
                <div class="col p-0 pl-1">
                  <span
                    >{{ hotelInfo.location.city }} /
                    {{ hotelInfo.location.country }}</span
                  >
                </div>
              </div>
            </div>
            <!-- Location finish -->
          </b-card-body>
        </b-col>
      </b-row>

      <!-- More info button start -->
      <b-row class="mt-3">
        <b-col>
          <b-button
            @click="goHotelPageRoute(hotelInfo.id)"
            block
            class="btn btn-info"
            >More info</b-button
          >
        </b-col>
      </b-row>
      <!-- More info button finish -->
    </b-card>
  </div>
</template>

<style scoped>
.card {
  background-color: #f4f4f2;
  border-radius: 10px;
  width: 540px;
}

.card-img {
  border-radius: 10px;
  width: 295px;
  height: 185px;
}

.btn-info {
  background-color: rgb(54, 139, 133, 0.8);
  border: none;
  height: 38px;
}

.btn-info:focus,
.btn-info:focus,
.btn-info:active {
  box-shadow: none;
  border: none;
  height: 38px;
}

.btn-info:hover {
  background-color: #368b85;
}

.star-color {
  color: #368b85;
}

.loc-icon {
  color: #368b85;
}

.price-text {
  font-size: 22px;
}
</style>
