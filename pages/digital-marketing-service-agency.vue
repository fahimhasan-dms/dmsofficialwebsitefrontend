<template>
  <div>
    <SliderComponent :Slider="onlineBrandPromotionSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="onlineBrandPromotionListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="onlineBrandPromotionListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="onlineBrandPromotionContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'onlineBrandPromotionPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Brand Promotion Service Agency l Online Business Promotion Company',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'We are dedicated and determined to promote your online brand and corporate identify. Our Branding strategy building your online business preference to the customer.'
      }
    ],
  },
  data: () => ({
    onlineBrandPromotionSlider: [],
    onlineBrandPromotionListItemTitle: [],
    onlineBrandPromotionListItem: [],
    onlineBrandPromotionContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("online_brand_promotion").then((response) => {
        this.onlineBrandPromotionSlider = response.data.onlineBrandPromotionSlider;
        this.onlineBrandPromotionListItemTitle = response.data.onlineBrandPromotionListItemTitle;
        this.onlineBrandPromotionListItem = response.data.onlineBrandPromotionListItem;
        this.onlineBrandPromotionContent = response.data.onlineBrandPromotionContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_online_brand_promotion_slider").then((response) => {
    //     this.onlineBrandPromotionSlider = response.data.onlineBrandPromotionSlider;
    //   });
    //   this.$axios.get("get_online_brand_promotion_list_item_title").then((response) => {
    //     this.onlineBrandPromotionListItemTitle = response.data.onlineBrandPromotionListItemTitle;
    //   });
    //   this.$axios.get("get_online_brand_promotion_list_item").then((response) => {
    //     this.onlineBrandPromotionListItem = response.data.onlineBrandPromotionListItem;
    //   });
    //   this.$axios.get("get_online_brand_promotion_content").then((response) => {
    //     this.onlineBrandPromotionContent = response.data.onlineBrandPromotionContent;
    //   });
    // },
  }
}
</script>
