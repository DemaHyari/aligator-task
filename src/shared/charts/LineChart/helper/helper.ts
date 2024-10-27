/**
 * Configuration options for a line chart.
 * 
 * @constant
 * @type {object}
 * @property {boolean} maintainAspectRatio - Whether to maintain the original canvas aspect ratio.
 * @property {number} aspectRatio - Aspect ratio of the chart.
 * @property {object} plugins - Plugin configuration options.
 * @property {boolean} plugins.responsive - Whether the chart is responsive.
 * @property {object} plugins.legend - Legend configuration options.
 * @property {string} plugins.legend.position - Position of the legend.
 * @property {object} plugins.legend.labels - Label configuration options for the legend.
 * @property {boolean} plugins.legend.labels.usePointStyle - Whether to use point style for legend labels.
 * @property {string} plugins.legend.labels.color - Color of the legend labels.
 * @property {object} plugins.tooltip - Tooltip configuration options.
 * @property {string} plugins.tooltip.backgroundColor - Background color of the tooltip.
 * @property {object} plugins.tooltip.padding - Padding for the tooltip.
 * @property {number} plugins.tooltip.padding.top - Top padding for the tooltip.
 * @property {number} plugins.tooltip.padding.bottom - Bottom padding for the tooltip.
 * @property {number} plugins.tooltip.padding.left - Left padding for the tooltip.
 * @property {number} plugins.tooltip.padding.right - Right padding for the tooltip.
 * @property {number} plugins.tooltip.cornerRadius - Corner radius of the tooltip.
 * @property {string} plugins.tooltip.titleAlign - Alignment of the tooltip title.
 * @property {object} plugins.tooltip.callbacks - Callback functions for the tooltip.
 * @property {function} plugins.tooltip.callbacks.title - Callback function for the tooltip title.
 * @property {number} plugins.tooltip.callbacks.titleSpacing - Spacing for the tooltip title.
 * @property {function} plugins.tooltip.callbacks.label - Callback function for the tooltip label.
 * @property {object} scales - Scale configuration options.
 * @property {object} scales.x - Configuration options for the x-axis.
 * @property {object} scales.x.ticks - Tick configuration options for the x-axis.
 * @property {string} scales.x.ticks.color - Color of the x-axis ticks.
 * @property {object} scales.x.grid - Grid configuration options for the x-axis.
 * @property {string} scales.x.grid.color - Color of the x-axis grid lines.
 * @property {object} scales.y - Configuration options for the y-axis.
 * @property {object} scales.y.ticks - Tick configuration options for the y-axis.
 * @property {string} scales.y.ticks.color - Color of the y-axis ticks.
 * @property {object} scales.y.grid - Grid configuration options for the y-axis.
 * @property {string} scales.y.grid.color - Color of the y-axis grid lines.
 */
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