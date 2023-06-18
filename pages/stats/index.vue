<template>
  <section>
    <div v-if="map" class="graph">
      <div>
        <apexchart
          width="700"
          :type="'bar'"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
      <div>
        <apexchart
          width="700"
          :type="'bar'"
          :options="secondChartOptions"
          :series="secondSeries"
        ></apexchart>
      </div>
      <div>
        <apexchart
          width="700"
          :type="'bar'"
          :options="thirdChartOptions"
          :series="thirdSeries"
        ></apexchart>
      </div>
      <div>
        <apexchart
          width="700"
          :type="'bar'"
          :options="fourthChartOptions"
          :series="fourthSeries"
        ></apexchart>
      </div>
    </div>
    <div >
      <b-table :data="data" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  async asyncData(context) {
    // let context = this;
    let categories = [];
    let flours = [];
    let breads = [];
    let year = [];
    let year_month = [];
    let stats = [];
    let banana = [];
    let petrol = [];
    let table =  [];

    categories = context.store.state.MODULE_POST.months;
    console.log(categories, "value##@");
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
        categories: categories ? categories : "",
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
        categories: year ? year : "",
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
        categories: year_month ? year_month : "",
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
        categories: year_month ? year_month : "",
      },
    };
    let fourthSeries = [
      {
        name: "series-1",
        data: banana ? banana : [],
      },
    ];
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
      categories,
      breads,
      flours,
      year,
      year_month,
      stats,
      table
    };
  },

  data() {
    return {
      data: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons",
          date: "2016-10-15 13:43:27",
          gender: "Male",
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs",
          date: "2016-12-15 06:00:53",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert",
          date: "2016-04-26 06:26:28",
          gender: "Female",
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores",
          date: "2016-04-10 10:28:46",
          gender: "Male",
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee",
          date: "2016-12-06 14:38:38",
          gender: "Female",
        },
      ],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "first_name",
          label: "First Name",
        },
        {
          field: "last_name",
          label: "Last Name",
        },
        {
          field: "date",
          label: "Date",
          centered: true,
        },
        {
          field: "gender",
          label: "Gender",
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

  methods: {},
};
</script>
