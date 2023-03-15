<template>
  <div>
    <section>
      <div class="about_us">
        <div class="container">
          <div class="row">
            <div class="col-md-9 mb-lg-4">
              <div class="about_us_content" v-for="item in aboutUsSlider" :key="item.id">
                <div class="about_top_image mb-4">
                  <picture>
                    <source type="image/webp" :srcset="$config.baseURL+'about-us/'+ item.image">
                    <img :src="$config.baseURL+'about-us/'+ item.image" :alt="item.alt">
                  </picture>
                </div>
                <!--        <p class="about_p" v-html="item.description"></p>-->
                <div class="about_p" v-html="item.description"></div>
              </div>
              <div class="about_us_content_2" v-for="item in aboutUsContent" :key="item.id">
                <div v-html="item.title"></div>
                <div class="about_p" v-html="item.description"></div>
              </div>

            </div>
            <div class="col-md-3">
              <OurRecentUpdateNews />
              <OurDedicatedServices />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews.vue";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices.vue";
export default {
  name: 'aboutUsPage',
  components: {OurDedicatedServices, OurRecentUpdateNews},
  head: {
    title: 'About Digital Marketing Solution Pvt Ltd (DMS) | About Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best Digital Marketing Agency in Bangladesh, one-stop Facebook & Google certified digital marketing agency. We have been working in this particular section since 2010. Client satisfaction is our 1st priority, and we believe in 100% quality services.'
      }
    ],
  },
  data: () => ({
    aboutUsSlider: [],
    aboutUsContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("about_us").then((response) => {
        this.aboutUsSlider = response.data.aboutUsSlider;
        this.aboutUsContent = response.data.aboutUsContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_about_us_slider").then((response) => {
    //     this.aboutUsSlider = response.data.aboutUsSlider;
    //   });
    //   this.$axios.get("get_about_us_content").then((response) => {
    //     this.aboutUsContent = response.data.aboutUsContent;
    //   });
    // },
  }
}
</script>
