import useSWR from "swr";
import { getData } from "../services/fetcher";
import { formatTimestamp } from "../utils/date";

interface ForeCastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: IForecastItem[],
    city: City,
}

export interface IForecastItem {
    dt: number,
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number,
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    },
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    } [],
    clouds: {
        all: number;
    },
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    },
    visibility: number;
    pop: number;
    rain?: {
        '1h': number;
    },
    sys: {
        pod: string;
    },
    dt_txt: string;
}

interface City {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    },
    country: string;
    population: number;
    timezone: number;
    sunsire: number;
    sunset: number;
}

export default function useForeCast(lat: number, lon: number){
    const {data, isLoading, error} = useSWR<
        ForeCastResponse,
        Error,
        string
    >(`api/data/2.5/forecast?lat=${lat}&lon=${lon}`, getData);

    const result: Record<string, IForecastItem[]> = {};
    if (!isLoading && data) {
        data.list.forEach((item) => {
          const date = formatTimestamp(item.dt * 1000, true);
          if (!result[date]) {
            result[date] = [];
          }
          result[date].push(item);
        });
    }

    return {
        data: result,
        isLoading,
        error,
    }
}