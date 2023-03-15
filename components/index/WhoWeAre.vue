<template>
  <div>
    <div class="row" v-for="item in whoWeAre" :key="item.id">
      <div v-html="item.title"></div>
      <div class="col-md-6 imageDiv">
        <picture>
          <source type="image/webp" :srcset="$config.baseURL+'who-we-are/'+ item.image">
          <img class="whoWeAreImage" :src="$config.baseURL+'who-we-are/'+ item.image" :alt="item.alt">
        </picture>
      </div>
      <div class="col-md-6">
        <div>
          <div v-html="item.description"></div>
        </div>
        <NuxtLink :to="item.link" class="btn btn-find-out">Find Out More</NuxtLink>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name:'WhoWeAre',
  props:{
    whoWeAre: {
      // type: String,
      required: true,
    },
  },
}
</script>
