<template>
  <div>
    <section v-for="item in indexSlider" :key="item.id">
      <img class="main_slider_image" :src="$config.baseURL + `index-slider/` + item.image" alt="data driven marketing strategy">
<!--      <div class="header_section text-center" :style="{'background-image' : 'url(' + $config.baseURL + `index-slider/` + item.image + ')'}">-->
      <div class="header_section text-center">
        <h1 class="text-white heading_section_heading" v-html="item.title"></h1>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 mt1">
              <p class="text-center text-green upper">
                <span class="typed-text">{{typeValue}}</span>
                <span class="cursor" :class="{'typing':typeStatus}">&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
        <NuxtLink class="btn btn-lg getQuote" :to="item.url" >{{ item.button }}</NuxtLink>
      </div>
    </section>
    <CeoMessage :CeoMessage="ceoMessage" />
    <FullServicesWithVideo :services="services" />
    <section>
      <div class="container">
        <div class="whoWeAreSection">
          <div class="whoWeAreContent">
            <WhoWeAre :whoWeAre="whoWeAre" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="memorable_journey">
        <div class="container">
          <div class="memorable_journey_title">
            <div v-html="memorableJourneyTitle.title"></div>
          </div>
          <div class="row">

            <div class="col-md-3 memorable_div" v-for="item in memories" :key="item.id">
              <div class="year_experience">
                <i :class="item.class"></i>
                <p class="count_experience">{{ item.number }}+</p>
                <p>{{ item.description }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="service_index">
      <div class="container text-center">
        <div class="service_title_2">
          <div v-html="serviceTitle.title"></div>
          <div v-html="serviceTitle.description"></div>
        </div>
        <div class="service_card_section">
          <div class="row">

            <div class="col-md-4 mt-4" v-for="item in mainServices" :key="item.id">
              <div class="card">
                <div class="card-body mt-4 mb-4">
                  <picture>
                    <source type="image/webp" :srcset="$config.baseURL+'service/'+ item.image">
                    <img :src="$config.baseURL+'service/'+ item.image" :alt="item.alt">
                  </picture>
                  <h5 class="card-title mt-3">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description.substring(0,200)+".." }}</p>
                  <NuxtLink :to="item.link" class="btn btn-primary mt-3">Read More</NuxtLink>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="whyWeAreDifferentSection">
          <div class="whoWeAreContent">
            <div class="row">
              <div v-html="whyWeAreDifferentTitle.title"></div>
              <div class="row">
                <div class="col-md-6" v-for="item in whyWeAreDifferent" :key="item.id">
                  <div class="we-are-diffrent">
                    <ul>
                      <li>
                        <button class="accordion">
                          <figure>
                            <picture>
                              <source type="image/webp" :srcset="$config.baseURL+'why-we-are-different/'+ item.image">
                              <img :src="$config.baseURL+'why-we-are-different/'+ item.image" :alt="item.alt">
                            </picture>
                            <span> {{ item.title }} </span>
                          </figure>
                        </button>
                        <div class="panel">
                          <p class="text_justify">{{ item.description }}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="business_partner">
        <div class="container">
          <div class="business_partner_title">
            <div v-html="businessPartnerTitle.title"></div>
          </div>
          <div class="row">

            <div class="col-md-3 business_partner_div" v-for="item in businessPartners" :key="item.id">
              <div class="advertising_partner_div">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'business-partner/'+ item.image">
                  <img :src="$config.baseURL+'business-partner/'+ item.image" :alt="item.alt">
                </picture>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="advertising_partner">
        <div class="container">
          <div class="advertising_partner_title">
            <div v-html="advertisingPartnerTitle.title"></div>
          </div>
          <div class="row">
            <div class="col-md-3 memorable_journey_div" v-for="item in advertisingPartners" :key="item.id">
              <div class="advertising_partner_div">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'advertising-partner/'+ item.image">
                  <img :src="$config.baseURL+'advertising-partner/'+ item.image" :alt="item.alt">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="whoWeAreSection">
          <div class="whoWeAreContent">
            <div class="row" v-for="item in whoAreOurClient" :key="item.id">
              <div v-html="item.title"></div>
              <div class="col-md-7">
                <div v-html="item.description"></div>
                <NuxtLink :to="item.link" class="btn btn-find-out">Find Out More</NuxtLink>
              </div>
              <div class="col-md-5 imageDiv">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'who-are-our-clients/'+ item.image">
                  <img class="whoWeAreOurClientImage" :src="$config.baseURL+'who-are-our-clients/'+ item.image" :alt="item.alt">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="customer_video_review">
        <div class="container">
          <div v-html="testimonialTitle.title"></div>
          <div class="row">
            <div class="col-md-4" v-for="item in videoTestimonial" :key="item.id">

