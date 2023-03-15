<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 mt-4 mb-4">
          <div class="card text-center pt-3 thank_you_main" v-for="item in thankYou" :key="item.id">
            <div v-html="item.title"></div>
            <div v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'thankYouPage',
  head: {
    title: 'Thank You',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Thank You'
      }
    ],
  },
  data: () => ({
    thankYou: [],
  }),
  mounted() {
    this.loadData()
  },
  methods:{
    loadData(){
      this.$axios.get("get_thank_you_data").then((response)=>{
        this.thankYou = response.data.thankYou
      })
    }
  },
  watch: {
    $route() {
      window.location.reload()
    },
  }
}
</script>
