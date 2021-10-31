<script>
import { validation } from "@/mixins/validation";

export default {
  name: "InfoFormItem",
  props: ["reservationInfo", "formIndex"],
  mixins: [validation],
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
        isValid: null,
      },
      genderOption: [
        { value: "male", text: "Male" },
        { value: "female", text: "Female" },
      ],
    };
  },
  created() {
    this.infoForm.index = this.formIndex;
  },
  watch: {
    infoForm: {
      handler() {
        this.infoForm.isValid = !this.$v.$invalid;
        this.$emit("infoForm", this.infoForm);
      },
      deep: true,
    },
  },
  methods: {
    show$v() {
      console.log(JSON.parse(JSON.stringify(this.$v)));
    },
  },
};
</script>

<template>
  <div class="p-4 my-5 form-container">
    <h3 v-if="formIndex === 1">Reservation Owner</h3>
    <h3 v-else>Guest - {{ formIndex - 1 }}</h3>

    <b-row class="my-4">
      <b-col>
        <label for="firstName">First name</label>
        <b-form-input
          id="firstName"
          v-model="$v.infoForm.firstName.$model"
          placeholder="Enter first name"
        ></b-form-input>
      </b-col>
      <b-col>
        <label for="lastName">Last name</label>
        <b-form-input
          id="lastName"
          v-model="$v.infoForm.lastName.$model"
          placeholder="Enter last name"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row class="my-4">
      <b-col sm="5">
        <label for="email">E-mail address</label>
        <b-form-input
          id="email"
          v-model="$v.infoForm.email.$model"
          placeholder="Enter e-mail"
        ></b-form-input>
      </b-col>
      <b-col sm="5">
        <label for="phoneNumber">Phone number</label>
        <b-form-input
          id="phoneNumber"
          v-model="$v.infoForm.phoneNumber.$model"
          placeholder="Enter phone number"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="gender">Gender</label>
        <b-form-select
          v-model="$v.infoForm.gender.$model"
          :options="genderOption"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-row class="my-4">
      <b-col sm="5">
        <label for="tcNumber">TC number</label>
        <b-form-input
          id="tcNumber"
          v-model="$v.infoForm.tcNumber.$model"
          placeholder="Enter TC number"
        ></b-form-input>
      </b-col>
      <b-col sm="5">
        <label for="hesNumber">HES number</label>
        <b-form-input
          id="hesNumber"
          v-model="$v.infoForm.hesNumber.$model"
          placeholder="Enter HES number"
        ></b-form-input>
      </b-col>
      <b-col sm="2">
        <label for="age">Age</label>
        <b-form-input
          id="age"
          v-model="$v.infoForm.age.$model"
          placeholder="Enter age"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p>is invalid: {{ $v.$invalid }}</p>
      </b-col>
      <b-col>
        <b-button @click="show$v">Show $v</b-button>
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
