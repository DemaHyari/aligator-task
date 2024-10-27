/**
 * Configuration options for a stacked bar chart.
 * 
 * @constant
 * @type {Object}
 * @property {boolean} maintainAspectRatio - Determines if the aspect ratio should be maintained.
 * @property {number} aspectRatio - The aspect ratio of the chart.
 * @property {Object} plugins - Plugin configurations.
 * @property {boolean} plugins.responsive - Determines if the chart should be responsive.
 * @property {Object} plugins.tooltip - Tooltip configurations.
 * @property {string} plugins.tooltip.backgroundColor - Background color of the tooltip.
 * @property {Object} plugins.tooltip.padding - Padding inside the tooltip.
 * @property {number} plugins.tooltip.padding.top - Top padding of the tooltip.
 * @property {number} plugins.tooltip.padding.bottom - Bottom padding of the tooltip.
 * @property {number} plugins.tooltip.padding.left - Left padding of the tooltip.
 * @property {number} plugins.tooltip.padding.right - Right padding of the tooltip.
 * @property {number} plugins.tooltip.cornerRadius - Corner radius of the tooltip.
 * @property {string} plugins.tooltip.titleAlign - Alignment of the tooltip title.
 * @property {Object} plugins.tooltip.callbacks - Callback functions for the tooltip.
 * @property {Function} plugins.tooltip.callbacks.title - Function to generate the tooltip title.
 * @property {number} plugins.tooltip.callbacks.titleSpacing - Spacing of the tooltip title.
 * @property {Function} plugins.tooltip.callbacks.label - Function to generate the tooltip label.
 * @property {Object} plugins.legend - Legend configurations.
 * @property {string} plugins.legend.position - Position of the legend.
 * @property {Object} plugins.legend.labels - Label configurations for the legend.
 * @property {boolean} plugins.legend.labels.usePointStyle - Determines if point style should be used for labels.
 * @property {string} plugins.legend.labels.color - Color of the legend labels.
 * @property {Object} scales - Scale configurations.
 * @property {Object} scales.x - X-axis configurations.
 * @property {boolean} scales.x.stacked - Determines if the x-axis should be stacked.
 * @property {Object} scales.x.ticks - Tick configurations for the x-axis.
 * @property {string} scales.x.ticks.color - Color of the x-axis ticks.
 * @property {Object} scales.x.grid - Grid configurations for the x-axis.
 * @property {string} scales.x.grid.color - Color of the x-axis grid lines.
 * @property {Object} scales.y - Y-axis configurations.
 * @property {boolean} scales.y.stacked - Determines if the y-axis should be stacked.
 * @property {Object} scales.y.ticks - Tick configurations for the y-axis.
 * @property {string} scales.y.ticks.color - Color of the y-axis ticks.
 * @property {Object} scales.y.grid - Grid configurations for the y-axis.
 * @property {string} scales.y.grid.color - Color of the y-axis grid lines.
 */
export const chartOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
    responsive: true,
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
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        color: "#4C4C4C",
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: "#47495b",
      },
      grid: {
        color: "#b5bccd",
      },
    },
    y: {
      stacked: true,
      ticks: {
        color: "#47495b",
      },
      grid: {
        color: "#b5bccd",
      },
    },
  },
};