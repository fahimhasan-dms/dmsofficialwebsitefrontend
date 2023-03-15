<template>
  <div>
    <section>
      <div id="dontShy">
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-md-8 dont-shy-area">
              <div v-html="dontShyTouchTitle.title"></div>
              <div class="row py-3 shy_item">
                <div class="col-lg-3 col-md-6 col-sm-6 mobile_responsive" v-for="item in dontShyToTouch" :key="item.id">
                  <NuxtLink :to="item.url"><i  :class="item.class" title="Give us a call"></i></NuxtLink>
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div>

            <div class="col-md-4 subscription_area">
              <div class="subscription">
                <h4>{{subscribeTitle.title}}</h4>
                <p>{{ subscribeTitle.description }}</p>
                <div>
                  <div class="">
                    <form ref="subscribeForm" @submit.prevent="subscribe">
                      <div class="row justify-content-center">
                          <div class="col-md-6">
                            <label class="subscription_form_text">Name</label>
                            <input type="text" class="form-control" placeholder="Enter name" name="name" required>
                          </div>
                          <div class="col-md-6 pb-2">
                            <label class="subscription_form_text">Email</label>
                            <input type="email" class="form-control" placeholder="Enter email" name="email" required>
                          </div>
                          <div class="col-md-6 d-grid pt-2">
                            <button class="btn btn_custom_contact" type="submit">Submit</button>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="our_sister_concern">
        <!-- <div class="container"> -->
        <div v-html="sisterConcernTitle.title"></div>
        <div class="row justify-content-center sister_concern_margin">
          <div class="col-lg-2 col-md-6 col-sm-6 logo_div" v-for="item in sisterConcern" :key="item.id">
            <a :href="item.url" target="_blank" rel="noopener">
              <picture>
                <source type="image/webp" :srcset="$config.baseURL+'sister-concern/'+ item.image">
                <img :src="$config.baseURL+'sister-concern/'+ item.image" :alt="item.alt">
              </picture>
            </a>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </section>
    <section>
      <div class="social_media">
        <div class="flex-container justify-content-center">

          <div class="content social_icon" v-for="item in socialMedia" :key="item.id">
            <a :href="item.url" target="_blank" rel="noopener"><i :class="item.class"></i></a>
            <b><h5 class=" my-3">{{ item.title }}</h5></b>
          </div>

        </div>
      </div>
    </section>
    <section>
      <LiveChat />
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <h4>About Company</h4>
              <ul>
                <li><NuxtLink to="/about-us">- About Us</NuxtLink></li>
                <li><NuxtLink to="/mission-and-vision">- Mission & Vision</NuxtLink></li>
                <li><NuxtLink to="/company-profile">- Company Profile</NuxtLink></li>
                <li><NuxtLink to="/our-team-member">- Team Members</NuxtLink></li>
                <li><NuxtLink to="/career-opportunity">- Career Opportunities</NuxtLink></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4>Services</h4>
              <ul>
                <li><NuxtLink to="/best-seo-service-provider">- Search Engine Optimization </NuxtLink></li>
                <li><NuxtLink to="/social-media-marketing-agency">- Social Media Marketing</NuxtLink></li>
                <li><NuxtLink to="/google-ads-management-services-agency">- Display Marketing</NuxtLink></li>
                <li><NuxtLink to="/email-marketing-service-provider">- Targeted Email Marketing</NuxtLink></li>
                <li><NuxtLink to="/digital-marketing-service-agency">- Online Brand Promotion</NuxtLink></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4>Development</h4>
              <ul>
                <li><NuxtLink to="/best-software-development-company">- Software Development</NuxtLink></li>
                <li><NuxtLink to="/web-development-company">- Web Development</NuxtLink></li>
                <li><NuxtLink to="/custom-website-design-company">- Custom Web Design</NuxtLink></li>
                <li><NuxtLink to="/app-development-company">- Apps Development</NuxtLink></li>
                <li><NuxtLink to="/website-maintenance-service">- Web Maintenance</NuxtLink></li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="https://www.facebook.com/DMSBangladesh/" target="_blank" rel="noopener">- Social Way</a></li>
                <li><a href="https://www.google.com/maps/place/Digital+Marketing+Solution+Pvt.+Ltd./@23.8739411,90.401418,17.5z/data=!4m5!3m4!1s0x3755c43b3d1eaacb:0xe8081df4a9db3ba3!8m2!3d23.8733924!4d90.4017016" target="_blank" rel="noopener">- Google Map</a></li>
                <li><NuxtLink to="/contact-us">- Email Support</NuxtLink></li>
                <li><NuxtLink to="/open-a-ticket">- Open A Ticket</NuxtLink></li>
                <li><a href="tel:+8801743260655" title="+8801743260655" target="_blank" rel="noopener">- +8801743260655</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="copywrite text-center">
        <ul>
          <li><NuxtLink to="/terms-and-condition">Terms And Condition</NuxtLink></li>
          <li><NuxtLink to="/privacy-and-cookies">Privacy And Cookies</NuxtLink></li>
          <li><NuxtLink to="/refund-policy">Refund Policy</NuxtLink></li>
          <li><NuxtLink to="/disclaimer">Disclaimer</NuxtLink></li>
        </ul>
        <p>&copy 2008 - 2023 DMS Bangladesh. All Right Reserved. | Design & Development By :- <NuxtLink to="/" >Digital Marketing Solution (Pvt.) Ltd.</NuxtLink></p>
      </div>
    </section>
  </div>
</template>
<script>
import LiveChat from "@/components/inc/LiveChat.vue";
export default {
  name:'AppFooter',
  components: {LiveChat},

  data: () => ({
    socialMedia: [],
    sisterConcernTitle: [],
    sisterConcern: [],
    dontShyTouchTitle: [],
    dontShyToTouch: [],
    subscribeTitle: [],
  }),
  mounted(){
    this.loadData();
    // this.$axios.$get('/sanctum/csrf-cookie');
  },

  methods:{
    loadData() {
      this.$axios.get("footer").then((response) => {
        this.socialMedia = response.data.socialMedia;
        this.sisterConcernTitle = response.data.sisterConcernTitle;
        this.sisterConcern = response.data.sisterConcern;
        this.dontShyTouchTitle = response.data.dontShyTouchTitle;
        this.dontShyToTouch = response.data.dontShyToTouch;
        this.subscribeTitle = response.data.subscribeTitle;
      });
    },
    subscribe(){
      try{
        const formData = new FormData(this.$refs.subscribeForm);
        // console.log(formData)
        this.$axios.post('post_subscribe', formData).then( res => {
          location.reload()
          // this.$router.push({path: '/thank-you',});
          this.$router.push({ path: "/thank-you" }, () => {
            location.reload()
          })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Message sent.',
            showConfirmButton: false,
            timer: 1500
          })
        })
      }catch(err){
        // console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong.',
          showConfirmButton: false,
          timer: 1500
        })
      }
      // this.$nuxt.$loading.finish();
    }
  }
}
</script>
