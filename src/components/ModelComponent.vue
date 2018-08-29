<template>
  <div class="completion-input-box">
    <span class="input-box-name">{{text}}</span>
    <input 
    type="text" 
    ref="input"
    :value='value'
    @keyup="changeInput($event)"
    >
  </div>
</template>
<script>
export default {
  name: "model-component",
  props: ["text", "value"],
  methods: {
    changeInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>