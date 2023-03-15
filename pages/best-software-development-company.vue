<template>
  <div>
    <SliderComponent :Slider="softwareDevelopmentSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="softwareDevelopmentListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="softwareDevelopmentListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="softwareDevelopmentContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'softwareDevelopmentPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Software Development Company | Software Development Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'We are the best software development company in Bangladesh. We offer top-notch custom software development services. We use dynamic least technology and user-friendly programming language to the outcome for worldwide clients.'
      }
    ],
  },
  data: () => ({
    softwareDevelopmentSlider: [],
    softwareDevelopmentListItemTitle: [],
    softwareDevelopmentListItem: [],
    softwareDevelopmentContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("software_development").then((response) => {
        this.softwareDevelopmentSlider = response.data.softwareDevelopmentSlider;
        this.softwareDevelopmentListItemTitle = response.data.softwareDevelopmentListItemTitle;
        this.softwareDevelopmentListItem = response.data.softwareDevelopmentListItem;
        this.softwareDevelopmentContent = response.data.softwareDevelopmentContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_software_development_slider").then((response) => {
    //     this.softwareDevelopmentSlider = response.data.softwareDevelopmentSlider;
    //   });
    //   this.$axios.get("get_software_development_list_item_title").then((response) => {
    //     this.softwareDevelopmentListItemTitle = response.data.softwareDevelopmentListItemTitle;
    //   });
    //   this.$axios.get("get_software_development_list_item").then((response) => {
    //     this.softwareDevelopmentListItem = response.data.softwareDevelopmentListItem;
    //   });
    //   this.$axios.get("get_software_development_content").then((response) => {
    //     this.softwareDevelopmentContent = response.data.softwareDevelopmentContent;
    //   });
    // },
  }
}
</script>
