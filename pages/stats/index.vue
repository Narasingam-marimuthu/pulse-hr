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
            columnWidth="100"
          ></apexchart>
        </div>
        <div class="right">
          <div class="title">
            <span class="title"> {{ "Job Satisfaction" }}</span>
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
        <div class="right">
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
    <div class="middletitle">
      {{ "The prediction is made with an aaccuracy of 93.33333333333333%" }}
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
    let opEmployeeIds = [],
      opAges = [],
      opYearsUnderManager = [],
      opJobSatisfaction = [],
      opGenders = [],
      opPerformanceRating = [],
      opUpskillingOpportunities = [],
      opYearsUnderCurrentManager = [];

    opEmployeeIds = context.store.state.MODULE_POST.EmployeeIds;
    opAges = context.store.state.MODULE_POST.Ages;
    opYearsUnderManager = context.store.state.MODULE_POST.YearsUnderManager;
    opJobSatisfaction = context.store.state.MODULE_POST.JobSatisfaction;
    opGenders = context.store.state.MODULE_POST.Genders;
    opPerformanceRating = context.store.state.MODULE_POST.PerformanceRating;
    opYearsUnderCurrentManager = context.store.state.MODULE_POST.YearsUnderCurrentManager1;
    opUpskillingOpportunities =
      context.store.state.MODULE_POST.UpskillingOpportunities;

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
        categories: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
      },
    };
    let fourthSeries = [
      {
        name: "series-1",
        data: petrol ? petrol : [],
      },
    ];
    let tableData = [];
    for (let i = 1; i <= opEmployeeIds.length; i++) {
      let map = {
        sno: i,
        oppEmployeeIds: opEmployeeIds[i - 1],
        opAges: opAges[i - 1],
        // oppYearsUnderManager: opYearsUnderManager[i - 1],
        oppJobSatisfaction: opJobSatisfaction[i - 1],
        oppPerformanceRating: opPerformanceRating[i - 1],
        oppYearsUnderCurrentManager: opYearsUnderCurrentManager[i - 1],
        oppUpskillingOpportunities: opUpskillingOpportunities[i - 1],
        oppGenders: opGenders[i - 1],
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
      opEmployeeIds,
      opAges,
      opYearsUnderManager,
      opJobSatisfaction,
      opPerformanceRating,
      opYearsUnderCurrentManager,
      opUpskillingOpportunities,
      opGenders,
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
          field: "oppEmployeeIds",
          label: "Employee ID",
        },
        {
          field: "oppGenders",
          label: "Gender",
        },
        {
          field: "opAges",
          label: "Age",
        },
        {
          field: "oppYearsUnderCurrentManager",
          label: "Years Under Current Manager",
        },
        {
          field: "oppUpskillingOpportunities",
          label: "Upskilling Opportunities",
        },
        {
          field: "oppJobSatisfaction",
          label: "Job Satisfaction",
        },
        {
          field: "oppPerformanceRating",
          label: "Performance Rating",
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
.middletitle {
  padding-top: 5%;
  padding-left: 30%;
  padding-bottom: 8%;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 25px;
  color: rgb(66, 131, 253);
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.center {
  /* border: 2px solid #0000ff; */
  padding: 0.5rem;
  display: flex;
}

.right {
  flex: 30%;
  padding-right: 10%;
}
.left {
  padding-left: 15%;
  flex: 40%;
}
</style>
