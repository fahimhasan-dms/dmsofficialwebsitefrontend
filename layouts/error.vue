<template>
  <div>
    <div class="container text-center pt-4 pb-4">
      <h1><b class="error_text_main">404</b><br>Oops! Page Not Found.</h1>
      <p>Sorry, the page you are looking for cannot be found.</p>
      <button class="btn btn-info" @click="redirectToHome">Go to Home Page</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error',
  layout: 'empty',
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  },
}
</script>
<style>
.error_text_main {
  font-size: 6rem;
}
</style>

<!--<template>-->
<!--  <div>-->
<!--    <div class="container text-center pt-4 pb-4">-->
<!--      <h1>Oops! Page not found.</h1>-->
<!--      <button class="btn btn-info" @click="redirectToHome">Go to Home Page</button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    redirectToHome() {-->
<!--      this.$router.push('/')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<template>-->
<!--  <div class="nuxt-error">-->
<!--    <component :is="errorPage" :error="error" />-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import error404 from '~/components/error/404.vue';-->
<!--import error500 from '~/components/error/500.vue';-->
<!--export default {-->
<!--  name: 'nuxt-error',-->
<!--  layout: 'default', // optional-->
<!--  props: {-->
<!--    error: {-->
<!--      type: Object,-->
<!--      default: () => {},-->
<!--    },-->
<!--  },-->
<!--  computed: {-->
<!--    errorPage() {-->
<!--      if (this.error.statusCode === 404) {-->
<!--        return error404;-->
<!--      }-->
<!--      // catch everything else-->
<!--      return error500;-->
<!--    },-->
<!--  }-->
<!--}-->
<!--</script>-->


<!--<template>-->
<!--<div>-->
<!--  <div class="container text-center pt-4 pb-4">-->
<!--    <h1><b>404</b> <br> Page not found.</h1>-->
<!--    <NuxtLink to="/">Home page</NuxtLink>-->
<!--  </div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    props: ['error'],-->
<!--  }-->
<!--</script>-->
