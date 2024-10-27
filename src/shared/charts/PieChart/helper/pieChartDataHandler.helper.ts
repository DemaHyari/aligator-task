import { Engagement } from "../../../../models/engagement.interface";
import { Platform } from "../../../../models/platform.interface";
import { Reach } from "../../../../models/reach.interface";

/**
 * Handles the data transformation for a Pie Chart based on the provided chart data and type.
 *
 * @param {Platform[] | Engagement[] | Reach[]} chartData - The data to be transformed for the Pie Chart.
 * @param {string} type - The type of data being processed. Can be "platform", "engagement", or "reach".
 * @returns {Object} An object containing the labels, values, and backgroundColor for the Pie Chart.
 * @returns {string[]} return.labels - The labels for the Pie Chart.
 * @returns {number[]} return.values - The values for the Pie Chart.
 * @returns {string[]} return.backgroundColor - The background colors for the Pie Chart.
 */
export const PieChartDataHandler = (
  chartData: Platform[] | Engagement[] | Reach[],
  type: string
) => {
  //Extracts the 'source' property from each object in the chartData array.
  const labels = chartData.map((data) => data.source);

  //Extracts the 'sourceColor' property from each object in the chartData array.
  const backgroundColor = chartData.map((data) => data.sourceColor);

  //Extracts the 'numMentions', 'engagementCount', or 'estimatedReach' property from each object in the chartData array based on the type.
  const values: number[] = [];
  switch (type) {
    case "platform":
      (chartData as Platform[]).map((data: Platform) =>
        values.push(data.numMentions)
      );
      break;

    case "engagement":
      (chartData as Engagement[]).map((data: Engagement) =>
        values.push(data.engagementCount)
      );
      break;
    case "reach":
      (chartData as Reach[]).map((data: Reach) => values.push(data.estimatedReach));
      break;
  }

  return {
    labels,
    values,
    backgroundColor,
  };
};