<template>
  <section class="term_condition">
    <div class="container">
      <div class="row">
        <div class="col-md-9" v-for="item in refundPolicy" :key="item.id">
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
  name: 'refundPolicy',
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  head: {
    title: 'Refund Policy Of Digital Marketing Solution Pvt Ltd',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS will refund you if they can not fulfill your desire'
      }
    ],
  },
  data: () => ({
    refundPolicy: [],
  }),
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios.get("refund_policy").then((response)=>{
        this.refundPolicy = response.data.refundPolicy
      })
    }
    // loadData(){
    //   this.$axios.get("get_refund_policy_data").then((response)=>{
    //     this.refundPolicy = response.data.refundPolicy
    //   })
    // }
  },
}
</script>
