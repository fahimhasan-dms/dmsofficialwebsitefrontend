<template>
  <div>
    <SliderComponent :Slider="displayMarketingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="dmListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="displayMarketingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="displayMarketingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'googleAdsManagementServicesAgency',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Google Ads Management Services | Google Ads Services',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is a top leading google ads management services provider in Bangladesh. We provide budget-friendly google ads services that will maximize your business. We are experts in data-driven marketing.'
      }
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://www.digitalmarketingbd.com/google-ads-management-services-agency',
      },
    ],
  },
  data: () => ({
    displayMarketingSlider: [],
    dmListItemTitle: [],
    displayMarketingListItem: [],
    displayMarketingContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("display_marketing").then((response) => {
        this.displayMarketingSlider = response.data.displayMarketingSlider;
        this.dmListItemTitle = response.data.dmListItemTitle;
        this.displayMarketingListItem = response.data.displayMarketingListItem;
        this.displayMarketingContent = response.data.displayMarketingContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_display_marketing_slider").then((response) => {
    //     this.displayMarketingSlider = response.data.displayMarketingSlider;
    //   });
    //   this.$axios.get("get_display_marketing_list_item_title").then((response) => {
    //     this.dmListItemTitle = response.data.dmListItemTitle;
    //   });
    //   this.$axios.get("get_display_marketing_list_item").then((response) => {
    //     this.displayMarketingListItem = response.data.displayMarketingListItem;
    //   });
    //   this.$axios.get("get_display_marketing_content").then((response) => {
    //     this.displayMarketingContent = response.data.displayMarketingContent;
    //   });
    // },
  }
}
</script>
