import { dateFormater } from "../../../../helper/dateFormater.helper";
import { Post } from "../../../../models/post.interface";

/**
 * Processes chart data to generate datasets for a line chart.
 *
 * @param {Post[]} chartData - An array of post objects containing source, date, and numMentions.
 * @returns {Object} An object containing:
 * - `labels`: An array of unique formatted dates.
 * - `datasets`: An array of dataset objects for each source.
 *
 * The dataset objects contain:
 * - `label`: The source of the data.
 * - `data`: An array of mention counts corresponding to the unique dates.
 * - `fill`: A boolean indicating whether the area under the line should be filled (always false).
 * - `tension`: A number representing the tension of the line (always 0.4).
 */
export const LineChartDataHandler = (chartData: Post[]) => {
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
    label: source,
    data,
    fill: false,
    tension: 0.4
  }));

  return {
    labels: uniqueDates.map((date) => dateFormater(date, "MMM dd, yyyy")),
    datasets,
  };
}