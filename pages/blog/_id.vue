<template>
  <div>
    <client-only>
      <section>
      <div class="blog_details">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="blog_details_content mt-2">
                <h2><a>{{singleBlog.title}}</a></h2>
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+'blog/'+ singleBlog.image">
                  <img :src="$config.baseURL+'blog/'+ singleBlog.image" :alt="singleBlog.alt">
                </picture>
                <div v-html="singleBlog.short_description"></div>
              </div>
              <div class="blog_details_content mt-2" v-html="singleBlog.description">
              </div>
              <div class="blog_details_content mt-2" v-html="singleBlog.description_2">
              </div>
              <div class="blog_details_content mt-2" v-html="singleBlog.description_3">
              </div>
              <div class="blog_details_content mt-2" v-html="singleBlog.description_4">
              </div>
            </div>

            <!-- right side -->
            <div class="col-md-3">
              <RecentBlogPost />
              <OurRecentUpdateNews />
              <OurDedicatedServices />
            </div>
          </div>
        </div>
      </div>
    </section>
    </client-only>
  </div>
</template>
<script>
import RecentBlogPost from "@/components/inc/RecentBlogPost";
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices";
export default {
  components: {OurDedicatedServices, OurRecentUpdateNews, RecentBlogPost},
  head() {
    return {
      title: this.singleBlog.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.singleBlog.meta_description
        }
      ],
    };
  },
  data: () => ({
    singleBlog:{},
  }),
  methods:{
    loadProducts() {
      let slug = this.$route.params.id;
      this.$axios.get("blog/" + slug).then((response) => {
        this.singleBlog = response.data.singleBlog;
        // console.log('response',this.singleBlog)
      });
    },
  },
  beforeMount() {
    this.loadProducts();
  },

  // async mounted() {
  //   try {
  //     let slug = this.$route.params.id;
  //     console.log(slug)
  //     const response = await fetch("https://www.admin.digitalmarketingbd.com/api/blog/" + slug);
  //     console.log('response', response)
  //     const data = await response.json();
  //
  //     this.singleBlog = data.singleBlog;
  //     console.log('lastConsole',this.singleBlog)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

}
</script>
