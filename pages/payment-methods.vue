<template>
  <div>
    <section>
      <div class="local_payment_method">
        <div class="container">
          <h1 class="payment_method_top_content" v-html="localPaymentMethodTitle.title"></h1>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`local-payment-method/` + bracBankImage.logo">
                  <img class="card-img-top brac_back_image" :src="$config.baseURL+`local-payment-method/` + bracBankImage.logo" :alt="bracBankImage.alt">
                </picture>
                <div class="card-body">
                  <h3 class="custom_h3">Brac Bank</h3>
                  <div class="account_information" v-for="item in localPaymentBracBankAccount" :key="item.id">
                    <ul>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Name:</b> {{ item.name }}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Number:</b> {{ item.number }}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Branch:</b> {{ item.branch }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`local-payment-method/` + localPaymentBkashRocket.bkash_image">
                  <img class="card-img-top bkash_image" :src="$config.baseURL+`local-payment-method/` + localPaymentBkashRocket.bkash_image" :alt="localPaymentBkashRocket.bkash_alt">
                </picture>
                <div class="card-body">
                  <div class="account_information">
                    <ul>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Name:</b> {{localPaymentBkashRocket.bkash_account_name}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Number:</b> {{localPaymentBkashRocket.bkash_account_number}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Personal Account Number:</b> {{localPaymentBkashRocket.bkash_personal_account_number}}</li>
                    </ul>
                  </div>
                </div>
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`local-payment-method/` + localPaymentBkashRocket.rocket_image">
                  <img class="card-img-top rocket_image" :src="$config.baseURL+`local-payment-method/` + localPaymentBkashRocket.rocket_image" :alt="localPaymentBkashRocket.rocket_alt">
                </picture>
                <div class="card-body">
                  <div class="account_information">
                    <ul>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Name:</b> {{localPaymentBkashRocket.rocket_account_name}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Personal Account Number:</b> {{localPaymentBkashRocket.rocket_personal_account_number}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-4">
              <div class="card">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`local-payment-method/` + localPaymentDutchBanglaBank.image">
                  <img class="card-img-top brac_back_image" :src="$config.baseURL+`local-payment-method/` + localPaymentDutchBanglaBank.image" :alt="localPaymentDutchBanglaBank.alt">
                </picture>
                <div class="card-body">
                  <h3 class="custom_h3">{{ localPaymentDutchBanglaBank.title }}</h3>
                  <div class="account_information">
                    <ul>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Name:</b> {{localPaymentDutchBanglaBank.name}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Number:</b> {{localPaymentDutchBanglaBank.number}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Branch:</b> {{localPaymentDutchBanglaBank.branch}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-4">
              <div class="card nagad_area">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`local-payment-method/` + localPaymentNagad.image">
                  <img class="card-img-top brac_back_image" :src="$config.baseURL+`local-payment-method/` + localPaymentNagad.image" :alt="localPaymentNagad.alt">
                </picture>
                <div class="card-body">
                  <h3 class="custom_h3">{{ localPaymentNagad.title }}</h3>
                  <div class="account_information">
                    <ul>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Account Name:</b> {{localPaymentNagad.name}}</li>
                      <li><span><i class="fa-solid fa-circle-arrow-right"></i></span> <b>Marchant Account Number:</b> {{localPaymentNagad.number}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mt-4">
              <div class="card">
                <div class="card-body">
                  <h3 class="custom_h3" v-html="localPaymentCashOnDelivery.title"></h3>
                  <div class="account_information">
                    <ul>
                      <li><span><i class="fa-solid fa-house"></i></span> <b>Address:</b> {{localPaymentCashOnDelivery.address}}</li>
                      <li><span><i class="fa-solid fa-phone"></i></span> <b>
                        Mobile Number:</b> {{localPaymentCashOnDelivery.number}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'localPaymentMethodsPage',
  head: {
    title: 'Local Payment Methods | Online Payment Service In Bangladesh',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'You can pay all kinds of online bills with DMS. We accept every local payment method in Bangladesh, like bKash, Rocket, Nagad, DBBL, iPad, etc. So get the best experience with DMS.'
      }
    ],
  },
  data: () => ({
    localPaymentMethodTitle: [],
    localPaymentBracBankAccount: [],
    localPaymentBkashRocket: [],
    localPaymentDutchBanglaBank: [],
    localPaymentNagad: [],
    localPaymentCashOnDelivery: [],
    bracBankImage: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("local_payment_method").then((response) => {
        this.localPaymentMethodTitle = response.data.localPaymentMethodTitle;
        this.localPaymentBracBankAccount = response.data.localPaymentBracBankAccount;
        this.bracBankImage = response.data.image;
        this.localPaymentBkashRocket = response.data.localPaymentBkashRocket;
        this.localPaymentDutchBanglaBank = response.data.localPaymentDutchBanglaBank;
        this.localPaymentNagad = response.data.localPaymentNagad;
        this.localPaymentCashOnDelivery = response.data.localPaymentCashOnDelivery;
      });
    },
    // loadData() {
    //   this.$axios.get("get_local_payment_method_title").then((response) => {
    //     this.localPaymentMethodTitle = response.data.localPaymentMethodTitle;
    //   });
    //   this.$axios.get("get_local_payment_method_brac_bank_account").then((response) => {
    //     this.localPaymentBracBankAccount = response.data.localPaymentBracBankAccount;
    //   });
    //   this.$axios.get("get_local_payment_method_brac_bank_image").then((response) => {
    //     this.bracBankImage = response.data.image;
    //   });
    //   this.$axios.get("get_local_payment_method_bkash_rocket").then((response) => {
    //     this.localPaymentBkashRocket = response.data.localPaymentBkashRocket;
    //   });
    //   this.$axios.get("get_local_payment_method_dutch_bangla_bank").then((response) => {
    //     this.localPaymentDutchBanglaBank = response.data.localPaymentDutchBanglaBank;
    //   });
    //   this.$axios.get("get_local_payment_method_nagad").then((response) => {
    //     this.localPaymentNagad = response.data.localPaymentNagad;
    //   });
    //   this.$axios.get("get_local_payment_cash_on_delivery").then((response) => {
    //     this.localPaymentCashOnDelivery = response.data.localPaymentCashOnDelivery;
    //   });
    // },
  }
}
</script>
