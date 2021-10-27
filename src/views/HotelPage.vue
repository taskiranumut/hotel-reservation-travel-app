<script>
import HotelDetails from "@/components/HotelDetails.vue";

export default {
  name: "HotelPage",
  props: ["hotelDatas"],
  components: {
    HotelDetails,
  },
  data() {
    return {
      hotelInfo: null,
    };
  },
  created() {
    this.hotelInfo = this.getHotelInfoByRouteId();
  },
  watch: {
    $route() {
      this.hotelInfo = this.getHotelInfoByRouteId();
    },
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
    <HotelDetails :hotelInfo="hotelInfo" />
    <!-- TODO: ReservationForm component -->
  </div>
</template>
