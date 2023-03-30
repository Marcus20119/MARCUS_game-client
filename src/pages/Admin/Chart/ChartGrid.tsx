import { ResponsiveLine } from '@nivo/line';

export type IChartGrid = {
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
};

const ChartGrid: React.FC<IChartGrid> = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 60, bottom: 80, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      // orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: '',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      // orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Play count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    colors={{ scheme: 'category10' }}
    lineWidth={2}
    pointSize={5}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor', modifiers: [] }}
    pointLabelYOffset={-1}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 70,
        itemsSpacing: 50,
        itemDirection: 'left-to-right',
        itemWidth: 85,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 20,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
      },
    ]}
  />
);

export default ChartGrid;
