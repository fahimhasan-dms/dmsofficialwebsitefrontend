<template>
  <div>
    <SliderComponent :Slider="smsMarketingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="smsMarketingListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="smsMarketingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="smsMarketingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'bulkSmsServicePage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Bulk SMS Service Company in Bangladesh | SMS Marketing Agency',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best successful bulk SMS service agency in Bangladesh. We offer masking and non masking sms services. We give a dedicated reseller SMS server panel.',
      }
    ],
  },
  data: () => ({
    smsMarketingSlider: [],
    smsMarketingListItemTitle: [],
    smsMarketingListItem: [],
    smsMarketingContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("sms_marketing").then((response) => {
        this.smsMarketingSlider = response.data.smsMarketingSlider;
        this.smsMarketingListItemTitle = response.data.smsMarketingListItemTitle;
        this.smsMarketingListItem = response.data.smsMarketingListItem;
        this.smsMarketingContent = response.data.smsMarketingContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_sms_marketing_slider").then((response) => {
    //     this.smsMarketingSlider = response.data.smsMarketingSlider;
    //   });
    //   this.$axios.get("get_sms_marketing_list_item_title").then((response) => {
    //     this.smsMarketingListItemTitle = response.data.smsMarketingListItemTitle;
    //   });
    //   this.$axios.get("get_sms_marketing_list_item").then((response) => {
    //     this.smsMarketingListItem = response.data.smsMarketingListItem;
    //   });
    //   this.$axios.get("get_sms_marketing_content").then((response) => {
    //     this.smsMarketingContent = response.data.smsMarketingContent;
    //   });
    // },
  }
}
</script>
