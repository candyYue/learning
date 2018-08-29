<template>
    <div>
        {{reducearr}}
    </div>
</template>

<script>
export default {
  name: "es",
  data() {
    return {
      //   reduce
      arr: [
        { name: "brick11" },
        { name: "brick12" },
        { name: "brick13" },
        { name: "brick14" },
        { name: "brick15" }
      ],
      reducearr: ""
    };
  },
  methods: {
    //reduce
    reduceAction(pre, cur, index, arr) {
      //   debugger;
      if (index === 0) {
        return cur.name;
      } else if (index === arr.length - 1) {
        return pre + " & " + cur.name;
      } else {
        return pre + " @ " + cur.name;
      }
    },
    carryBricks(arr) {
      const that = this;
      return arr.reduce(that.reduceAction, "");
    }
  },
  mounted() {
    this.reducearr = this.carryBricks(this.arr);
  }
};
</script>

<style scoped>
</style>