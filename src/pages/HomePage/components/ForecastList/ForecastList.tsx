import { useAtomValue } from 'jotai';
import Paper from '../../../../components/Paper/Paper';
import useForeCast from '../../../../hooks/useForeCast';
import Forecast from './Forecast';
import { selectedGeoAtom } from '../../../../atoms/selectedGeoAtom';

export default function ForecastList() {
  const selectedGeo = useAtomValue(selectedGeoAtom);
  const { data, isLoading, error } = useForeCast(
    selectedGeo.lat,
    selectedGeo.lon,
  );

  const days = Object.keys(data);
  const forecasts = Object.values(data);

  return (
    <div className="mt-5 flex w-full flex-col">
      <span className='font-medium text-black dark:text-dlight'>5-day Forecast (3 Hours)</span>
      <Paper className="mt-3 h-[450px] overflow-auto p-0">
        {isLoading && (
          <span className='loading loading-spinner loading-lg mx-auto block'></span>
        )}
        {Boolean(error) && (
          <span className='text-red-500'>Failed to fetch data</span>
        )}
        {days && days.length > 0 && (
          days.map((day, index) => {
            return(
              <Forecast key={day} day={day} items={forecasts[index]}/>
            )
          })
        )}
      </Paper>
    </div>  
  );
}