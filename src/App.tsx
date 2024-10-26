import { PLATFORM_DATA } from "./services/Platform.service";
import PieChartComponent from "./shared/charts/PieChart/PieChart";
import Card from "./shared/components/Card";
import "./App.sass";
import Header from "./shared/components/Header";
import { ENGAGEMENT_DATA } from "./services/engagement.service";
import { REACH_DATA } from "./services/reach.service";
import StackedBarChart from "./shared/charts/StackedBarChart/StackedBarChart";
import { Engagement } from "./models/engagement.interface";
import { Reach } from "./models/reach.interface";
import { Platform } from "./models/platform.interface";
import { POST_DATA } from "./services/post.service";
import LineChart from "./shared/charts/LineChart/LineChart";

function App() {
  return (
    <div className="grid grid--3 gap--32">
      <Card>
        <Header
          title="Platforms - Share of voices"
          fromDate={PLATFORM_DATA.startDate}
          toDate={PLATFORM_DATA.endDate}
        />
        <PieChartComponent
          pieChartData={PLATFORM_DATA.data as Platform[]}
          type="platform"
        />
      </Card>
      <Card>
        <Header
          title="Platforms - Estimated Reach"
          fromDate={REACH_DATA.startDate}
          toDate={REACH_DATA.endDate}
        />
        <PieChartComponent
          pieChartData={REACH_DATA.data as Reach[]}
          type="reach"
        />
      </Card>
      <Card classList="grid-span--2">
        <Header
          title="Platforms - Engagement"
          fromDate={ENGAGEMENT_DATA.startDate}
          toDate={ENGAGEMENT_DATA.endDate}
        />
        <PieChartComponent
          pieChartData={ENGAGEMENT_DATA.data as Engagement[]}
          type="engagement"
        />
      </Card>
      <Card classList="grid-span--3">
        <Header
          title="Euro 24 sponsors - Posts over time"
          fromDate={POST_DATA.startDate}
          toDate={POST_DATA.endDate}
        />
        <StackedBarChart StackChartData={POST_DATA.data} />
      </Card>
      <Card classList="grid-span--3">
        <Header
          title="Key Topics - Ranking"
          fromDate={POST_DATA.startDate}
          toDate={POST_DATA.endDate}
        />
        <LineChart lineChartData={POST_DATA.data} />
      </Card>
    </div>
  );
}

export default App;
