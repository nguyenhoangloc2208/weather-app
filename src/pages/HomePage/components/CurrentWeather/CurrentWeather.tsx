import Paper from '../../../../components/Paper/Paper';
import { IconArrowRight } from '../../../../components/icons/ArrowRight';
import OpenWeatherIcon from '../../../../components/OpenWeatherIcon';
import useCurrentWeather from '../../../../hooks/useCurrentWeather';
import { capitalizeWords } from '../../../../utils/string';
import { useAtom, useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../../../../atoms/selectedGeoAtom';
import { formatTimestamp } from '../../../../utils/date';
import { useTranslation } from 'react-i18next';
import { atmosphericPressureConverter, temperatureConverter, windSpeedConverter } from '../../../../utils/unit';
import { unitSettingAtom } from '../../../../atoms/unitSettingAtom';

export default function CurrentWeather() {
    const selectedGeo = useAtomValue(selectedGeoAtom);
    const { data, isLoading, error } = useCurrentWeather(
        selectedGeo.lat,
        selectedGeo.lon,
    );
    const { t } = useTranslation();
    const [units, ] = useAtom(unitSettingAtom);

    if (isLoading) {
        return (
        <Paper>
            <span className="loading loading-spinner loading-lg mx-auto block"></span>
        </Paper>
        );
    }

    if (error) {
        return (
        <Paper>
            <span className="text-red-500">{t("failed")}</span>
        </Paper>
        );
    }

    console.log(units);
    

    const currentTimestamp = Date.now();
    const formattedTimestamp = formatTimestamp(currentTimestamp, false);

    return (
        <Paper>
            <span className="flex justify-between font-light text-black dark:text-dlight">
                {formattedTimestamp}
                <div>
                    <span>{t("atmospheric_pressure")}</span>
                    <span>&nbsp;{atmosphericPressureConverter(data.main.pressure, units.atmosphericPressure)} {units.atmosphericPressure}</span>
                </div>
            </span>
            <div className="flex flex-wrap items-center justify-around">
                <OpenWeatherIcon
                icon={data.weather[0].icon}
                width={150}
                height={150}
                className="shrink-0"
                />
                <div className="flex shrink-0 flex-col items-center">
                <span className="text-5xl text-black dark:text-dlight">{temperatureConverter(data.main.temp, units.temperature).toFixed(2)}&#176;{units.temperature}</span>
                <span className="text-black dark:text-dlight">
                    {capitalizeWords(t(data.weather[0].description))}
                </span>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-col justify-around items-center">
                    <span className='dark:text-dlight'>{t("humidity")}</span>
                    <span className="font-medium text-black dark:text-dlight">{data.main.humidity}%</span>
                </div>
                <div className="flex flex-col justify-around items-center ">
                    <span className='dark:text-dlight'>{t("winds")}</span>
                    <div className="flex items-center">
                        <IconArrowRight
                        className={'fill-black dark:fill-dgray'}
                        transform={`rotate(${data.wind.deg})`}
                        />
                        <span className="font-medium text-black dark:text-dlight">
                        {windSpeedConverter(data.wind.speed, units.windSpeed).toFixed(2)} {units.windSpeed}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-around items-center">
                    <span className='dark:text-dlight'>{t("visibility")}</span>
                    <span className="font-medium text-black dark:text-dlight">
                        {Math.trunc(data.visibility / 1000)} km
                    </span>
                </div>
            </div>
        </Paper>
    );
}