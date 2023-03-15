<template>
  <div>
    <div v-for="item in Content" :key="item.id">
      <section  v-if="(item.priority)%2 == 0">
        <div class="sec_3">
          <div class="container">
            <div class="row">
              <div class="col-md-5 imageDiv">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                  <img  class="sec_3_img" :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                </picture>
              </div>
              <div class="col-md-7">
                <div class="sec_3_description">
                  <div class="custom_h2" v-html="item.title"></div>
                  <div class="custom_p" v-html="item.description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section v-else>
        <div class="sec_4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-7">
                <div class="sec_3_description">
                  <div class="custom_h2" v-html="item.title"></div>
                  <div class="custom_p" v-html="item.description"></div>
                </div>
              </div>
              <div class="col-md-5 imageDiv">
                <picture>
                  <source type="image/webp" :srcset="$config.baseURL+`service-development/` + item.image">
                  <img class="sec_4_img" :src="$config.baseURL+`service-development/` + item.image" :alt="item.alt">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name:'ContentComponent',
  props:{
    Content: {
      required: true,
    }
  }
}
</script>
