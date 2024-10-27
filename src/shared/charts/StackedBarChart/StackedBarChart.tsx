import { Chart } from "primereact/chart";
import { Post } from "../../../models/post.interface";
import { chartOptions } from "./helper/helper";
import { StackedBarDataHandler } from "./helper/stackedBarDataHandler.helper";

interface Props {
  StackChartData: Post[];
}

const StackedBarChart = (props: Props) => {
  // Destructures the `StackChartData` properte from the `props` object
  const { StackChartData } = props;

  // Destructures the `labels` and `datasets` properties from the object returned by the `StackedBarDataHandler` function
  const { labels, datasets } = StackedBarDataHandler(StackChartData);

  // Creates a `chartData` object with the `labels` and `datasets` properties
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return <Chart type="bar" data={chartData} options={chartOptions} />;
};

export default StackedBarChart;
