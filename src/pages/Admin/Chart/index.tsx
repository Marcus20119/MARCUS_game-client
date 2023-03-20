import ChartPipe, { IChartPipe } from './ChartPipe';

import './Chart.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/rootReducer';
import { actionGetChartData } from '~/store/admin/admin.action';
import { Heading } from '~/components/Heading';
import ChartGrid from './ChartGrid';

const data = [
  {
    id: 'Wordle',
    data: [
      {
        x: '2000',
        y: 10,
      },
      {
        x: '2001',
        y: 10,
      },
      {
        x: '2002',
        y: 11,
      },
      {
        x: '2003',
        y: 6,
      },
      {
        x: '2004',
        y: 10,
      },
    ],
  },
  {
    id: 'Tic Tac Toe',
    data: [
      {
        x: '2000',
        y: 3,
      },
      {
        x: '2001',
        y: 6,
      },
      {
        x: '2002',
        y: 8,
      },
      {
        x: '2003',
        y: 10,
      },
      {
        x: '2004',
        y: 3,
      },
    ],
  },
];
const Chart = () => {
  const dispatch = useDispatch();
  const { chartPipeData, loadingGetChartData, forceRerenderUsersData } =
    useSelector((state: IRootState) => state.admin);
  useEffect(() => {
    dispatch(actionGetChartData('Pipe'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceRerenderUsersData]);
  return (
    <>
      {!loadingGetChartData && (
        <div className="grid grid-cols-2 w-full my-10">
          <div className="flex flex-col items-center w-full">
            <Heading
              as="h3"
              text="THE NUMBER OF PLAYERS PER GAME"
              className="text-white font-bold text-2xl"
            />
            <div className="chart-pipe w-full h-[400px]">
              <ChartPipe data={chartPipeData} />
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <Heading
              as="h3"
              text="THE NUMBER OF PLAYERS PER GAME"
              className="text-white font-bold text-2xl"
            />
            <div className="chart-grid w-full h-[400px]">
              <ChartGrid data={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
