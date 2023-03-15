<template>
  <div>
    <li v-for="item in ListItem" :key="item.id"><span><i class="fa-solid fa-square-check"></i></span><span class="smm_content">{{ item.name }}</span></li>
  </div>
</template>
<script>
export default {
  name:'ListItemComponent',
  props:{
    ListItem: {
      // type: String,
      required: true,
    },
  },
}
</script>
