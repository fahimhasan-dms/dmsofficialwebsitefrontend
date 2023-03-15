<template>
  <div>
    <SliderComponent :Slider="emailMarketingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="emailMarketingListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="emailMarketingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="emailMarketingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'emailMarketingServiceProviderPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Email Marketing Services | Email Marketing in Bangladesh',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best Email marketing service agency in Bangladesh. We provide bulk email marketing for your business. That will grow your brand with high quality targeted 90% in boxing rate services.'
      }
    ],
  },
  data: () => ({
    emailMarketingSlider: [],
    emailMarketingListItemTitle: [],
    emailMarketingListItem: [],
    emailMarketingContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("email_marketing").then((response) => {
        this.emailMarketingSlider = response.data.emailMarketingSlider;
        this.emailMarketingListItemTitle = response.data.emailMarketingListItemTitle;
        this.emailMarketingListItem = response.data.emailMarketingListItem;
        this.emailMarketingContent = response.data.emailMarketingContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_email_marketing_slider").then((response) => {
    //     this.emailMarketingSlider = response.data.emailMarketingSlider;
    //   });
    //   this.$axios.get("get_email_marketing_list_item_title").then((response) => {
    //     this.emailMarketingListItemTitle = response.data.emailMarketingListItemTitle;
    //   });
    //   this.$axios.get("get_email_marketing_list_item").then((response) => {
    //     this.emailMarketingListItem = response.data.emailMarketingListItem;
    //   });
    //   this.$axios.get("get_email_marketing_content").then((response) => {
    //     this.emailMarketingContent = response.data.emailMarketingContent;
    //   });
    // },
  }
}
</script>
