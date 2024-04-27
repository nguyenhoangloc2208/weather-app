import { If, Else, Then } from 'react-if';
import Paper from '../../../../components/Paper/Paper';
import useForeCast from '../../../../hooks/useForeCast';
import Forecast from './Forecast';

export default function ForecastList() {
  const {data, isLoading, error} = useForeCast(10.87138, 106.6556);

  const days = Object.keys(data);
  const forecasts = Object.values(data);

  return (
    <div className="mt-5 flex w-full flex-col">
      <span className='font-medium text-black'>5-day Forecast (3 Hours)</span>
      <Paper className="mt-3 h-[450px] overflow-auto p-0">
        <If condition={isLoading}>
          <Then>
            <span className='loading loading-spinner loading-lg mx-auto block'></span>
          </Then>
          <Else>
            <If condition={!!error}>
              <Then>
                <span className='text-red-500'>Failed to fetch data</span>
              </Then>
              <Else>
                {days.map((day, index) => {
                  return(
                    <Forecast key={day} day={day} items={forecasts[index]}/>
                  )
                })}
              </Else>
            </If>
          </Else>
        </If>
      </Paper>
    </div>  
  );
}