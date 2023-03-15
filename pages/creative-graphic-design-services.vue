<template>
  <div>
    <SliderComponent :Slider="graphicDesignSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="graphicDesignListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="graphicDesignListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="graphicDesignContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'creativeGraphicDesignServicesPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Creative Graphic Design Service Company in Bangladesh',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best creative graphic design service company in Bangladesh. We provide UI/UX design, make logos, flyers, brochures, leaflets, add banners, social cover designs, etc'
      }
    ],
  },
  data: () => ({
    graphicDesignSlider: [],
    graphicDesignListItemTitle: [],
    graphicDesignListItem: [],
    graphicDesignContent: [],
  }),
  mounted(){
    this.loadData();
  },

  methods:{
    loadData() {
      this.$axios.get("graphic_design").then((response) => {
        this.graphicDesignSlider = response.data.graphicDesignSlider;
        this.graphicDesignListItemTitle = response.data.graphicDesignListItemTitle;
        this.graphicDesignListItem = response.data.graphicDesignListItem;
        this.graphicDesignContent = response.data.graphicDesignContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_graphic_design_slider").then((response) => {
    //     this.graphicDesignSlider = response.data.graphicDesignSlider;
    //   });
    //   this.$axios.get("get_graphic_design_list_item_title").then((response) => {
    //     this.graphicDesignListItemTitle = response.data.graphicDesignListItemTitle;
    //   });
    //   this.$axios.get("get_graphic_design_list_item").then((response) => {
    //     this.graphicDesignListItem = response.data.graphicDesignListItem;
    //   });
    //   this.$axios.get("get_graphic_design_content").then((response) => {
    //     this.graphicDesignContent = response.data.graphicDesignContent;
    //   });
    // },
  }
}
</script>
