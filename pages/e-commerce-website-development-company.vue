<template>
  <div>
    <SliderComponent :Slider="ecommerceDevelopmentSlider" />
    <section>
      <div class="top_smm">
        <div class="container">
          <ListItemTitleComponent :Title="ecommerceDevelopmentListItemTitle" />
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="smm">
                <ul>
                  <ListItemComponent :ListItem="ecommerceDevelopmentListItem " />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContentComponent :Content="ecommerceDevelopmentContent" />
  </div>
</template>
<script>
import SliderComponent from "@/components/Slider.vue";
import ListItemComponent from "@/components/ListItem.vue";
import ContentComponent from "@/components/Content.vue";
import ListItemTitleComponent from "@/components/ListItemTitle.vue";
export default {
  name: 'ecommerceDevelopmentPage',
  components: {ListItemTitleComponent, ContentComponent, ListItemComponent, SliderComponent},
  head: {
    title: 'Ecommerce Website Development Service | Ecommerce Service Provider',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'DMS is a one-stop Supplier of ecommerce website development services, we are reputed as a responsive, dynamic, and SEO friendly ecommerce Service Provider.'
      }
    ],
  },
  data: () => ({
    ecommerceDevelopmentSlider: [],
    ecommerceDevelopmentListItemTitle: [],
    ecommerceDevelopmentListItem: [],
    ecommerceDevelopmentContent: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("ecommerce_website_development").then((response) => {
        this.ecommerceDevelopmentSlider = response.data.ecommerceWebsiteDevelopmentSlider;
        this.ecommerceDevelopmentListItemTitle = response.data.ecommerceWebsiteDevelopmentListItemTitle;
        this.ecommerceDevelopmentListItem = response.data.ecommerceWebsiteDevelopmentListItem;
        this.ecommerceDevelopmentContent = response.data.ecommerceWebsiteDevelopmentContent;
      });
    },
    // loadData() {
    //   this.$axios.get("get_ecommerce_development_slider").then((response) => {
    //     this.ecommerceDevelopmentSlider = response.data.ecommerceWebsiteDevelopmentSlider;
    //   });
    //   this.$axios.get("get_ecommerce_development_list_item_title").then((response) => {
    //     this.ecommerceDevelopmentListItemTitle = response.data.ecommerceWebsiteDevelopmentListItemTitle;
    //   });
    //   this.$axios.get("get_ecommerce_development_list_item").then((response) => {
    //     this.ecommerceDevelopmentListItem = response.data.ecommerceWebsiteDevelopmentListItem;
    //   });
    //   this.$axios.get("get_ecommerce_development_content").then((response) => {
    //     this.ecommerceDevelopmentContent = response.data.ecommerceWebsiteDevelopmentContent;
    //   });
    // },
  }
}
</script>
