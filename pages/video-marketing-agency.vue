<template>
  <div>
    <SliderComponent :Slider="videoMarketingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="videoMarketingListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="videoMarketingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="video_marketing_video_section">
        <div class="container">
          <div class="row">
            <h3>{{ companyExplanationTitle.title }}</h3>
            <div class="col-md-4 video_marketing_video_section_card"  v-for="item in companyExplanationVideo" :key="item.id">
              <div class="card">
                <h4>{{ item.name }}</h4>
                <iframe class="ops_video" width="100%" height="300px" :src="item.url" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
          <div class="row">
            <h5>{{ businessProductServiceTitle.title  }}</h5>
            <div class="col-md-4 video_marketing_video_section_card" v-for="item in businessProductsServicesVideos" :key="item.id">
              <div class="card">
                <h4>{{ item.name }}</h4>
                <iframe class="ops_video" width="100%" height="300px" :src="item.url" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="videoMarketingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider";
import ListItemComponent from "@/components/ListItem";
import ContentComponent from "@/components/Content";
import ListItemTitleComponent from "@/components/ListItemTitle";
export default {
  name: 'videoMarketingAgencyPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Video Marketing Services | Video Marketing Company | Video Promotion',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'We are a video marketing services company to promote your online business. We think video marketing is a viral marketing method to engage your business. '
      }
    ],
  },
  data: () => ({
    videoMarketingSlider: [],
    videoMarketingListItemTitle: [],
    videoMarketingListItem: [],
    videoMarketingContent: [],
    companyExplanationTitle: [],
    companyExplanationVideo: [],
    businessProductServiceTitle: [],
    businessProductsServicesVideos: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("video_marketing").then((response) => {
        this.videoMarketingSlider = response.data.videoMarketingSlider;
        this.videoMarketingListItemTitle = response.data.videoMarketingListItemTitle;
        this.videoMarketingListItem = response.data.videoMarketingListItem;
        this.videoMarketingContent = response.data.videoMarketingContent;
        this.companyExplanationTitle = response.data.companyExplanationTitle;
        this.companyExplanationVideo = response.data.companyExplanationVideo;
        this.businessProductServiceTitle = response.data.businessProductServiceTitle;
        this.businessProductsServicesVideos = response.data.businessProductsServicesVideos;
      });
    },
    // loadData() {
    //   this.$axios.get("get_video_marketing_slider").then((response) => {
    //     this.videoMarketingSlider = response.data.videoMarketingSlider;
    //   });
    //   this.$axios.get("get_video_marketing_list_item_title").then((response) => {
    //     this.videoMarketingListItemTitle = response.data.videoMarketingListItemTitle;
    //   });
    //   this.$axios.get("get_video_marketing_list_item").then((response) => {
    //     this.videoMarketingListItem = response.data.videoMarketingListItem;
    //   });
    //   this.$axios.get("get_video_marketing_content").then((response) => {
    //     this.videoMarketingContent = response.data.videoMarketingContent;
    //   });
    //   this.$axios.get("get_video_marketing_company_explanation_video_title").then((response) => {
    //     this.companyExplanationTitle = response.data.companyExplanationTitle;
    //   });
    //   this.$axios.get("get_video_marketing_company_explanation_videos").then((response) => {
    //     this.companyExplanationVideo = response.data.companyExplanationVideo;
    //   });
    //   this.$axios.get("get_video_marketing_business_products_services_videos_title").then((response) => {
    //     this.businessProductServiceTitle = response.data.businessProductServiceTitle;
    //   });
    //   this.$axios.get("get_video_marketing_business_products_services_videos").then((response) => {
    //     this.businessProductsServicesVideos = response.data.businessProductsServicesVideos;
    //   });
    // },
  }
}
</script>
