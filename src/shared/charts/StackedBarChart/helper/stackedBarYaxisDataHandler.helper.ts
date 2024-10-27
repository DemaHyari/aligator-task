import { extractUniqueValuesHandler } from "../../../../helper/uniqueValueExtracter.helper";
import { Ranking } from "../../../../models/ranking.interface";

type GroupedData = { [source: string]: number[] };

/**
 * Processes chart data to generate a structure suitable for a stacked bar chart.
 *
 * @param   {Ranking[]}   chartData - An array of ranking objects containing source, keyword, and numMentions.
 * @returns {Object}      An object containing labels and datasets for the stacked bar chart.
 * @returns {string[]}    return.labels - An array of unique keywords.
 * @returns {Object[]}    return.datasets - An array of dataset objects for the chart.
 * @returns {string}      return.datasets[].type - The type of chart, in this case, "bar".
 * @returns {string}      return.datasets[].label - The source label for the dataset.
 * @returns {number[]}    return.datasets[].data - An array of mention counts for each keyword.
 */
export const StackedBarYAxisDataHandler = (chartData: Ranking[]) => { 
  // Extract unique keywords from the chart data
  const uniqueKeywords = extractUniqueValuesHandler(chartData, 'keyword') as string[];

  // Group the data by source and keyword, filling in missing values with zeros
  const groupedData = chartData.reduce<GroupedData>((acc, { source, keyword, numMentions }) => {
    acc[source] = acc[source] || Array(uniqueKeywords.length).fill(0);
    const keywordIndex = uniqueKeywords.indexOf(keyword);
    acc[source][keywordIndex] = numMentions;
    return acc;
  }, {});

  // Create datasets for the chart based on the grouped data
  const datasets = Object.entries(groupedData).map(([source, data]) => ({
    type: 'bar',
    label: source,
    data,
  }));

  return { labels: uniqueKeywords, datasets };
};
