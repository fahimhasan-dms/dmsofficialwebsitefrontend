<template>
  <div>
    <SliderComponent :Slider="onlinePaymentServiceSlider" />
    <section>
      <div class="top_ops_1">
        <div class="container">
          <h1 class="custom_h1">{{ resourceManagementListItemTitle.title }}</h1>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <li v-for="item in paymentServiceResourceManagementListItem" :key="item.id"><span><i class="fa-solid fa-square-check"></i></span><span class="smm_content">{{ item.name }}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="top_ops_2">
        <div class="container">
          <h1 class="custom_h1">{{ paymentPlatformListItemTitle.title }}</h1>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <li v-for="item in paymentServicePaymentPlatformListItem" :key="item.id"><span><i class="fa-solid fa-square-check"></i></span><span class="smm_content">{{ item.name }}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="onlinePaymentServiceContent" />
    <section>
      <div class="ops_2">
        <div class="container">
          <div class="row justify-content-center" v-for="item in onlinePaymentServiceVideoContent" :key="item.id">
            <div class="col-md-7">
              <div class="sec_3_description">
                <div class="custom_h2" v-html="item.title"></div>
                <div class="custom_p" v-html="item.description"></div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="video-part">
                <iframe class="ops_video" width="100%" height="345" :src="item.url" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="smm_5">
        <div class="container" v-for="item in onlinePaymentServiceCardContent" :key="item.id">
          <div class="row justify-content-center">
            <div class="col-md-5">
              <picture>
                <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                <img width="650" height="550" class="ops_5_img" :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
              </picture>
            </div>
            <div class="col-md-7">
              <div class="sec_3_description">
                <div class="custom_h2" v-html="item.debit_title"></div>
                <div class="custom_p" v-html="item.debit_description_1"></div>
                <div class="custom_p" v-html="item.debit_description_2"></div>
                <div class="custom_h2" v-html="item.credit_title"></div>
                <div class="custom_p" v-html="item.credit_description"></div>
                <div class="custom_h2" v-html="item.visa_title"></div>
                <div class="custom_p" v-html="item.visa_description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="ops_6">
        <div class="container">
          <div class="row justify-content-center">
            <div class="row" v-for="item in singleContent" :key="item.id">
              <div class="col-md-7">
                <div class="sec_3_description">
                  <div class="custom_h2" v-html="item.title"></div>
                  <div class="custom_p" v-html="item.description"></div>
                </div>
              </div>
              <div class="col-md-5">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                  <img class="ops_6_img" :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                </picture>
              </div>
            </div>
            <!--     Component footer list item     -->
            <div class="col-md-12">
              <div class="conclusion_footer">
                <ul>
                  <li v-for="item in onlinePaymentServiceFooterListItem" :key="item.id"><span><i class="fa-solid fa-square-check"></i></span><span class="conclusion_footer_content">{{ item.name }}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="ops_7">
        <div class="container">
          <div class="row justify-content-center">
            <h2 class="custom_h2 mb-2">{{ onlinePaymentServiceHappyClientTitle.title }}</h2>
            <div class="col-md-4">
              <div class="client_title">
                <h4>Education Sector</h4>
              </div>
              <div class="ops_client_image">
                <div class="row">
                  <div class="col-md-6" v-for="item in educationHappyClient" :key="item.id">
                    <div class="client_single_image" style="background-color: #074B68">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                        <img :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="client_title">
                <h4>IT Networking</h4>
              </div>
              <div class="ops_client_image">
                <div class="row">
                  <div class="col-md-6" v-for="item in networkingHappyClient" :key="item.id">
                    <div class="client_single_image" style="background-color: #074B68">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                        <img :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="client_title">
                <h4>Travel Agency</h4>
              </div>
              <div class="ops_client_image">
                <div class="row">
                  <div class="col-md-6" v-for="item in travellingHappyClient" :key="item.id">
                    <div class="client_single_image" style="background-color: #074B68">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                        <img :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                      </picture>
                    </div>
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
import SliderComponent from "@/components/Slider.vue";
import ContentComponent from "@/components/Content.vue";
export default {
  name: 'onlinePaymentServicePage',
  components: {ContentComponent, SliderComponent},
  head: {
    title: 'Online Payment Service in Bangladesh | Credit Card Payment Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS provides online payment services in Bangladesh through international payment getaway like. PayPal, Master card, Credit Card, Debit Card, Visa Cards etc.'
      }
    ],
  },
  data: () => ({
    onlinePaymentServiceSlider: [],
    resourceManagementListItemTitle: [],
    paymentServiceResourceManagementListItem: [],
    paymentPlatformListItemTitle: [],
    paymentServicePaymentPlatformListItem: [],
    onlinePaymentServiceContent: [],
    onlinePaymentServiceVideoContent: [],
    onlinePaymentServiceCardContent: [],
    singleContent: [],
    onlinePaymentServiceFooterListItem: [],
    onlinePaymentServiceHappyClientTitle: [],
    educationHappyClient: [],
    networkingHappyClient: [],
    travellingHappyClient: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("online_payment_service").then((response) => {
        this.onlinePaymentServiceSlider = response.data.onlinePaymentServiceSlider;
        this.resourceManagementListItemTitle = response.data.resourceManagementListItemTitle;
        this.paymentServiceResourceManagementListItem = response.data.paymentServiceResourceManagementListItem;
        this.paymentPlatformListItemTitle = response.data.paymentPlatformListItemTitle;
        this.paymentServicePaymentPlatformListItem = response.data.paymentServicePaymentPlatformListItem;
        this.onlinePaymentServiceContent = response.data.onlinePaymentServiceContent;
        this.onlinePaymentServiceVideoContent = response.data.onlinePaymentServiceVideoContent;
        this.onlinePaymentServiceCardContent = response.data.onlinePaymentServiceCardContent;
        this.singleContent = response.data.singleContent;
        this.onlinePaymentServiceFooterListItem = response.data.onlinePaymentServiceFooterListItem;
        this.onlinePaymentServiceHappyClientTitle = response.data.onlinePaymentServiceHappyClientTitle;
        this.educationHappyClient = response.data.educationHappyClient;
        this.networkingHappyClient = response.data.networkingHappyClient;
        this.travellingHappyClient = response.data.travellingHappyClient;
      });
    },
    // loadData() {
    //   this.$axios.get("get_online_payment_service_slider").then((response) => {
    //     this.onlinePaymentServiceSlider = response.data.onlinePaymentServiceSlider;
    //   });
    //   this.$axios.get("get_payment_service_resource_management_list_item_title").then((response) => {
    //     this.resourceManagementListItemTitle = response.data.resourceManagementListItemTitle;
    //   });
    //   this.$axios.get("get_payment_service_resource_management_list_item").then((response) => {
    //     this.paymentServiceResourceManagementListItem = response.data.paymentServiceResourceManagementListItem;
    //   });
    //   this.$axios.get("get_payment_service_payment_platform_list_item_title").then((response) => {
    //     this.paymentPlatformListItemTitle = response.data.paymentPlatformListItemTitle;
    //   });
    //   this.$axios.get("get_payment_service_payment_platform_list_item").then((response) => {
    //     this.paymentServicePaymentPlatformListItem = response.data.paymentServicePaymentPlatformListItem;
    //   });
    //   this.$axios.get("get_online_payment_service_content").then((response) => {
    //     this.onlinePaymentServiceContent = response.data.onlinePaymentServiceContent;
    //   });
    //   this.$axios.get("get_online_payment_service_video_content").then((response) => {
    //     this.onlinePaymentServiceVideoContent = response.data.onlinePaymentServiceVideoContent;
    //   });
    //   this.$axios.get("get_online_payment_service_card_content").then((response) => {
    //     this.onlinePaymentServiceCardContent = response.data.onlinePaymentServiceCardContent;
    //   });
    //   this.$axios.get("get_online_payment_single_content").then((response) => {
    //     this.singleContent = response.data.singleContent;
    //   });
    //   this.$axios.get("get_online_payment_service_footer_list_item").then((response) => {
    //     this.onlinePaymentServiceFooterListItem = response.data.onlinePaymentServiceFooterListItem;
    //   });
    //   this.$axios.get("get_online_happy_client_title").then((response) => {
    //     this.onlinePaymentServiceHappyClientTitle = response.data.onlinePaymentServiceHappyClientTitle;
    //   });
    //   this.$axios.get("get_online_payment_service_education_happy_client").then((response) => {
    //     this.educationHappyClient = response.data.educationHappyClient;
    //   });
    //   this.$axios.get("get_online_payment_service_networking_happy_client").then((response) => {
    //     this.networkingHappyClient = response.data.networkingHappyClient;
    //   });
    //   this.$axios.get("get_online_payment_service_travelling_happy_client").then((response) => {
    //     this.travellingHappyClient = response.data.travellingHappyClient;
    //   });
    // },
  }
}
</script>
