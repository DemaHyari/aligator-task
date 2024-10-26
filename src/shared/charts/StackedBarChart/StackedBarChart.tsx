import { Chart } from "primereact/chart";
import { Post } from "../../../models/post.interface";
import { chartOptions } from "./helper/helper";
import { StackedBarDataHandler } from "./helper/stackedBarDataHandler.helper";

interface Props {
  StackChartData: Post[];
}

const StackedBarChart = (props: Props) => {
  const { StackChartData } = props;
  const { labels, datasets } = StackedBarDataHandler(StackChartData);
  const chartData = {
    labels: labels,
    datasets: datasets,
  };
  return <Chart type="bar" data={chartData} options={chartOptions} />;
};

export default StackedBarChart;
