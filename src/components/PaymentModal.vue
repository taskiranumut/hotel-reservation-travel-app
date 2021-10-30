<script>
export default {
  name: "PaymentModal",
  props: ["reservationInfo", "infoFormList"],
  computed: {
    totalPrice() {
      const price =
        this.reservationInfo.price *
        this.reservationInfo.dayNumber *
        this.reservationInfo.personNumber;
      return price;
    },
  },
  methods: {
    handleOk() {
      this.$emit("modalStatus", false);
      this.$router.push({
        name: "HomePage",
      });
    },
  },
};
</script>

<template>
  <!-- PaymentModal props:
      * show success sentences with owner name (filter "Mr" or "Mrs" by gender)
    -->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content" @click="$event.stopPropagation()">
          <p class="modal-title mt-3 text-center header-p pb-2 mx-5">
            Payment Summary
          </p>
          <div class="modal-body px-5 mt-3">
            <h4>
              <strong>Mr. {{ reservationInfo.ownerFirstName }}</strong>
              <strong>{{ reservationInfo.ownerLastName }}</strong> payment is
              successful for
              <strong>{{ reservationInfo.hotelName }}</strong> reservation for
              <strong>{{ reservationInfo.personNumber }}</strong> persons.
            </h4>

            <ol class="my-4 px-5">
              <li v-for="info in infoFormList" :key="info.index">
                {{ info.firstName }} {{ info.lastName }}
              </li>
            </ol>

            <p>Total price paid: ${{ totalPrice }}</p>
          </div>
          <div class="modal-footer border-0 d-flex justify-content-center">
            <button @click="handleOk" type="button" class="btn ok-btn">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-p {
  font-size: 26px;
  border-bottom: 2px solid #495464;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: table;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: top;
}
.modal-content,
.modal-header {
  background-color: #bbbfca;
}
.ok-btn {
  color: #f4f4f2;
  background-color: #368b85;
}
</style>
