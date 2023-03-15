<template>
  <div>
    <SliderComponent :Slider="seoSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="seoTopSMMTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="seoListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="seoContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'bestSeoServiceProvider',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best SEO Service Provider in Bangladesh | Best SEO Agency',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best SEO service provider in Bangladesh. We have skilled SEO consultants to improve your search engine ranking. We do local SEO, and global SEO, including onpage, offpage, and technical SEO with optimized content writing.'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.digitalmarketingbd.com/best-seo-service-provider',
      },
    ],
  },
  data: () => ({
    seoSlider: [],
    seoTopSMMTitle: [],
    seoListItem: [],
    seoContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("search_engine_optimization").then((response) => {
        this.seoSlider = response.data.seoSlider;
        this.seoTopSMMTitle = response.data.seoTopSMMTitle;
        this.seoListItem = response.data.seoListItem;
        this.seoContent = response.data.seoContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_seo_slider").then((response) => {
    //     this.seoSlider = response.data.seoSlider;
    //   });
    //   this.$axios.get("get_seo_list_item_title").then((response) => {
    //     this.seoTopSMMTitle = response.data.seoTopSMMTitle;
    //   });
    //   this.$axios.get("get_seo_list_item").then((response) => {
    //     this.seoListItem = response.data.seoListItem;
    //   });
    //   this.$axios.get("get_seo_content").then((response) => {
    //     this.seoContent = response.data.seoContent;
    //   });
    // },
  }
}
</script>
