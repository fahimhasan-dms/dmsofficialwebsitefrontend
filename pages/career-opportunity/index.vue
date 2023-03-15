<template>
  <div>
    <section v-for="item in careerOpportunitySlider" :key="item.id">
      <div class="app_development_slider" :style="{'background' : 'linear-gradient(rgba(0, 0, 0, .6)' + ',' + 'rgba(0, 0, 0, .6))' + ',' +  'url(' + $config.baseURL+'career-opportunity/'+ item.image + ')'}">
        <div class="container">
          <div class="seo_content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="career_opportunity">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="career_heading" v-html="vacancyAnnouncementTitle.title"></div>
              <div class="career_p" v-html="vacancyAnnouncementTitle.description"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="job">
            <div class="row justify-content-center">
              <div class="col-sm-12" v-for="item in vacancyAnnouncement" :key="item.id">
                <NuxtLink  :to="`/career-opportunity/${item.slug}`">
                  <div class="jobs_wrapper">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="job_title_text">
                          <NuxtLink :to="`/career-opportunity/${item.slug}`">{{ item.designation }}</NuxtLink>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="comp_name_text">
                          {{ item.company_name }}
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="icon_text">
                          <i class="fa-solid fa-location-dot"></i> {{ item.location }}
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="edu_icon_text">
                          <i class="fa-solid fa-graduation-cap"></i>
                          <div v-html="item.education"></div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="row">
                          <div class="col-sm-9">
                            <div class="exp_icon_text">
                              <i class="fa-solid fa-briefcase"></i> {{item.experience}}
                            </div>
                          </div>
                          <div class="col-sm-3">
                            <div class="dead_text">
                              <div class="dead_text_d">
                                <!--                                    <strong>{{ dateTime(item.expire_date) }}</strong>-->
                                <strong>{{ item.expire_date }}</strong>
                              </div>
                              <div class="dead_text_s">
                                <i class="fa-solid fa-calendar-days"></i> Deadline: &nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="career_forth_section">
        <div class="container text-center">
          <div v-html="employeeFacilityTitle.title"></div>
          <div v-html="employeeFacilityTitle.description"></div>

          <div class="career_six_container text-start">
            <div class="row">

              <div class="col-lg-4 career_box" v-for="item in employeeFacility" :key="item.id">
                <div class="row">
                  <div class="col-3">
                    <picture>
                      <source type="image/webp" :srcset="$config.baseURL+'career-opportunity/'+ item.image">
                      <img :src="$config.baseURL+'career-opportunity/'+ item.image" :alt="item.alt">
                    </picture>
                    <div class="round"></div>
                  </div>
                  <div class="col-9">
                    <div v-html="item.title"></div>
                    <div v-html="item.description"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'careerOpportunityPage',
  head: {
    title: 'Best Career Opportunity  With DMS | Build Your Career',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS offers the best chance to build your career. Bring your career to the next level with Digital Marketing solution Pvt Ltd.'
      }
    ],
  },
  data: () => ({
    careerOpportunitySlider: [],
    vacancyAnnouncementTitle: [],
    vacancyAnnouncement: [],
    employeeFacilityTitle: [],
    employeeFacility: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("career_opportunity").then((response) => {
        this.vacancyAnnouncementTitle = response.data.vacancyAnnouncementTitle;
        this.vacancyAnnouncement = response.data.vacancyAnnouncement;
        this.employeeFacilityTitle = response.data.employeeFacilityTitle;
        this.employeeFacility = response.data.employeeFacility;
        this.careerOpportunitySlider = response.data.careerOpportunitySlider;
      });
    },
    // loadData() {
    //   this.$axios.get("get_all_vacancy_announcement_title").then((response) => {
    //     this.vacancyAnnouncementTitle = response.data.vacancyAnnouncementTitle;
    //   });
    //   this.$axios.get("get_all_vacancy_announcement").then((response) => {
    //     this.vacancyAnnouncement = response.data.vacancyAnnouncement;
    //   });
    //   this.$axios.get("get_employee_facility_title").then((response) => {
    //     this.employeeFacilityTitle = response.data.employeeFacilityTitle;
    //   });
    //   this.$axios.get("get_all_employee_facility").then((response) => {
    //     this.employeeFacility = response.data.employeeFacility;
    //   });
    //   this.$axios.get("get_career_opportunity_slider").then((response) => {
    //     this.careerOpportunitySlider = response.data.careerOpportunitySlider;
    //   });
    // },
  }
}
</script>
