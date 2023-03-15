<template>
  <div>
    <SliderComponent :Slider="socialMediaMarketingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="smmTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="socialMediaMarketingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="socialMediaMarketingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'socialMediaMarketingAgencyPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Social Media Marketing Agency in Bangladesh | Marketing Services',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'We are the best social media marketing agency in Bangladesh. We promote your Brand through all social media. DMS offers strategic Facebook marketing, Twitter marketing, Instagram marketing, etc.'
      }
    ],
  },
  data: () => ({
    socialMediaMarketingSlider: [],
    smmTitle: [],
    socialMediaMarketingListItem: [],
    socialMediaMarketingContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("social_media_marketing").then((response) => {
        this.socialMediaMarketingSlider = response.data.socialMediaMarketingSlider;
        this.smmTitle = response.data.smmTitle;
        this.socialMediaMarketingListItem = response.data.socialMediaMarketingListItem;
        this.socialMediaMarketingContent = response.data.socialMediaMarketingContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_social_media_marketing_slider").then((response) => {
    //     this.socialMediaMarketingSlider = response.data.socialMediaMarketingSlider;
    //   });
    //   this.$axios.get("get_social_media_marketing_list_item_title").then((response) => {
    //     this.smmTitle = response.data.smmTitle;
    //   });
    //   this.$axios.get("get_social_media_marketing_list_item").then((response) => {
    //     this.socialMediaMarketingListItem = response.data.socialMediaMarketingListItem;
    //   });
    //   this.$axios.get("get_social_media_marketing_content").then((response) => {
    //     this.socialMediaMarketingContent = response.data.socialMediaMarketingContent;
    //   });
    // },
  }
}
</script>
