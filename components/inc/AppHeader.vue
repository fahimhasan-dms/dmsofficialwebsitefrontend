<template>
  <div>
    <!--    Top_bar start-->
    <section>
      <div class="top_bar">
        <div class="row">
          <div class="col-md-8">
            <div class="top_contact">
              <ul>
                <li v-for="item in topContactNumber" :key="item.id" :class="item.list_class"><a :href="item.second_icon" target="_blank" rel="noopener" ><i :class="item.fist_icon"></i> {{item.contact}}</a> </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="top_icon">
              <ul>
                <li v-for="item in topSocialMedia" :key="item.id" :class="item.list_class"><a :href="item.url" target="_blank" rel="noopener"><i :class="item.class"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    Top_bar start end-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          <div v-for="item in logo" :key="item.id">
            <picture>
              <source type="image/webp" :srcset="$config.baseURL+'logo/'+ item.logo">
              <img class="nav_image" :src="$config.baseURL+'logo/'+ item.logo" :alt="item.alt">
            </picture>
          </div>
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" :class="none+'!important'">
          <ul class="navbar-nav mb-2 mb-lg-0 custom_nav">
            <li @click="hideNav" class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/">HOME</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SERVICES
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/best-seo-service-provider">Search Engine Optimization</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/social-media-marketing-agency">Social Media Marketing</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/google-ads-management-services-agency">Display Marketing (PPC)</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/digital-marketing-service-agency">Full Digital Marketing</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/email-marketing-service-provider">Targeted Email Marketing</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/bulk-sms-services">Brand SMS Marketing</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/creative-graphic-design-services">Creative Graphic Design</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/video-marketing-agency">Video Marketing</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/online-payment-service-in-bangladesh">Online Payment Service</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                DEVELOPMENT
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/best-software-development-company">Software Development</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/web-development-company">Web Development</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/e-commerce-website-development-company">E-commerce Development</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/custom-website-design-company">Custom Web Design</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/app-development-company">Apps Development</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/website-maintenance-service">Web Maintenance</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/best-outsourcing-training-centre">Outsourcing Training</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/book-domain-name">Domain Registration</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/payment-methods">Local Payment Methods</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/best-professional-photography-services">Professional Photography</NuxtLink></li>
              </ul>
            </li>
            <li @click="hideNav" class="nav-item">
              <NuxtLink class="nav-link" to="/portfolio">PORTFOLIO</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                COMPANY
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/about-us">About Us</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/mission-and-vision">Mission & Vision</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/company-profile">Company Profile</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/our-team-member">Our Team Members</NuxtLink></li>
                <li @click="hideNav"><NuxtLink class="dropdown-item" to="/career-opportunity">Career Opportunity</NuxtLink></li>
              </ul>
            </li>
            <li class="nav-item" @click="hideNav">
              <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
            </li>
            <li class="nav-item" @click="hideNav">
              <NuxtLink class="nav-link" to="/contact-us">CONTACT US</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container" id="sectionGap">
    </div>
  </div>
</template>
<script>
export default {
  name:'AppHeader',
  // head: {
  //   link: [
  //     {
  //       href: 'https://tawk.to/chat/638b4992b0d6371309d271e7/1gjc1epp8',
  //     }
  //   ]
  // },
  data: () => ({
    none: 'none',
    topContactNumber: [],
    topSocialMedia: [],
    logo: [],
  }),
  mounted(){
    this.loadData();
    this.$nextTick(function(){
      window.addEventListener("scroll", function(){
        let navBar = document.getElementById('nav-bar')
        let sectionGap = document.getElementById('sectionGap')

        if (window.innerWidth > 1024) {

          if (window.scrollY > 0) {
            navBar.style.background = '#fff'
            navBar.style.transition = '.5s'
            navBar.style.top = '0px'
            navBar.style.left = '0px'
            navBar.style.paddingRight = '15px'
            navBar.style.paddingLeft = '15px'
            navBar.style.position = 'fixed'
            navBar.style.zIndex = '9'
            navBar.style.width = '100%'
            navBar.style.borderTop = 'none';
            navBar.style.boxShadow = '0px 0px 10px 0px #9f9f9f';
          }else {
            navBar.style.transition = '.5s';
            navBar.style.top = '45px';
            navBar.style.boxShadow = 'none';
            sectionGap.style.marginTop = '80px';
          }
        }
      })
    })
  },
  methods:{
    hideNav(){
      this.none = !this.none
    },
    loadData() {
      this.$axios.get("header").then((response) => {
        this.topContactNumber = response.data.topContactNumber;
        this.topSocialMedia = response.data.topSocialMedia;
        this.logo = response.data.logo;
      });
    },
    // loadData() {
    //   this.$axios.get("get_all_top_contact_number").then((response) => {
    //     this.topContactNumber = response.data.topContactNumber;
    //   });
    //   this.$axios.get("get_all_top_social_media").then((response) => {
    //     this.topSocialMedia = response.data.topSocialMedia;
    //   });
    //   this.$axios.get("get_main_logo").then((response) => {
    //     this.logo = response.data.logo;
    //   });
    // },
  }
}
</script>
