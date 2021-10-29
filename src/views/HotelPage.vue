<script>
import HotelDetails from "@/components/HotelDetails.vue";
import ReservationForm from "@/components/ReservationForm.vue";

export default {
  name: "HotelPage",
  props: ["hotelDatas"],
  components: {
    HotelDetails,
    ReservationForm,
  },
  data() {
    return {
      hotelInfo: null,
      ownerForm: null,
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
    holdownerForm(ownerForm) {
      this.ownerForm = ownerForm;
      console.log(this.ownerForm);
    },
  },
};
</script>

<template>
  <div>
    <HotelDetails :hotelInfo="hotelInfo" />
    <ReservationForm @ownerForm="holdownerForm" />
  </div>
</template>
