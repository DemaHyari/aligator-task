/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateFormater } from "../../../../helper/dateFormater.helper";
import { extractUniqueValuesHandler } from "../../../../helper/uniqueValueExtracter.helper";
import { Post } from "../../../../models/post.interface";

type GroupedData = { [source: string]: number[] };

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
  // Extracts unique dates from the provided chart data
  const uniqueDates: number[] = extractUniqueValuesHandler(chartData, 'date') as number[];

  // Groups the chart data by source and date
  const groupedData = chartData.reduce<GroupedData>((acc, { source, date, numMentions }) => {
    acc[source] = acc[source] || Array(uniqueDates.length).fill(0);
    const dateIndex = uniqueDates.indexOf(date);
    acc[source][dateIndex] = numMentions;
    return acc;
  }, {});

  const datasets = Object.entries(groupedData).map(([source, data]) => ({
    type: 'bar',
    label: source,
    data,
  }));

  return {
    labels: uniqueDates.map((date) => dateFormater(date, 'MMM dd, yyyy')),
    datasets,
  };

};