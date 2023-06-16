<template>
  <section>
    <div v-if="map">
      <apexchart
        width="500"
        :type="'bar'"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </section>
</template>

<script>
  import { mapState, mapActions, mapGetters } from "vuex";

export default {

  async asyncData(context) {
    // let context = this;
    let categories = [];
     categories = context.store.state.MODULE_POST.data;
    console.log(categories, "value##@");
   
   let chartOptions = {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories:  categories ? categories : "",
        },
      };
     let series = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ];
      return{
        chartOptions,
        categories
      }
    
  },
  
  data() {
    return {
      map: true,

      chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: this.responseData ? this.responseData : "",
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 81],
        },
      ],
    };
  },

  methods: {},
};
</script>
