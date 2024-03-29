import { ResponsivePie } from '@nivo/pie';
// import { HEX, RGB, RGBA } from '~/types';

export type IChartPipe = {
  data: {
    label: string;
    value: number;
  }[];
};

const ChartPipe: React.FC<IChartPipe> = ({ data }) => {
  const neededFill = data.map((item, index) => {
    return {
      match: {
        id: item.label,
      },
      id: index % 2 === 0 ? 'lines' : 'dots',
    };
  });
  // const colors: (RGB | RGBA | HEX)[] = [
  //   '#26d9bb',
  //   '#6bd926',
  //   '#d92641',
  //   '#26d94d',
  //   '#2688d9',
  // ];

  const neededData = data.map((item, index) => {
    return {
      ...item,
      id: item.label,
      // color: colors[index],
    };
  });

  return (
    <ResponsivePie
      data={neededData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      startAngle={-180}
      sortByValue={false}
      innerRadius={0.5}
      padAngle={1}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#afbfbf"
      arcLinkLabelsTextOffset={10}
      arcLinkLabelsThickness={2}
      arcLinkLabelsStraightLength={30}
      arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={neededFill}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 80,
          itemsSpacing: 28,
          itemWidth: 76,
          itemHeight: 40,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 20,
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

export default ChartPipe;
