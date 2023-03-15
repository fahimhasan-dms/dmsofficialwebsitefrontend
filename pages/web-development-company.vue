<template>
  <div>
    <SliderComponent :Slider="webDevelopmentSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="webDevelopmentListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="webDevelopmentListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="webDevelopmentContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'webDevelopmentPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Web Development Company in Bangladesh | Custom Design Agency',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best web development company in Bangladesh. We offer the latest web development services that will be 100% responsive & user-friendly to get the maximum audience.'
      }
    ],
  },
  data: () => ({
    webDevelopmentSlider: [],
    webDevelopmentListItemTitle: [],
    webDevelopmentListItem: [],
    webDevelopmentContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("web_development").then((response) => {
        this.webDevelopmentSlider = response.data.webDevelopmentSlider;
        this.webDevelopmentListItemTitle = response.data.webDevelopmentListItemTitle;
        this.webDevelopmentListItem = response.data.webDevelopmentListItem;
        this.webDevelopmentContent = response.data.webDevelopmentContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_web_development_slider").then((response) => {
    //     this.webDevelopmentSlider = response.data.webDevelopmentSlider;
    //   });
    //   this.$axios.get("get_web_development_list_item_title").then((response) => {
    //     this.webDevelopmentListItemTitle = response.data.webDevelopmentListItemTitle;
    //   });
    //   this.$axios.get("get_web_development_list_item").then((response) => {
    //     this.webDevelopmentListItem = response.data.webDevelopmentListItem;
    //   });
    //   this.$axios.get("get_web_development_content").then((response) => {
    //     this.webDevelopmentContent = response.data.webDevelopmentContent;
    //   });
    // },
  }
}
</script>
