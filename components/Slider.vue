<template>
  <div>
    <section v-for="item in Slider" :key="item.id">
      <div class="seo_slider" :style="{ 'background-image': 'url('+ $config.baseURL + `service-development/` + item.image + ')' }">
        <div class="container">
          <div class="seo_content">
            <h1>{{ item.title }}</h1>
            <p>{{ item.description }}</p>
            <NuxtLink class="btn btn-primary custom_primary_button" :to="item.url">{{item.button}}</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name:'SliderComponent',
  props:{
    Slider: {
      // type: String,
      required: true,
    }
  },
}
</script>
