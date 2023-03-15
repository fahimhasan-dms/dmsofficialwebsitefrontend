<template>
  <div>
    <section>
      <div class="our_team_member">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="our_team_member_content">
                <div v-html="ourTeamMemberTitle.title"></div>
                <div v-html="ourTeamMemberTitle.description"></div>
              </div>
              <div class="row justify-content-center">
                <div class="container d-flex justify-content-center" v-for="item in ourTeamMemberChairman" :key="item.id">
                  <div class="card team_member_card">
                    <div class="member_image mx-auto">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+'our-team-member/'+ item.image">
                        <img :src="$config.baseURL+'our-team-member/'+ item.image" :alt="item.alt">
                      </picture>
                    </div>
                    <div class="card-body text-center">
                      <div class="team_member_content">
                        <h5 class="mb-0">{{ item.name }}</h5>
                        <p>{{ item.designation }}</p>

                        <ul>
                          <li><a target="_blank" :href="item.facebook"><i class="fa-brands fa-facebook"></i></a></li>
                          <li><a :href="item.twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                          <li><a :href="item.linkedin" target="_blank" ><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div  class="container d-flex justify-content-center" id="team_card" >
              <div class="row">
                <div class="col-lg-4 col-md-4 mt-3 justify-content-center" v-for="item in ourTeamMember" :key="item.id" v-show="item.priority < 5">
                  <div class="card team_member_card">
                    <div class="member_image mx-auto">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+'our-team-member/'+ item.image">
                        <img :src="$config.baseURL+'our-team-member/'+ item.image" :alt="item.alt">
                      </picture>
                    </div>
                    <div class="card-body text-center">
                      <div class="team_member_content">
                        <h5 class="mb-0">{{ item.name }}</h5>
                        <p>{{ item.designation }}</p>

                        <ul>
                          <li><a target="_blank" :href="item.facebook"><i class="fa-brands fa-facebook"></i></a></li>
                          <li><a :href="item.twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                          <li><a :href="item.linkedin" target="_blank" ><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-3 col-md-3 mt-3" v-for="item in ourTeamMember" :key="item.id" v-show="item.priority >= 5">
                  <div class="card team_member_card">
                    <div class="member_image mx-auto">
                      <picture>
                        <source type="image/webp" :srcset="$config.baseURL+'our-team-member/'+ item.image">
                        <img :src="$config.baseURL+'our-team-member/'+ item.image" :alt="item.alt">
                      </picture>
                    </div>
                    <div class="card-body text-center">
                      <div class="team_member_content">
                        <h5 class="mb-0">{{ item.name }}</h5>
                        <p>{{ item.designation }}</p>

                        <ul>
                          <li><a target="_blank" :href="item.facebook"><i class="fa-brands fa-facebook"></i></a></li>
                          <li><a :href="item.twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                          <li><a :href="item.linkedin" target="_blank" ><i class="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                      </div>
                    </div>
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
  name: 'companyProfilePage',
  head: {
    title: 'Best Digital Marketing Team | Expert Online Marketing Team',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'An expert digital marketing team can spread your business to the whole world througn online. DMS has an expert digital marketing team that knows very well how to boost a business and grow a business.'
      }
    ],
  },
  data: () => ({
    ourTeamMemberTitle: [],
    ourTeamMemberChairman: [],
    ourTeamMember: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("our_team_member").then((response) => {
        this.ourTeamMemberTitle = response.data.ourTeamMemberTitle;
        this.ourTeamMemberChairman = response.data.ourTeamMemberChairman;
        this.ourTeamMember = response.data.ourTeamMember;
      });
    },
    // loadData() {
    //   this.$axios.get("get_our_team_member_title").then((response) => {
    //     this.ourTeamMemberTitle = response.data.ourTeamMemberTitle;
    //   });
    //   this.$axios.get("get_our_team_member_chairman").then((response) => {
    //     this.ourTeamMemberChairman = response.data.ourTeamMemberChairman;
    //   });
    //   this.$axios.get("get_all_our_team_member").then((response) => {
    //     this.ourTeamMember = response.data.ourTeamMember;
    //     console.log('data', this.ourTeamMember)
    //   });
    // },
  }
}
</script>
