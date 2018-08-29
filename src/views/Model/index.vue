<template>
  <div class="completion-input-box">
    <ModelComponent  :text="'项目名称'" v-model="projectN"></ModelComponent>
    {{projectN}}
  </div>
</template>
<script>
import ModelComponent from '@/components/ModelComponent'
export default {
  name: 'search',
  data() {
    return {
      projectN: '1111',
    }
  },
  components: {
    ModelComponent
  }
}
</script>