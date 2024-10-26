import { Platform } from "../../../models/platform.interface";
import { Chart } from "primereact/chart";
import { Engagement } from "../../../models/engagement.interface";
import { Reach } from "../../../models/reach.interface";
import { PieChartDataHandler } from "./helper/pieChartDataHandler.helper";
import { chartOptions } from "./helper/helper";

interface Props {
  pieChartData: Platform[] | Engagement[] | Reach[];
  type: string;
}

const PieChartComponent = (props: Props) => {
  const { pieChartData, type } = props;
  const { labels, values, backgroundColor } = PieChartDataHandler(
    pieChartData,
    type
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <Chart
      type="doughnut"
      data={chartData}
      options={chartOptions}
      className="w-full md:w-30rem"
    />
  );
};

export default PieChartComponent;
