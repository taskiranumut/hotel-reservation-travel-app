<script>
export default {
  name: "HotelPage",
  props: ["hotelDatas"],
  data() {
    return {
      hotelInfo: null,
    };
  },
  created() {
    this.hotelInfo = this.getHotelInfoByRouteId();
  },
  methods: {
    getHotelInfoByRouteId() {
      const hotelId = this.$route.params.id;
      return this.hotelDatas.find((item) => item.id === hotelId);
    },
  },
};
</script>

<template>
  <div>
    <h1>Hotel Page with id params</h1>
    <!-- TODO: HotelDetails component -->
    <!-- TODO: ReservationForm component -->
  </div>
</template>
