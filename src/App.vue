<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-md-12">
        <div id="chart">
          <apexchart
            type="line"
            height="450"
            :options="options"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      
      series: [
    {
      name: "دمای محیط",
      type: "line",
      data: [1.4, 2, 2.5, 1.5, -7.5, 61.8, 3.8, 4.6],
    },
    {
      name: "رطوبت محیط",
      type: "line",
      data: [3,10, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: "دمای خروجی",
      type: "line",
      data: [7,1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: "دمای ورودی ",
      type: "line",
      data: [1,20, 29, 37, 36, 44, 45, 50, 58],
    },
    {
      name: "هرچی",
      type: "line",
      data: [0,12, 33, 20.1, 48, 45.1, 69.9, 64.5, 8.5],
    },
  ],
      options: {
        dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
              },
        chart: {
          // height: 550,
          type: "line",
          stacked: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [4, 4, 4,4,4],
        },
        title: {
          text: "اطلاعات دمایی",
          align: "left",
          offsetX: 110,
        },
        xaxis: {
          categories: [2008,2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,2022],
        },
        yaxis: [
          {
            min: -20,
            max: 100,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#008FFB",
            },
            labels: {
              style: {
                colors: "#008FFB",
              },
            },
            title: {
              text: "دمای محیط",
              style: {
                color: "#008FFB",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: "رطوبت محیط",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#00E396",
            },
            labels: {
              style: {
                colors: "#00E396",
              },
            },
            title: {
              text: "رطوبت محیط",
              style: {
                color: "#00E396",
              },
            },
          },
          {
            seriesName: "دمای خروجی",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#FEB019",
            },
            labels: {
              style: {
                colors: "#FEB019",
              },
            },
            title: {
              text: "دمای خروجی",
              style: {
                color: "#FEB019",
              },
            },
          },
          
          {
            seriesName: "دمای وزودی",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff3333",
            },
            labels: {
              style: {
                colors: "#ff3333",
              },
            },
            title: {
              text: "دمای وزودی",
              style: {
                color: "#ff3333",
              },
            },
          },
          {
            seriesName: " هرچی",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#8600b3",
            },
            labels: {
              style: {
                colors: "#8600b3",
              },
            },
            title: {
              text: " هرچی",
              style: {
                color: "#8600b3",
              },
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", 
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  },
  mounted() {
    this.sth()
  },
};
</script>

<style></style>