<!--              <button type="button" class="sliderWithImageButton" data-bs-toggle="modal" :data-bs-target="`#`+`item.id`">-->
<!--                <img src="img.jpg">-->
<!--                <div>-->
<!--                  <i class="fa-solid fa-circle-play"></i>-->
<!--                </div>-->
<!--              </button>-->

<!--              <div class="modal fade" :id="item.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--                <div class="modal-dialog modal-lg modal-dialog-centered">-->
<!--                  <div class="modal-content">-->
<!--                    <div class="modal-header">-->
<!--                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
<!--                    </div>-->
<!--                    <div class="modal-body modalVideo">-->
<!--                      <iframe class="ops_video" width="100%" height="100%" src="" frameborder="0"-->
<!--                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
<!--                              allowfullscreen>-->
<!--                      </iframe>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

                  <iframe class="ops_video" :src="item.url" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen>
                  </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="customer_index_review">
        <div class="container">
          <div v-html="ratingTitle.title"></div>
          <div class="row justify-content-center">
            <div class="col-md-4" v-for="item in ratingData" :key="item.id">
              <div class="single_rating">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'rating/'+ item.image">
                  <img :src="$config.baseURL+'rating/'+ item.image" :alt="item.alt">
                </picture>
                <div class="star">
                  <ul>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i class="fas fa-star"></i></li>
                    <li><i :class="item.star"></i></li>
                  </ul>
                </div>
                <p>{{ item.rating }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="real_fact">
      <div id="why-Dms">
        <div class="heading">
          <div v-html="leadingTitle.title"></div>
        </div>
        <div class="container mt-3">
          <div class="row">
            <div class="col-md-4 real_fact_box_main">
              <div class="row">
                <div class="col-md-12 mt-4" v-for="item in fourRealFact" :key="item.id" v-if="item.id == 1|| item.id == 2">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front face">
                        <figure>
                          <picture>
                            <source type="image/webp" :srcset="$config.baseURL+'four-real-fact/'+ item.image">
                            <img :src="$config.baseURL+'four-real-fact/'+ item.image" :alt="item.alt">
                          </picture>
                        </figure>
                        <p v-html="item.front_description"></p>
                      </div>
                      <div class="flip-card-back">
                        <p>{{item.back_description}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="why-should-hire-col">
                <div v-html="fourRealTitle.title"></div>
              </div>
            </div>
            <div class="col-md-4 real_fact_box_main">
              <div class="row">
                <div class="col-md-12 mt-4" v-for="item in fourRealFact" :key="item.id" v-if="item.id == 3|| item.id == 4">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front face">
                        <figure>
                          <picture>
                            <source type="image/webp" :srcset="$config.baseURL+'four-real-fact/'+ item.image">
                            <img :src="$config.baseURL+'four-real-fact/'+ item.image" alt="img">
                          </picture>
                        </figure>
                        <p v-html="item.front_description"></p>
                      </div>
                      <div class="flip-card-back">
                        <p>{{item.back_description}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mt-5 expertServices">
        <div class="expert_section_title">
          <div v-html="expertServicesTitle.title"></div>
          <div v-html="expertServicesTitle.description"></div>
        </div>
        <div class="row">
          <div class="col-md-3" v-for="item in expertServices" :key="item.id">
            <article class="special-service-col">
              <div class="brand-col">
                <figure class="brand-logo" :class="(item.id==4)? 'magento-border':(item.id==3)?'software-border':(item.id==2)?'responsive-border':'joomla-border'">
                  <picture>
                    <source type="image/webp" :srcset="$config.baseURL+'expert-service/' + item.image">
                    <img class="ls-is-cached lazyloaded" :src="$config.baseURL+'expert-service/' + item.image" :alt="item.alt">
                  </picture>
                </figure>
                <h5 :class="(item.id==4)? 'magento-hoverbox':(item.id==3)?'responsive-software':(item.id==2)?'responsive-hoverbox':'joomla-hoverbox'">{{ item.name }}</h5>
              </div>
              <div class="show_hover">
                <NuxtLink  class="hover-textbox" :to="item.link" :class="(item.id==4)? 'magento-hoverbox':(item.id==3)?'responsive-software':(item.id==2)?'responsive-hoverbox':'joomla-hoverbox'">
                  <h4>{{ item.name }}</h4>
                  <p>{{item.description}}</p>
                </NuxtLink>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="happy_client mt-5">
        <div class="container">
          <div class="happy_client_title">
            <div v-html="happyClientTitle.title"></div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="row text-center">
                <div class="col-md-12">
                  <div class="local_client_title">
                    <h3>Local Clients</h3>
                  </div>
                </div>
                <div class="gallery_top">
                  <div class="gallery" v-for="item in localClients" :key="item.id">
                    <picture>
                      <source type="image/webp" :srcset="$config.baseURL+'portfolio/'+ item.image">
                      <img :src="$config.baseURL+'portfolio/'+ item.image" :alt="item.alt">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row text-center">
                <div class="col-md-12">
                  <div class="local_client_title">
                    <h3>International Clients</h3>
                  </div>
                </div>
                <div class="gallery_top">
                  <div class="gallery" v-for="item in internationalClients" :key="item.id">
                    <picture>
                      <source type="image/webp" :srcset="$config.baseURL+'portfolio/'+ item.image">
                      <img :src="$config.baseURL+'portfolio/'+ item.image" :alt="item.alt">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--                <div class="row justify-content-center">-->
          <!--                    <button class="btn btn-lg portfolio_button" @click="scrollToTop(),showPortfolioPage()" >See More</button>-->
          <!--                </div>-->
        </div>
      </div>
    </section>
    <section>
      <div class="payment_partner">
        <div class="container">
          <div class="payment_partner_title">
            <div v-html="paymentPartnerTitle.title"></div>
          </div>
          <div class="row">

            <div class="col-md-3 payment_journey_div" v-for="item in paymentPartners" :key="item.id">
              <div class="payment_partner_div">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'payment-partner/'+ item.image">
                  <img :src="$config.baseURL+'payment-partner/'+ item.image" :alt="item.alt">
                </picture>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="blog-news" id="blog-news">
      <div class="container">
        <h4>Latest Blogs</h4>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 left-item" v-for="item in indexBlog" :key="item.id">
            <div class="blog-img">
              <NuxtLink :to="`/blog/${item.blog_slug}`">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'blog/'+ item.image">
                  <img :src="$config.baseURL+'blog/'+ item.image" :alt="item.alt">
                </picture>
              </NuxtLink>
            </div>
            <div class="blog-title">
              <NuxtLink :to="`/blog/${item.blog_slug}`"><h6>{{item.title}}</h6></NuxtLink>
            </div>
            <div class="blog-small">
              <div class="small-left">
                <p>{{ item.category_name }}</p>
              </div>
            </div>
            <div class="blog-body" v-html="item.short_description">
            </div>
            <div class="blog-link">
              <NuxtLink :to="`/blog/${item.blog_slug}`">Read More</NuxtLink>
            </div>
          </div>
          <div class="col-md-12">
            <NuxtLink class="read_more_blog_button" to="/blog">More Blogs</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import CeoMessage from "@/components/index/CeoMessage.vue";
import FullServicesWithVideo from "@/components/index/FullServicesWithVideo.vue";
import WhoWeAre from "@/components/index/WhoWeAre.vue";
export default {
  name: 'IndexPage',
  components:{
    WhoWeAre,
    FullServicesWithVideo,
    CeoMessage,
  },

  data: () => ({
    indexSlider: [],
    ceoMessage: [],
    services: [],
    whoWeAre: [],
    memorableJourneyTitle: [],
    memories: [],
    whyWeAreDifferentTitle: [],
    whyWeAreDifferent: [],
    serviceTitle: [],
    mainServices: [],
    businessPartnerTitle: [],
    businessPartners: [],
    advertisingPartnerTitle: [],
    advertisingPartners: [],
    whoAreOurClient: [],
    testimonialTitle: [],
    videoTestimonial: [],
    leadingTitle: [],
    ratingTitle: [],
    ratingData: [],
    fourRealTitle: [],
    fourRealFact: [],
    expertServicesTitle: [],
    expertServices: [],
    happyClientTitle: [],
    localClients: [],
    internationalClients: [],
    paymentPartnerTitle: [],
    paymentPartners: [],
    indexBlog: [],

    typeValue: '',
    typeStatus: false,
    typeArray: ["Leading Advertising Digital Revolution in Bangladesh.", "A Power Innovation Digital Marketing Advertising Agency."],
    typingSpeed: 200,
    erasingSpeed: 100,
    newTextDelay: 2000,
    typeArrayIndex: 0,
    charIndex: 0
  }),
  mounted(){
    this.loadData();
    this.typeText();
    this.eraseText();
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods:{
    loadData() {
      this.$axios.get("main_home").then((response) => {
        this.indexSlider = response.data.indexSlider;
        this.ceoMessage = response.data.ceoMessage;
        this.services = response.data.services;
        this.serviceTitle = response.data.serviceTitle;
        this.mainServices = response.data.mainServices;
        this.whoWeAre = response.data.whoWeAre;
        this.memorableJourneyTitle = response.data.memorableJourneyTitle;
        this.memories = response.data.memories;
        this.whyWeAreDifferentTitle = response.data.whyWeAreDifferentTitle;
        this.whyWeAreDifferent = response.data.whyWeAreDifferent;
        this.businessPartnerTitle = response.data.businessPartnerTitle;
        this.businessPartners = response.data.businessPartners;
        this.advertisingPartnerTitle = response.data.advertisingPartnerTitle;
        this.advertisingPartners = response.data.advertisingPartners;
        this.whoAreOurClient = response.data.whoAreOurClient;
        this.testimonialTitle = response.data.testimonialTitle;
        this.videoTestimonial = response.data.videoTestimonial;
        this.ratingTitle = response.data.ratingTitle;
        this.ratingData = response.data.ratingData;
        this.leadingTitle = response.data.leadingTitle;
        this.fourRealTitle = response.data.fourRealTitle;
        this.fourRealFact = response.data.fourRealFact;
        this.expertServicesTitle = response.data.expertServicesTitle;
        this.expertServices = response.data.expertServices;
        this.happyClientTitle = response.data.happyClientTitle;
        this.localClients = response.data.localClients;
        this.internationalClients = response.data.internationalClients;
        this.paymentPartnerTitle = response.data.paymentPartnerTitle;
        this.paymentPartners = response.data.paymentPartners;
        this.indexBlog = response.data.indexBlog;
        // console.log('indexBlog', this.indexBlog)
      });

      // this.$axios.get("get_all_index_slider").then((response) => {
      //   this.indexSlider = response.data.indexSlider;
      // });
      // this.$axios.get("get_ceo_message").then((response) => {
      //   this.ceoMessage = response.data.ceoMessage;
      // });
      // this.$axios.get("get_full_services_with_video").then((response) => {
      //   this.services = response.data.services;
      // });
      // this.$axios.get("get_all_who_we_are").then((response) => {
      //   this.whoWeAre = response.data.whoWeAre;
      // });
      // this.$axios.get("get_memorable_journey_title").then((response) => {
      //   this.memorableJourneyTitle = response.data.memorableJourneyTitle;
      // });
      // this.$axios.get("get_all_memorable_journey").then((response) => {
      //   this.memories = response.data.memories;
      // });
      // this.$axios.get("get_why_we_are_different_title").then((response) => {
      //   this.whyWeAreDifferentTitle = response.data.whyWeAreDifferentTitle;
      // });
      // this.$axios.get("get_all_why_we_are_different").then((response) => {
      //   this.whyWeAreDifferent = response.data.whyWeAreDifferent;
      // });
      // this.$axios.get("get_services_title").then((response) => {
      //   this.serviceTitle = response.data.serviceTitle;
      // });
      // this.$axios.get("get_all_services").then((response) => {
      //   this.mainServices = response.data.services;
      // });
      // this.$axios.get("get_business_partner_title").then((response) => {
      //   this.businessPartnerTitle = response.data.businessPartnerTitle;
      // });
      // this.$axios.get("get_all_business_partner").then((response) => {
      //   this.businessPartners = response.data.businessPartners;
      // });
      // this.$axios.get("get_advertising_partner_title").then((response) => {
      //   this.advertisingPartnerTitle = response.data.advertisingPartnerTitle;
      // });
      // this.$axios.get("get_all_advertising_partner").then((response) => {
      //   this.advertisingPartners = response.data.advertisingPartners;
      // });
      // this.$axios.get("get_all_who_are_our_client").then((response) => {
      //   this.whoAreOurClient = response.data.whoAreOurClient;
      // });
      // this.$axios.get("get_video_testimonial_title").then((response) => {
      //   this.testimonialTitle = response.data.testimonialTitle;
      // });
      // this.$axios.get("get_all_video_testimonial").then((response) => {
      //   this.videoTestimonial = response.data.videoTestimonial;
      // });
      // this.$axios.get("get_rating_title").then((response) => {
      //   this.ratingTitle = response.data.ratingTitle;
      // });
      // this.$axios.get("get_all_rating").then((response) => {
      //   this.ratingData = response.data.ratingData;
      // });
      // this.$axios.get("get_leading_title").then((response) => {
      //   this.leadingTitle = response.data.leadingTitle;
      // });
      // this.$axios.get("get_real_fact_title").then((response) => {
      //   this.fourRealTitle = response.data.fourRealTitle;
      // });
      // this.$axios.get("get_all_four_real_fact").then((response) => {
      //   this.fourRealFact = response.data.fourRealFact;
      // });
      // this.$axios.get("get_expert_services_title").then((response) => {
      //   this.expertServicesTitle = response.data.expertServicesTitle;
      // });
      // this.$axios.get("get_all_expert_services").then((response) => {
      //   this.expertServices = response.data.expertServices;
      // });
      // this.$axios.get("get_our_happy_client_title").then((response) => {
      //   this.happyClientTitle = response.data.happyClientTitle;
      // });
      // this.$axios.get("get_all_our_local_clients").then((response) => {
      //   this.localClients = response.data.localClients;
      // });
      // this.$axios.get("get_all_our_international_clients").then((response) => {
      //   this.internationalClients = response.data.internationalClients;
      // });
      // this.$axios.get("get_payment_partner_title").then((response) => {
      //   this.paymentPartnerTitle = response.data.paymentPartnerTitle;
      // });
      // this.$axios.get("get_all_payment_partner").then((response) => {
      //   this.paymentPartners = response.data.paymentPartners;
      // });
      // this.$axios.get("get_index_latest_blog").then((response) => {
      //   this.indexBlog = response.data.indexBlog;
      // });
    },
    typeText(){
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
        if (!this.typeStatus)
          this.typeStatus = true;


        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);


      }else{
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);

      }
    },
    eraseText(){
      if (this.charIndex > 0){
        if (!this.typeStatus)
          this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex -1)
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);

      }else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);

      }
    },
  }
}
</script>

<style>
span.cursor{
  display: inline-block;
  margin-left: 2px;
  width: 3px;
  background-color: white;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing{
  animation: none;
}
@keyframes cursorBlink {
  49% {background-color: white;}
  50% {background-color: transparent;}
  99% {background-color: transparent;}
}
.typed-text{
  color:white;
  font-weight:600;
  font-size: 22px;
}

</style>

