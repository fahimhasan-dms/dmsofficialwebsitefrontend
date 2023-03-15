<template>
  <div>
    <section>
      <div class="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-9">

              <div class="blog_content mt-2" v-for="item in blog.data" :key="item.id">
                <h2><NuxtLink :to="`/blog/${item.blog_slug}`">{{ item.title }}</NuxtLink></h2>
                <ul>
                  <li><a href="#"><i class="fa-solid fa-user"></i>{{ item.author }}</a></li>
                  <li><a href="#"><i class="fa-solid fa-clock"></i>{{ item.date }}</a></li>
                  <li><a href="#"><i class="fa-solid fa-folder"></i>{{ item.category_name }}</a></li>
                  <br class="media_br"><li><a href="#"><i class="fa-solid fa-comment"></i>No Comments</a></li>
                </ul>
                <NuxtLink  :to="`/blog/${item.blog_slug}`">
                  <picture>
                    <source type="image/webp" :srcset="$config.baseURL+'blog/'+ item.image">
                    <img :src="$config.baseURL+'blog/'+ item.image" :alt="item.alt">
                  </picture>
                </NuxtLink>
                <div v-html="item.short_description.substring(0,180)+'..'"></div>
                <NuxtLink :to="`/blog/${item.blog_slug}`" class="btn_blog">Read More »</NuxtLink>
              </div>

<!--              <LaravelVuePagination :data="blog" @pagination-change-page="getBlog" />-->
<!--              <LaravelVuePagination :data="blog" @pagination-change-page="getBlog"></LaravelVuePagination>-->

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
  </div>
</template>
<script>
import RecentBlogPost from "@/components/inc/RecentBlogPost.vue";
import OurRecentUpdateNews from "@/components/inc/OurRecentUpdateNews.vue";
import OurDedicatedServices from "@/components/inc/OurDedicatedServices.vue";

export default{
  name:'blogPage',
  components: {
    OurDedicatedServices,
    OurRecentUpdateNews,
    RecentBlogPost,
  },
  head: {
    title: 'Best Digital Marketing Blogs | Digital Marketing Services',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'You will find all kinds of digital marketing blogs in this section which will help you to grow your business. Here you will find more about web design and development apart from digital marketing.'
      }
    ],
  },
  data: () => ({
    blog: [],
  }),
  mounted(){
    this.getBlog();
  },
  methods:{
    // loadData() {
      // this.$axios.get("get_all_blog").then((response) => {
      //   this.blog = response.data.blog;
      //   console.log('blog', this.blog);
      // });
    // },

    getBlog ( page = 1)  {
        this.$axios.get('get_blog?page=' + page).then((response) => {
          this.blog = response.data.blog;
        });
    }
    // getBlog ( page = 1)  {
    //     this.$axios.get('get_all_blog?page=' + page).then((response) => {
    //       this.blog = response.data.blog;
    //       // console.log('blog', this.blog);
    //     });
    // }

  }
}
// const  getBlog = async ( page = 1) => {
//   let response =await axios.get('/api/get_all_blog?page=' + page);
//   blog.value = response.data.blog
//   // console.log('blog', blog.value);
// }
</script>
