import dayjs from "dayjs";
import OpenWeatherIcon from "../../../../components/OpenWeatherIcon";
import { IForecastItem } from "../../../../hooks/useForeCast";
import { capitalizeWords } from "../../../../utils/string";
import { useTranslation } from "react-i18next";

type Prop = {
  item: IForecastItem;
};

export default function ForecastItem({ item }: Prop) {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between gap-6 lg:text-base text-sm">
      <span className="font-medium text-black dark:text-dlight">
        {dayjs.unix((item.dt)).format('hh:mm A')}
      </span>
      <div className="flex grow items-center">
        <OpenWeatherIcon
          icon={item.weather[0].icon}
          width={50}
          height={50}
          className="shrink-0"
        />
        <span className="text-sm dark:text-dlight">
          {Math.floor(item.main.temp_min)}/{Math.ceil(item.main.temp_max)}&#176;C
        </span>
      </div>
      <span className="font-medium text-black dark:text-dlight">
        {capitalizeWords(t(item.weather[0].description))}
      </span>
    </div>
  );
}