<template>
  <div>
    <AppHeader />
    <main>
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "@/components/inc/AppHeader.vue";
import AppFooter from "@/components/inc/AppFooter.vue";
export default {
  components: {AppFooter, AppHeader},
}
</script>
