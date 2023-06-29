<template>
  <section>
    <div v-if="map" class="graph">
      <div class="demo"></div>

      <div class="center">
        <div class="left">
          <div class="title">
            <span> {{ "Years Under Current Manager" }}</span>
          </div>
          <apexchart
            width="500"
            :type="'bar'"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="right">
          <div class="title">
            <span class="title">
              {{ "Job Satisfaction" }}</span
            >
          </div>
          <apexchart
            width="500"
            :type="'bar'"
            :options="secondChartOptions"
            :series="secondSeries"
          ></apexchart>
        </div>
      </div>
      <div class="center">
        <div class="left">
          <div class="title">
            <span class="title"> {{ "Performance Rating" }}</span>
          </div>

          <apexchart
            width="500"
            :type="'bar'"
            :options="thirdChartOptions"
            :series="thirdSeries"
          ></apexchart>
        </div>
        <div class="left">
          <div class="title">
            <span class="title"> {{ "Upskilling Opportunities" }}</span>
          </div>

          <apexchart
            width="500"
            :type="'bar'"
            :options="fourthChartOptions"
            :series="fourthSeries"
          ></apexchart>
        </div>
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
          label: "Years Under Current Manager",
        },
        {
          field: "bread",
          label: "Job Satisfaction",
        },
        {
          field: "banana",
          label: "Performance Rating",
        },
        {
          field: "petrol",
          label: "Upskilling Opportunities",
        },
        {
          field: "stats",
          label: "Department",
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
.demo {
  height: 5px;
  width: 5px;
  padding: 10px;
}
.title {
  padding-top: 10px;
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
.center {
  border: 2px solid #0000ff;
  padding: 0.5rem;
  display: flex;
}

.right {

  flex: 50%;
}
.left {
  
  flex: 50%;
}
</style>
