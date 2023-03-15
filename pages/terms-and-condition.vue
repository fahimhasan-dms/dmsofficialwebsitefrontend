<template>
  <section class="term_condition">
    <div class="container">
      <div class="row">
        <div class="col-md-9" v-for="item in termCondition" :key="item.id">
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
    name:'termsAndCondition',
    components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
    head: {
      title: 'Terms and Condition of DMS',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Before placing an order, please read our terms and conditions. Because we said all of our terms and condition there. It will help you with what you should do and what shouldn't "
        }
      ],
    },
    data: () => ({
      termCondition: [],
    }),
    mounted() {
      this.loadData();
    },
    methods:{
      loadData(){
        this.$axios.get("terms_condition").then((response) =>{
          this.termCondition = response.data.termCondition
        })
      }
      // loadData(){
      //   this.$axios.get("get_terms_condition_data").then((response) =>{
      //     this.termCondition = response.data.termCondition
      //   })
      // }
    },
  }
</script>
