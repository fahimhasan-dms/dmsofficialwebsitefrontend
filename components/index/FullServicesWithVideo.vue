<template>
  <section>
    <div class="index_service" v-for="item in services" :key="item.id">
      <div class="container">
        <div class="service_title text-center">
          <div class="service_title_content_p" v-html="item.title"></div>
        </div>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col-md-6 imageDiv">
            <button type="button" class="sliderWithImageButton" data-bs-toggle="modal" data-bs-target="#exampleModalVideo">
              <picture>
                <source type="image/webp" :srcset="$config.baseURL+'ceo-message/'+ item.image">
                <img :src="$config.baseURL+'ceo-message/'+ item.image" :alt="item.alt">
              </picture>
              <div>
                <i class="fa-solid fa-circle-play servicesWithVideoThumb"></i>
              </div>
            </button>

            <div class="modal fade" id="exampleModalVideo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body modalVideo">
                    <iframe class="ops_video" width="100%" height="100%" :src="item.video" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-md-6">
            <div class="service_main_content">
              <div v-html="item.description_1"></div>
              <div v-html="item.description_2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:'fullServicesWithVideoComponent',
  props:{
    services: {
      // type: String,
      required: true,
    },
  },
}
</script>
