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
    let months = [];
    let flours = [];
    let breads = [];
    let year = [];
    let year_month = [];
    let stats = [];
    let banana = [];
    let petrol = [];
    let table =  [];

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
      categories: months,
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
      data: tableData(),
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
    await context.tableData();
  },
  methods: {
    tableData() {
      let context = this
      let tableData = []
      for (let i = 1; i <= context.months; i++) {
        let map = {
        sno: i,
        month: context.months[i-1],
        wheat: context.wheat[i-1],
        bread: context.bread[i-1],
        banana: context.banana[i-1],
        petrol: context.petrol[i-1],
        stats: context.stats[i-1],
        }
        tableData.push(map)
      }
      return tableData
    }

  },
};
</script>
