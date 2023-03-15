<template>
  <div>
    <SliderComponent :Slider="webDesignSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="webDesignListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="webDesignListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="webDesignContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'webDesignPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Custom Web Design Company in Bangladesh | Web Design Agency',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best custom web design company in Bangladesh. We provide 100% user-friendly, mobile-friendly, and modern websites for small, medium, and large businesses.'
      }
    ],
  },
  data: () => ({
    webDesignSlider: [],
    webDesignListItemTitle: [],
    webDesignListItem: [],
    webDesignContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("website_design").then((response) => {
        this.webDesignSlider = response.data.webDesignSlider;
        this.webDesignListItemTitle = response.data.webDesignListItemTitle;
        this.webDesignListItem = response.data.webDesignListItem;
        this.webDesignContent = response.data.webDesignContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_web_design_slider").then((response) => {
    //     this.webDesignSlider = response.data.webDesignSlider;
    //   });
    //   this.$axios.get("get_web_design_list_item_title").then((response) => {
    //     this.webDesignListItemTitle = response.data.webDesignListItemTitle;
    //   });
    //   this.$axios.get("get_web_design_list_item").then((response) => {
    //     this.webDesignListItem = response.data.webDesignListItem;
    //   });
    //   this.$axios.get("get_web_design_content").then((response) => {
    //     this.webDesignContent = response.data.webDesignContent;
    //   });
    // },
  }
}
</script>
