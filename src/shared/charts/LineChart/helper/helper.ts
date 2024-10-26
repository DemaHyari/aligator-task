export const chartOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        color: "#4C4C4C"
      }
    },
    tooltip: {
      backgroundColor: "#042662c2",
      padding: { top: 16, bottom: 6, left: 16, right: 16 },
      cornerRadius: 10,
      titleAlign: "center",
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        title: function (context: any) {
          return [context[0].label, context[0].formattedValue];
        },
        titleSpacing: 0,
        label: function () {
          return null;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#47495b",
      },
      grid: {
        color: "#b5bccd",
      },
    },
    y: {
      ticks: {
        color: "#47495b",
      },
      grid: {
        color: "#b5bccd",
      },
    }
  }
};