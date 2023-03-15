<template>
  <section>
    <div class="seo_section">
      <div class="container" id="ceo_message">
        <div class="row" v-for="item in CeoMessage" :key="item.id">
          <div class="col-lg-6 d-flex align-items-center">
            <div class="index_ceo_content">
              <h2>{{ item.title }}</h2>
              <div v-html="item.description"></div>
              <NuxtLink :to="item.url" class="btn">{{ item.btn_text }}</NuxtLink>
            </div>
          </div>
          <div class="col-lg-6">
            <picture>
              <source type="image/webp" :srcset="$config.baseURL+'ceo-message/'+ item.image">
              <img :src="$config.baseURL+'ceo-message/'+ item.image" :alt="item.alt">
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'CeoMessageComponent',
  props:{
    CeoMessage: {
      // type: String,
      required: true,
    },
  },
}
</script>
