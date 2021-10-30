<script>
export default {
  name: "InfoFormItem",
  props: ["reservationInfo", "index"],
  data() {
    return {
      infoForm: {
        index: null,
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
        age: null,
        tcNumber: null,
        hesNumber: null,
        gender: null,
      },
    };
  },
  created() {
    this.infoForm.index = this.index;
    if (this.index === 1) {
      this.infoForm.firstName = this.reservationInfo.ownerFirstName;
      this.infoForm.lastName = this.reservationInfo.ownerLastName;
    }
  },
  watch: {
    infoForm: {
      handler() {
        this.$emit("infoForm", this.infoForm);
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="p-4 my-5 form-container">
    <h3 v-if="index === 1">Reservation Owner</h3>
    <h3 v-else>Guest - {{ index - 1 }}</h3>

    <b-row class="my-4">
      <b-col>
        <label for="input-1">First name</label>
        <b-form-input
          id="input-1"
          v-model="infoForm.firstName"
          placeholder="Enter first name"
        ></b-form-input>
      </b-col>
      <b-col>
        <label for="input-2">Last name</label>
        <b-form-input
          id="input-2"
          v-model="infoForm.lastName"
          placeholder="Enter last name"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-col sm="5">
        <label for="email">E-mail address</label>
        <b-form-input
          id="email"
          v-model="infoForm.email"
          placeholder="Enter e-mail"
        ></b-form-input>
      </b-col>
      <b-col sm="5">
        <label for="phoneNumber">Phone number</label>
        <b-form-input
          id="phoneNumber"
          v-model="infoForm.phoneNumber"
          placeholder="Enter phone number"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="gender">Gender</label>
        <b-form-input
          id="gender"
          v-model="infoForm.gender"
          placeholder="Select gender"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="5">
        <label for="tcNumber">TC number</label>
        <b-form-input
          id="tcNumber"
          v-model="infoForm.tcNumber"
          placeholder="Enter TC number"
        ></b-form-input>
      </b-col>
      <b-col sm="5">
        <label for="hesNumber">HES number</label>
        <b-form-input
          id="hesNumber"
          v-model="infoForm.hesNumber"
          placeholder="Enter HES number"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="age">Age</label>
        <b-form-input
          id="age"
          v-model="infoForm.age"
          placeholder="Enter age"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #f4f4f2;
  border-radius: 5px;
}
</style>
