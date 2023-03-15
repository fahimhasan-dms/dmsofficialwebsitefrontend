<template>
  <section class="term_condition">
    <div class="container">
      <div class="row">
        <div class="col-md-9" v-for="item in disclaimer" :key="item.id">
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
  name:'disclaimer',
  head: {
    title: 'Disclaimer of DMS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Disclaimer of Digital Marketing Solution '
      }
    ],
  },
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  data: () => ({
    disclaimer: [],
  }),
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios.get("disclaimer").then((response)=>{
        this.disclaimer = response.data.disclaimer
      })
    }
    // loadData(){
    //   this.$axios.get("get_disclaimer_data").then((response)=>{
    //     this.disclaimer = response.data.disclaimer
    //   })
    // }
  }
}
</script>
