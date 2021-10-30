<script>
export default {
  name: "ReservationForm",
  data() {
    return {
      ownerForm: {
        firstName: null,
        lastName: null,
        startDate: null,
        endDate: null,
        personNumber: 1,
        dayNumber: null,
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.ownerForm.dayNumber = this.calculateDayNumber();
      this.$emit("ownerForm", this.ownerForm);
    },
    calculateDayNumber() {
      const timeDifference =
        this.ownerForm.endDate.getTime() - this.ownerForm.startDate.getTime();
      return timeDifference / (1000 * 3600 * 24);
    },
  },
};
</script>

<template>
  <div class="p-4 my-5 form-container">
    <h2 class="mb-4">Reservation Form</h2>
    <div>
      <b-form @submit="submitForm">
        <b-row class="my-4">
          <b-col>
            <label for="input-1">Reservation owner first name</label>
            <b-form-input
              id="input-1"
              v-model="ownerForm.firstName"
              placeholder="Enter first name"
            ></b-form-input>
          </b-col>
          <b-col>
            <label for="input-2">Reservation owner last name</label>
            <b-form-input
              id="input-2"
              v-model="ownerForm.lastName"
              placeholder="Enter last name"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col>
            <label for="datepicker-dateformat1">Start date</label>
            <b-form-datepicker
              id="datepicker-dateformat1"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              :value-as-date="true"
              locale="en"
              v-model="ownerForm.startDate"
            ></b-form-datepicker
          ></b-col>
          <b-col>
            <label for="datepicker-dateformat2">End date</label>
            <b-form-datepicker
              id="datepicker-dateformat2"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              :value-as-date="true"
              v-model="ownerForm.endDate"
              locale="en"
            ></b-form-datepicker>
          </b-col>
          <b-col>
            <label for="sb-default">Person number</label>
            <b-form-spinbutton
              id="sb-default"
              v-model="ownerForm.personNumber"
              placeholder="1"
              class="mb-2"
            ></b-form-spinbutton>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col>
            <b-button block type="submit" variant="none" class="btn submit-btn"
              >Submit</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  width: 70%;
  margin: auto;
  background-color: #f4f4f2;
  border-radius: 5px;
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
