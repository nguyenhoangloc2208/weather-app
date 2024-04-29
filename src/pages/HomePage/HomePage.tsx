import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ForecastList from './components/ForecastList/ForecastList';

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 flex-col items-center">
      <CurrentWeather />
      <ForecastList />
    </div>
  );
}