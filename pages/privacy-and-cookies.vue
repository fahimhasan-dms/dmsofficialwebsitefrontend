<template>
  <section class="term_condition">
    <div class="container">
      <div class="row">
        <div class="col-md-9" v-for="item in privacyCookie" :key="item.id">
          <div v-html="item.description"></div>
        </div>
        <div class="col-md-3">
          <RecentBlogPost />
          <OurRecentUpdateNews />
          <OurDedicatedServices />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import RecentBlogPost from "@/components/inc/RecentBlogPost";
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices";
export default {
  name:'privacyAndCookies',
  head: {
    title: 'Privacy and Cookies | DMS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Marketing privacy and cookies of Digital Marketing Solution Pvt Ltd'
      }
    ],
  },
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  data: () => ({
    privacyCookie: [],
  }),
  mounted() {
    this.loadData();
  },
  methods:{
    loadData(){
      this.$axios.get("privacy_cookies").then((response)=>{
        this.privacyCookie = response.data.privacyCookie
      })
    }
    // loadData(){
    //   this.$axios.get("get_privacy_cookies_data").then((response)=>{
    //     this.privacyCookie = response.data.privacyCookie
    //   })
    // }
  },

}
</script>
