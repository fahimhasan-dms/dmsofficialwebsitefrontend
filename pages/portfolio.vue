<template>
  <div>
    <section>
      <div class="local_payment_method">
        <div class="container">
          <div class="header_portfolio">
            <h1>{{ portfolioTitle.title }}</h1>
          </div>

          <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="fa-solid fa-house"></i> Local Clients</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="fa-solid fa-globe"></i> International Clients</button>
            </li>
          </ul>
          <div class="tab-content custom_tab_content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-3 cardPort" v-for="item in localPortfolios" :key="item.id">
                  <div class="card card_portfolio">
                    <picture>
                      <source type="image/webp" :srcset="$config.baseURL+'portfolio/'+ item.image">
                      <img :src="$config.baseURL+'portfolio/'+ item.image" class="card-img-top" :alt="item.alt">
                    </picture>
                    <div class="card-body">
                      <p class="card-text text-center">{{ item.name }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row">
                <div class="col-md-3 cardPort" v-for="item in internationalPortfolios" :key="item.id">
                  <div class="card card_portfolio">
                    <picture>
                      <source type="image/webp" :srcset="$config.baseURL+'portfolio/'+ item.image">
                      <img :src="$config.baseURL+'portfolio/'+ item.image" class="card-img-top" :alt="item.alt">
                    </picture>
                    <div class="card-body">
                      <p class="card-text text-center">{{item.name}}</p>
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
  name: 'portfolioPage',
  head: {
    title: 'Portfolio of DMS | Our Work Report',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of DMS. If you are confused please visit our portfolio Page. Hope everything will be clear about DMS.'
      }
    ],
  },
  data: () => ({
    portfolioTitle: [],
    localPortfolios: [],
    internationalPortfolios: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("portfolio").then((response) => {
        this.portfolioTitle = response.data.portfolioTitle;
        this.localPortfolios = response.data.localPortfolios;
        this.internationalPortfolios = response.data.internationalPortfolios;
      });
    },
    // loadData() {
    //   this.$axios.get("get_portfolio_title").then((response) => {
    //     this.portfolioTitle = response.data.portfolioTitle;
    //   });
    //   this.$axios.get("get_local_portfolio").then((response) => {
    //     this.localPortfolios = response.data.localPortfolios;
    //   });
    //   this.$axios.get("get_international_portfolio").then((response) => {
    //     this.internationalPortfolios = response.data.internationalPortfolios;
    //   });
    // },
  }
}
</script>
