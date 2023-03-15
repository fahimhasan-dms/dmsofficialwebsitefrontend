<template>
  <div>
    <SliderComponent :Slider="appsDevelopmentSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="appDevelopmentListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="appsDevelopmentListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="appsDevelopmentContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'appDevelopmentPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Leading Mobile Apps Development Company in Bangladesh | Android & IPS',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is a leading mobile app development company in Bangladesh. We have highly experienced developers with the least technology to develop Android & IOS apps'
      }
    ],
  },
  data: () => ({
    appsDevelopmentSlider: [],
    appDevelopmentListItemTitle: [],
    appsDevelopmentListItem: [],
    appsDevelopmentContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("app_development").then((response) => {
        this.appsDevelopmentSlider = response.data.appsDevelopmentSlider;
        this.appDevelopmentListItemTitle = response.data.appDevelopmentListItemTitle;
        this.appsDevelopmentListItem = response.data.appsDevelopmentListItem;
        this.appsDevelopmentContent = response.data.appsDevelopmentContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_apps_development_slider").then((response) => {
    //     this.appsDevelopmentSlider = response.data.appsDevelopmentSlider;
    //   });
    //   this.$axios.get("get_apps_development_list_item_title").then((response) => {
    //     this.appDevelopmentListItemTitle = response.data.appDevelopmentListItemTitle;
    //   });
    //   this.$axios.get("get_apps_development_list_item").then((response) => {
    //     this.appsDevelopmentListItem = response.data.appsDevelopmentListItem;
    //   });
    //   this.$axios.get("get_apps_development_content").then((response) => {
    //     this.appsDevelopmentContent = response.data.appsDevelopmentContent;
    //   });
    // },
  }
}
</script>
