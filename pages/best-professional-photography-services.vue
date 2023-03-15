<template>
  <div>
    <SliderComponent :Slider="photographySlider" />
    <section>
      <div class="top_pp">
        <div class="container">
          <h1 class="custom_pp_h1">{{ professionalPhotographyPackageTitle.title }}</h1>
          <div class="row justify-content-center">
            <div class="col-md-3" v-for="item in professionalPhotographyPackage" :key="item.id">
              <div class="card" style="border: none;">
                <div class="package_1" :style="{ 'background-color': `${ item.bg_color }` }">
                  <h1>{{ item.title }}</h1>
                  <p v-html="item.description"> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <h1 class="custom_pp2_h1">{{ dslrCinematographyPackageTitle.title }}</h1>
          <div class="row justify-content-center">
            <div class="col-md-3" v-for="item in dslrCinematographyPackage" :key="item.id">
              <div class="card" style="border: none;">
                <div class="package_1" :style="{ 'background-color' : `${item.bg_color}` }">
                  <h1>{{ item.title }}</h1>
                  <p v-html="item.description"> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="photographyContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ContentComponent from "@/components/Content.vue";
export default {
  name: 'photographyServicePage',
  components: {ContentComponent, SliderComponent},
  head: {
    title: 'Photography Services In Bangladesh | Best Photography packages',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS has been offering the best professional photography services for 12 years at an affordable price. We have the best Photography Packages in Bangladesh.'
      }
    ],
  },
  data: () => ({
    photographySlider: [],
    photographyContent: [],
    professionalPhotographyPackageTitle: [],
    dslrCinematographyPackageTitle: [],
    professionalPhotographyPackage: [],
    dslrCinematographyPackage: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("professional_photography").then((response) => {
        this.photographySlider = response.data.photographySlider;
        this.photographyContent = response.data.photographyContent;
        this.professionalPhotographyPackageTitle = response.data.professionalPhotographyPackageTitle;
        this.dslrCinematographyPackageTitle = response.data.dslrCinematographyPackageTitle;
        this.professionalPhotographyPackage = response.data.professionalPhotographyPackage;
        this.dslrCinematographyPackage = response.data.dslrCinematographyPackage;
      });
    },
    // loadData() {
    //   this.$axios.get("get_photography_slider").then((response) => {
    //     this.photographySlider = response.data.photographySlider;
    //   });
    //   this.$axios.get("get_photography_content").then((response) => {
    //     this.photographyContent = response.data.photographyContent;
    //   });
    //   this.$axios.get("get_professional_photography_package_title").then((response) => {
    //     this.professionalPhotographyPackageTitle = response.data.professionalPhotographyPackageTitle;
    //   });
    //   this.$axios.get("get_dslr_cinematography_photography_package_title").then((response) => {
    //     this.dslrCinematographyPackageTitle = response.data.dslrCinematographyPackageTitle;
    //   });
    //   this.$axios.get("get_professional_photography_package").then((response) => {
    //     this.professionalPhotographyPackage = response.data.professionalPhotographyPackage;
    //   });
    //   this.$axios.get("get_dslr_cinematography_photography_package").then((response) => {
    //     this.dslrCinematographyPackage = response.data.dslrCinematographyPackage;
    //   });
    // },
  }
}
</script>
