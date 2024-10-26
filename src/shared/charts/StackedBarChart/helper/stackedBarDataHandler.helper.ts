import { dateFormater } from "../../../../helper/dateFormater.helper";
import { Post } from "../../../../models/post.interface";

/**
 * Processes chart data to generate a structure suitable for a stacked bar chart.
 *
 * @param   {Post[]}   chartData - An array of post objects containing source, date, and numMentions.
 * @returns {Object}   An object containing labels and datasets for the stacked bar chart.
 * @returns {string[]} return.labels - An array of formatted date strings.
 * @returns {Object[]} return.datasets - An array of dataset objects for the chart.
 * @returns {string}   return.datasets[].type - The type of chart, in this case, "bar".
 * @returns {string}   return.datasets[].label - The source label for the dataset.
 * @returns {number[]} return.datasets[].data - An array of mention counts corresponding to the dates.
 */
export const StackedBarDataHandler = (chartData: Post[]) => {
  const uniqueDates = [...new Set(chartData.map((item) => item.date))];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupedData: any = {};
  chartData.forEach(({ source, date, numMentions }) => {
    if (!groupedData[source])
      groupedData[source] = Array(uniqueDates.length).fill(0);
    const dateIndex = uniqueDates.indexOf(date);
    groupedData[source][dateIndex] = numMentions;
  });


  const datasets = Object.entries(groupedData).map(([source, data]) => ({
    type: "bar",
    label: source,
    data,
  }));

  return {
    labels: uniqueDates.map((date) => dateFormater(date, "MMM dd, yyyy")),
    datasets,
  };
};