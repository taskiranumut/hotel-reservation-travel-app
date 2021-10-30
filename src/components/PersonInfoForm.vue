<script>
import InfoFormItem from "@/components/InfoFormItem.vue";

export default {
  name: "PersonInfoForm",
  props: ["reservationInfo"],
  components: {
    InfoFormItem,
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$emit("modalStatus", true);
    },
    infoForm(infoForm) {
      this.$emit("infoForm", infoForm);
    },
  },
};
</script>

<template>
  <div class="my-5 form-main-container">
    <h2 class="text-center">Person Information Form</h2>
    <div>
      <b-form @submit="submitForm">
        <InfoFormItem
          v-for="index in reservationInfo.personNumber"
          :key="index"
          :index="index"
          :reservationInfo="reservationInfo"
          @infoForm="infoForm"
        />
        <b-row class="my-4">
          <b-col>
            <b-button block type="submit" variant="none" class="btn submit-btn"
              >Go to checkout</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<style scoped>
.form-main-container {
  width: 70%;
  margin: auto;
}
/* Checkout submit btn */
.submit-btn {
  background-color: rgb(54, 139, 133, 0.8);
  border: none;
  height: 38px;
  color: #f4f4f2;
}

.submit-btn:focus,
.submit-btn:focus,
.submit-btn:active {
  box-shadow: none;
  border: none;
  height: 38px;
}

.bsubmit-btn:hover {
  background-color: #368b85;
}
</style>
