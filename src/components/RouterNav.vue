<template>
    <div>
        <router-link  class="router-nav" 
        v-for="nav in navList" :key="nav.name"  
        :to="{name: nav.name}">{{nav.label}}</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          label: "D3",
          name: "Hello-D3"
        },
        {
          label: "Model",
          name: "Hello-Model"
        },
        {
          label: "ES",
          name: "Hello-ES"
        }
      ]
    };
  }
};
</script>

<style scoped  lang="less">
.router-nav {
  display: inline-block;
  padding: 10px 15px;
  margin: 0 10px;
}
</style>