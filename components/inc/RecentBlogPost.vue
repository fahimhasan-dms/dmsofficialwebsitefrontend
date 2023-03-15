<template>
  <div>
    <div class="recent_blog_post">
      <h5>OUR RECENT BLOG POST</h5>
      <div class="row" v-for="item in rightBarBlog" :key="item.id">
        <div class="col-4">
          <NuxtLink :to="item.blog_slug">
            <picture>
              <source type="image/webp" :srcset="$config.baseURL+'blog/'+ item.image">
              <img :src="$config.baseURL+'blog/'+ item.image" :alt="item.alt">
            </picture>
          </NuxtLink>
        </div>
        <div class="col-8">
          <div class="recent_post">
            <ul>
              <li><NuxtLink :to="`/blog/${item.blog_slug}`">{{item.title.substring(0,25)+'..'}}</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'recentBlogPost',
  data: () => ({
    rightBarBlog: [],
  }),
  mounted(){
    this.loadData();
  },
  methods:{
    loadData() {
      this.$axios.get("get_right_bar_blog").then((response) => {
        this.rightBarBlog = response.data.rightBarBlog;
      });
    },
  }
}
</script>
