<template>
  <div>
    <SliderComponent :Slider="webMaintenanceSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="webMaintenanceListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="webMaintenanceListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="webMaintenanceContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'websiteMaintenancePage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Top-Notch Quality Website Maintenance Service Packages | 24/7 Support',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS provides top-notch quality website maintenance service packages. Our professional server administration team has enough experts to fix your web issues. They will take care of your online business.'
      }
    ],
  },
  data: () => ({
    webMaintenanceSlider: [],
    webMaintenanceListItemTitle: [],
    webMaintenanceListItem: [],
    webMaintenanceContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("web_maintenance").then((response) => {
        this.webMaintenanceSlider = response.data.webMaintenanceSlider;
        this.webMaintenanceListItemTitle = response.data.webMaintenanceListItemTitle;
        this.webMaintenanceListItem = response.data.webMaintenanceListItem;
        this.webMaintenanceContent = response.data.webMaintenanceContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_web_maintenance_slider").then((response) => {
    //     this.webMaintenanceSlider = response.data.webMaintenanceSlider;
    //   });
    //   this.$axios.get("get_web_maintenance_list_item_title").then((response) => {
    //     this.webMaintenanceListItemTitle = response.data.webMaintenanceListItemTitle;
    //   });
    //   this.$axios.get("get_web_maintenance_list_item").then((response) => {
    //     this.webMaintenanceListItem = response.data.webMaintenanceListItem;
    //   });
    //   this.$axios.get("get_web_maintenance_content").then((response) => {
    //     this.webMaintenanceContent = response.data.webMaintenanceContent;
    //   });
    // },
  }
}
</script>
