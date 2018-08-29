<template>
    <div>
      <!-- test1 -->
      <svg  width='800' height="270" ref="svg"></svg>
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "D3",
  data() {
    return {
      data: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]
    };
  },
  methods: {
    // test1
    drawCircle() {
      const xScale = d3
        .scaleLinear()
        .domain([-10, 10])
        .range([0, 600]);

      const linearScale = d3
        .scaleLinear()
        .domain([-10, 0, 10])
        .range(["red", "#ddd", "blue"]);
      d3
        .select(this.$refs.svg)
        .selectAll("circle")
        .data(this.data)
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("cx", function(d) {
          return xScale(d);
        })
        .style("fill", function(d) {
          return linearScale(d);
        });
    },
    // test2
    drawTest() {
      const dataset = [2.5, 2.1, 1.7, 1.3, 0.9];

      const rectHeight = 25; //每个矩形所占的像素高度(包括空白)
      const width = 300; //画布的宽度
      const height = 300; //画布的高度
      const svg = d3
        .select("body") //选择文档中的body元素
        .append("svg") //添加一个svg元素
        .attr("width", width) //设定宽度
        .attr("height", height);

      const linear = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, 250]);

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect") //有数据，而没有足够图形元素的时候，使用此方法可以添加足够的元素。
        .attr("x", 20)
        .attr("y", function(d, i) {
          return i * rectHeight;
        })
        .attr("width", function(d) {
          return linear(d);
        })
        .attr("height", rectHeight - 2)
        .attr("fill", "steelblue");

      const axis = d3
        .axisBottom()
        .scale(linear)
        .ticks(7);

      svg
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate(20,130)")
        .call(axis);
    },
    // test3
    circleAnimat() {
      const svg = d3
        .select("body") //选择文档中的body元素
        .append("svg") //添加一个svg元素
        .attr("width", 500) //设定宽度
        .attr("height", 200);
      const circle = svg
        .append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 45)
        .style("fill", "lightgreen");
      // .transition()
      // .duration(2000)
      // .ease(d3.easeBounce)
      // .attr("cx", 300)
      // .style("fill", "red")
      // .attr("r", 25);
      circle.on("click", function() {
        console.log(d3.event);
      });
    },
    // test4
    pieChart() {
      const svg = d3
        .select("body") //选择文档中的body元素
        .append("svg") //添加一个svg元素
        .attr("width", 500) //设定宽度
        .attr("height", 200);
      const dataset = [30, 10, 43, 55, 13];
      const pie = d3.pie();
      const piedata = pie(dataset);
      const outerRadius = 150;
      const innerRadius = 0;
      const color = d3.scaleOrdinal(d3.schemeCategory10);
      //弧生成器
      const arc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
      // 分组元素g
      const arcs = svg
        .selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform", "translate(200,200)");
      // 添加 path
      arcs
        .append("path")
        .attr("fill", function(d, i) {
          return color(i);
        })
        .attr("d", function(d) {
          console.log(d)
          return arc(d); //调用弧生成器，得到路径值
        });
      // text
      arcs.append('text').attr("transform",function(d){
				return "translate(" + arc.centroid(d) + ")"; //arc.centroid(d) 算出弧线的中心
      })
      .attr("text-anchor","middle")
      .text(function(d){
				return d.data +'%';
			});
    }
  },
  mounted() {
    // this.drawCircle();
    // this.drawTest();
    // this.circleAnimat();
    this.pieChart();
  }
};
</script>

<style scoped  lang="less">
svg {
  padding: 50px;
  path {
    fill: none;
    stroke: #76bf8a;
    stroke-width: 3px;
  }
}
</style>