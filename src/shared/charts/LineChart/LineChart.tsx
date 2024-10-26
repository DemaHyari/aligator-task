import { Chart } from "primereact/chart";
import { Post } from "../../../models/post.interface";
import { chartOptions } from "./helper/helper";
import { LineChartDataHandler } from "./helper/LineChartDataHandler.helper";

interface Props {
  lineChartData: Post[];
}

const LineChart = (props: Props) => {
  const { lineChartData } = props;
  const { labels, datasets } = LineChartDataHandler(lineChartData);
  const chartData = {
    labels: labels,
    datasets: datasets,
  };
  return <Chart type="line" data={chartData} options={chartOptions} />;
};

export default LineChart;
