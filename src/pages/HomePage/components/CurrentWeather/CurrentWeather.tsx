import Paper from '../../../../components/Paper/Paper';
import { IconArrowRight } from '../../../../components/icons/ArrowRight';
import OpenWeatherIcon from '../../../../components/OpenWeatherIcon';
import useCurrentWeather from '../../../../hooks/useCurrentWeather';
import { capitalizeWords } from '../../../../utils/string';
import { useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../../../../atoms/selectedGeoAtom';
import { formatTimestamp } from '../../../../utils/date';
import { useTranslation } from 'react-i18next';

export default function CurrentWeather() {
    const selectedGeo = useAtomValue(selectedGeoAtom);
    const { data, isLoading, error } = useCurrentWeather(
        selectedGeo.lat,
        selectedGeo.lon,
    );
    const { t } = useTranslation();

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

    const currentTimestamp = Date.now();
    const formattedTimestamp = formatTimestamp(currentTimestamp, false);

    return (
        <Paper>
            <span className="font-light text-black dark:text-dlight">
                {formattedTimestamp}
            </span>
            <div className="flex flex-wrap items-center justify-around">
                <OpenWeatherIcon
                icon={data.weather[0].icon}
                width={150}
                height={150}
                className="shrink-0"
                />
                <div className="flex shrink-0 flex-col items-center">
                <span className="text-5xl text-black dark:text-dlight">{data.main.temp.toFixed()}&#176;C</span>
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
                        {data.wind.speed} m/s
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