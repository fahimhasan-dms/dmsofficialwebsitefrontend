<template>
  <div>
    <SliderComponent :Slider="outsourcingTrainingSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="outSourcingTrainingListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="outsourcingTrainingListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="outsourcingTrainingContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'outsourcingTrainingCenterPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Best Freelancing Training Centre in Dhaka | Outsourcing Training',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is the best freelancing training center in Dhaka. We teach all digital marketing courses like SEO, SMM, advanced Facebook and Google ads,  Graphic Design, Web Design, etc.'
      }
    ],
  },
  data: () => ({
    outsourcingTrainingSlider: [],
    outSourcingTrainingListItemTitle: [],
    outsourcingTrainingListItem: [],
    outsourcingTrainingContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("outsourcing_training").then((response) => {
        this.outsourcingTrainingSlider = response.data.outsourcingTrainingSlider;
        this.outSourcingTrainingListItemTitle = response.data.outSourcingTrainingListItemTitle;
        this.outsourcingTrainingListItem = response.data.outsourcingTrainingListItem;
        this.outsourcingTrainingContent = response.data.outsourcingTrainingContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_outsourcing_training_slider").then((response) => {
    //     this.outsourcingTrainingSlider = response.data.outsourcingTrainingSlider;
    //   });
    //   this.$axios.get("get_outsourcing_training_list_item_title").then((response) => {
    //     this.outSourcingTrainingListItemTitle = response.data.outSourcingTrainingListItemTitle;
    //   });
    //   this.$axios.get("get_outsourcing_training_list_item").then((response) => {
    //     this.outsourcingTrainingListItem = response.data.outsourcingTrainingListItem;
    //   });
    //   this.$axios.get("get_outsourcing_training_content").then((response) => {
    //     this.outsourcingTrainingContent = response.data.outsourcingTrainingContent;
    //   });
    // },
  }
}
</script>
