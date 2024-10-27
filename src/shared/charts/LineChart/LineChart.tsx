import { Chart } from "primereact/chart";
import { Post } from "../../../models/post.interface";
import { chartOptions } from "./helper/helper";
import { LineChartDataHandler } from "./helper/LineChartDataHandler.helper";

interface Props {
  lineChartData: Post[];
}

const LineChart = (props: Props) => {
  // Destructures the `lineChartData` property from the `props` object
  const { lineChartData } = props;

  // Destructures the `labels` and `datasets` properties from the object returned by the `LineChartDataHandler` function
  const { labels, datasets } = LineChartDataHandler(lineChartData);

  // Creates a `chartData` object with the `labels` and `datasets` properties
  const chartData = {
    labels: labels,
    datasets: datasets,
  };
  return <Chart type="line" data={chartData} options={chartOptions} />;
};

export default LineChart;
