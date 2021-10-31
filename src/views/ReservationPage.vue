<script>
import PersonInfoForm from "@/components/PersonInfoForm.vue";
import PaymentModal from "@/components/PaymentModal.vue";

export default {
  name: "ReservationPage",
  props: ["reservationInfo"],
  components: {
    PersonInfoForm,
    PaymentModal,
  },
  data() {
    return {
      paymentModalStatus: false,
      infoFormList: [],
    };
  },
  computed: {
    isValidAllForms() {
      return this.infoFormList.every((item) => item.isValid === true);
    },
  },
  methods: {
    showPaymentModal(status) {
      this.paymentModalStatus = status;
    },
    holdInfoForms(infoForm) {
      if (this.infoFormList.length !== 0) {
        if (this.isThereTheInfoFormInList(infoForm)) {
          this.infoFormList.forEach((item) => {
            if (item.index === infoForm.index) item = { ...infoForm };
          });
        } else this.infoFormList.push(infoForm);
      } else this.infoFormList.push(infoForm);
    },
    isThereTheInfoFormInList(infoForm) {
      return this.infoFormList.some((item) => item.index === infoForm.index);
    },
  },
};
</script>

<template>
  <div>
    <PersonInfoForm
      @modalStatus="showPaymentModal"
      :reservationInfo="reservationInfo"
      @infoForm="holdInfoForms"
      :isValidAllForms="isValidAllForms"
    />
    <PaymentModal
      v-if="paymentModalStatus"
      @modalStatus="showPaymentModal"
      :reservationInfo="reservationInfo"
      :infoFormList="infoFormList"
    />
  </div>
</template>
