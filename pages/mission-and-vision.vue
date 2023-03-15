<template>
  <div>
    <section>
      <div class="mission_vision">
        <div class="container">
          <div class="row">
            <div class="col-md-9 mb-lg-4 mb-md-4">
              <div class="mission_vision_content" v-for="item in missionVisionSlider" :key="item.id">
                <div v-html="item.title"></div>
                <div v-html="item.description"></div>
              </div>
              <div class="mission_vision_2" v-for="item in missionVisionContent" :key="item.id">
                <div v-html="item.title"></div>
                <div v-html="item.description"></div>
              </div>
            </div>

            <!-- right item -->
            <div class="col-md-3">
              <RecentBlogPost />
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
import RecentBlogPost from "@/components/inc/RecentBlogPost";
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices";
export default {
  name: 'missionVisionPage',
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  head: {
    title: 'Mission and Vision | Digital Marketing Solution Pvt Ltd',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Our only mission and vision are promoting the client\'s businesses. Providing quality service is our habit. We always go forward but never give up. Our passion is to boost any business through the internet.'
      }
    ],
  },
  data: () => ({
    missionVisionSlider: [],
    missionVisionContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("mission_vision").then((response) => {
        this.missionVisionSlider = response.data.missionVisionSlider;
        this.missionVisionContent = response.data.missionVisionContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_mission_vision_slider").then((response) => {
    //     this.missionVisionSlider = response.data.missionVisionSlider;
    //   });
    //   this.$axios.get("get_mission_vision_content").then((response) => {
    //     this.missionVisionContent = response.data.missionVisionContent;
    //   });
    // },
  }
}
</script>
