<template>
  <div>
    <div class="company_profile_heading">
      <h2 class="text-center">Company Profile</h2>
      <hr class="company_profile_hr">
    </div>
    <div style="padding-bottom: 35px" v-for="item in companyProfile" :key="item.id">
      <iframe
        :src="$config.baseURL+'company-profile/'+ item.pdf + '#toolbar=1&navpanes=0&scrollbar=0'"
        frameBorder="0"
        scrolling="auto"
        height="600px"
        width="100%"
      >

      </iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'companyProfilePage',
  head: {
    title: 'Best Digital Marketing Profile | Profile of DMS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Digital Marketing Solution has a profile of digital marketing. We are in the field for around 12 years. We have provided digital marketing services to more than 700 companies which makes us experienced and visionary.'
      }
    ],
  },
  data: () => ({
    companyProfile: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("company_profile").then((response) => {
        this.companyProfile = response.data.companyProfile;
      });
    },
    // loadData() {
    //   this.$axios.get("get_company_profile").then((response) => {
    //     this.companyProfile = response.data.companyProfile;
    //   });
    // },
  }
}
</script>
