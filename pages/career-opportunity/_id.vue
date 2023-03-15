<template>
  <div>
    <section>
      <div class="career_opportunity">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="career_heading text-center">{{ singleVacancyAnnouncement.designation }}</h1>
              <p class="career_p">{{ singleVacancyAnnouncement.company_name }}</p>
            </div>

            <div class="col-md-12">
              <div class="mandatory_rule" v-html="singleVacancyAnnouncement.description">
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="apply_section text-center">
            <a type="button" class="btn btn-primary mt-2" :href="singleVacancyAnnouncement.google_form" target="_blank">Apply Now</a>
            <p class="text-center mt-3">Application Deadline : {{singleVacancyAnnouncement.expire_date}}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    singleVacancyAnnouncement:{},
  }),
  head() {
    return {
      title: this.singleVacancyAnnouncement.designation,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.singleVacancyAnnouncement.designation,
        }
      ],
    };
  },
  mounted() {
    this.loadVacancy();
  },
  methods:{
    loadVacancy() {
      let slug = this.$route.params.id;
      this.$axios.get("vacancy_announcement_details/" + slug).then((response) => {
        this.singleVacancyAnnouncement = response.data.singleVacancyAnnouncement;
      });
    },
  },

  // async asyncData({ params, $axios }) {
  //   // console.log(params)
  //   const post = await $axios.$get(`vacancy_announcement_details/${params.id}`)
  //   // console.log(post)
  //   return { post }
  // },

}
</script>
