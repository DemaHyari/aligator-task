/**
 * Configuration options for the PieChart component.
 * 
 * @constant
 * @type {Object}
 * @property {string} cutout - The percentage of the chart that is cut out from the center.
 * @property {number} border - The border width of the chart.
 * @property {Object} layout - Layout configuration for the chart.
 * @property {number} layout.padding - Padding around the chart.
 * @property {string} layout.borderColor - Border color of the chart.
 * @property {Object} plugins - Plugin configurations for the chart.
 * @property {boolean} plugins.responsive - Determines if the chart is responsive.
 * @property {Object} plugins.legend - Configuration for the chart legend.
 * @property {string} plugins.legend.position - Position of the legend.
 * @property {Object} plugins.legend.labels - Label configurations for the legend.
 * @property {boolean} plugins.legend.labels.usePointStyle - Determines if point style is used for legend labels.
 * @property {string} plugins.legend.labels.color - Color of the legend labels.
 * @property {Object} plugins.tooltip - Configuration for the chart tooltip.
 * @property {string} plugins.tooltip.backgroundColor - Background color of the tooltip.
 * @property {Object} plugins.tooltip.padding - Padding inside the tooltip.
 * @property {number} plugins.tooltip.padding.top - Top padding inside the tooltip.
 * @property {number} plugins.tooltip.padding.bottom - Bottom padding inside the tooltip.
 * @property {number} plugins.tooltip.padding.left - Left padding inside the tooltip.
 * @property {number} plugins.tooltip.padding.right - Right padding inside the tooltip.
 * @property {number} plugins.tooltip.cornerRadius - Corner radius of the tooltip.
 * @property {string} plugins.tooltip.titleAlign - Alignment of the tooltip title.
 * @property {Object} plugins.tooltip.callbacks - Callback functions for the tooltip.
 * @property {Function} plugins.tooltip.callbacks.title - Callback function to format the tooltip title.
 * @property {number} plugins.tooltip.callbacks.titleSpacing - Spacing between title lines in the tooltip.
 * @property {Function} plugins.tooltip.callbacks.label - Callback function to format the tooltip label.
 */
export const chartOptions = {
  cutout: "70%",
  border: 0,
  layout: {
    padding: 16,
    borderColor: "#fff",
  },
  plugins: {
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        color: "#4C4C4C",
      },
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
};