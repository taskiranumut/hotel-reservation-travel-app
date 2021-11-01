<script>
import InfoFormItem from "@/components/InfoFormItem.vue";

export default {
  name: "PersonInfoForm",
  props: ["reservationInfo", "isValidAllForms"],
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
          :formIndex="index"
          :reservationInfo="reservationInfo"
          @infoForm="infoForm"
        />
        <b-row class="my-4">
          <b-col>
            <b-button
              block
              :disabled="!isValidAllForms"
              type="submit"
              variant="none"
              class="btn submit-btn"
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
  width: 60%;
  margin: auto;
}
</style>
