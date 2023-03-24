import ChartPipe from './ChartPipe';

import './Chart.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/rootReducer';
import { actionGetChartData } from '~/store/admin/admin.action';
import { Heading } from '~/components/Heading';
import ChartGrid from './ChartGrid';

const Chart = () => {
  const dispatch = useDispatch();
  const {
    chartPipeData,
    chartGridData,
    loadingGetChartData,
    forceRerenderUsersData,
  } = useSelector((state: IRootState) => state.admin);
  useEffect(() => {
    dispatch(actionGetChartData('Pipe'));
    dispatch(actionGetChartData('Grid-Day'));
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
              text="PLAY COUNT PER DAY"
              className="text-white font-bold text-2xl"
            />
            <div className="chart-grid w-full h-[400px]">
              <ChartGrid data={chartGridData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chart;
