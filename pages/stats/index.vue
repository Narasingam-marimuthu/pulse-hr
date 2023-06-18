<template>
  <section>
    <div v-if="map" class="graph">
      <div
       class="demo"></div>
      <div class="title">
      <span > {{ "White, self raising flour per 2 kg" }}</span>

      </div>
      <div class="split">
        <div class="centered">
          <apexchart
            width="500"
            :type="'bar'"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="title">  <span class="title">
          {{ "Bread, white sliced pan, large (800g)" }}</span
        ></div>

        <div class="centered">
          <apexchart
            width="500"
            :type="'bar'"
            :options="secondChartOptions"
            :series="secondSeries"
          ></apexchart>
        </div>
      </div>
      <span class="title"> {{ "Bananas per kg" }}</span>

      <div class="graph3">
        <apexchart
          width="500"
          :type="'bar'"
          :options="thirdChartOptions"
          :series="thirdSeries"
        ></apexchart>
      </div>
      <span class="title"> {{ "Petrol - unleaded per litre" }}</span>

      <div class="graph4">
        <apexchart
          width="500"
          :type="'bar'"
          :options="fourthChartOptions"
          :series="fourthSeries"
        ></apexchart>
      </div>
    </div>
    <div>
      <b-table :data="tableData" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  async asyncData(context) {
    // let context = this;
    let months = [];
    let flours = [];
    let breads = [];
    let year = [];
    let year_month = [];
    let stats = [];
    let banana = [];
    let petrol = [];
    let table = [];

    months = context.store.state.MODULE_POST.months;
    console.log(months, "value##@");
    flours = context.store.state.MODULE_POST.flours;
    console.log(flours, "floursvalue##@");
    breads = context.store.state.MODULE_POST.breads;
    console.log(breads, "breadsvalue##@");
    year = context.store.state.MODULE_POST.year;
    console.log(year, "yearvalue##@");
    year_month = context.store.state.MODULE_POST.year_month;
    console.log(year_month, "year_monthvalue##@");
    stats = context.store.state.MODULE_POST.stats;
    console.log(stats, "statsvalue##@");
    banana = context.store.state.MODULE_POST.banana;
    console.log(banana, "bananavalue##@");
    petrol = context.store.state.MODULE_POST.petrol;
    console.log(petrol, "petrolvalue##@");
    table = context.store.state.MODULE_POST.table;
    console.log(table, "tablevalue##@");
    let chartOptions = {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: months ? months : "",
      },
    };
    let series = [
      {
        name: "series-1",
        data: flours ? flours : [],
      },
    ];
    let secondChartOptions = {
      chart: {
        id: "vuechart-example",
        type: "line",
      },
      xaxis: {
        categories: months ? months : "",
      },
    };
    let secondSeries = [
      {
        name: "series-1",
        data: breads ? breads : [],
      },
    ];
    let thirdChartOptions = {
      chart: {
        id: "vuechart-example",
        type: "line",
      },
      xaxis: {
        categories: months ? months : "",
      },
    };
    let thirdSeries = [
      {
        name: "series-1",
        data: banana ? banana : [],
      },
    ];

    let fourthChartOptions = {
      chart: {
        id: "vuechart-example",
        type: "line",
      },
      xaxis: {
        categories: months ? months : "",
      },
    };
    let fourthSeries = [
      {
        name: "series-1",
        data: banana ? banana : [],
      },
    ];
    let tableData = [];
    for (let i = 1; i <= 25; i++) {
      let map = {
        sno: i,
        month: months[i - 1],
        wheat: flours[i - 1],
        bread: breads[i - 1],
        banana: banana[i - 1],
        petrol: petrol[i - 1],
        stats: stats[i - 1],
      };
      tableData.push(map);
      console.log(map, "map##@");
    }
    // context.tableData();
    return {
      fourthChartOptions,
      fourthSeries,
      banana,
      thirdChartOptions,
      thirdSeries,
      secondChartOptions,
      secondSeries,
      chartOptions,
      series,
      categories: months,
      breads,
      flours,
      year,
      year_month,
      stats,
      table,
      tableData,
    };
  },

  data() {
    return {
      // data: this.tableData(),
      columns: [
        {
          field: "sno",
          label: "S.No",
          width: "40",
          numeric: true,
        },
        {
          field: "month",
          label: "Month",
        },
        {
          field: "wheat",
          label: "White, self raising flour per 2 kg",
        },
        {
          field: "bread",
          label: "Bread, white sliced pan, large (800g)",
        },
        {
          field: "banana",
          label: "Bananas per kg",
        },
        {
          field: "petrol",
          label: "Petrol - unleaded per litre",
        },
        {
          field: "stats",
          label: "Stats",
        },
      ],

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
          data: this.flours ? this.flours : [1, 2, 3, 4, 5],
        },
      ],
    };
  },
  async created() {
    let context = this;
  },
  methods: {},
};
</script>

<style scoped>
.demo{
  height: 5px;
  width: 5px;
  padding: 10px;
}
.title{
  padding-top:10px ;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 25px;
  color: #080808;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
/* .split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
} */
</style>
