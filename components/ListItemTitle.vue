<template>
  <div>
    <h1 class="custom_h1">{{Title.title}}</h1>
  </div>
</template>
<script>
export default {
  name:'ListItemTitleComponent',
  props:{
    Title: {
      // type: String,
      required: true,
    }
  },
}
</script>
