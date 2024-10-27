import { Chart } from "primereact/chart";
import { Post } from "../../../models/post.interface";
import { chartOptions } from "./helper/helper";
import { StackedBarDataHandler } from "./helper/stackedBarDataHandler.helper";
import { StackedBarYAxisDataHandler } from "./helper/stackedBarYaxisDataHandler.helper";
import { Ranking } from "../../../models/ranking.interface";

interface Props {
  StackChartData: Post[] | Ranking[];
  option: string;
}

const StackedBarChart = (props: Props) => {
  // Destructures the `StackChartData` properte from the `props` object
  const { StackChartData, option } = props;

  // Destructures the `labels` and `datasets` properties from the object returned by the `StackedBarDataHandler` function
  const { labels, datasets } =
    option == "y"
      ? StackedBarYAxisDataHandler(StackChartData as Ranking[])
      : StackedBarDataHandler(StackChartData as Post[]);

  // Creates a `chartData` object with the `labels` and `datasets` properties
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <Chart
      type="bar"
      data={chartData}
      options={{ ...chartOptions, indexAxis: option }}
    />
  );
};

export default StackedBarChart;
