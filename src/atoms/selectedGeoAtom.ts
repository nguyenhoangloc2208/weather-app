import { atom } from "jotai";
import { GeoCodingResponse } from "../hooks/useGeoCoding";

export const selectedGeoAtom = atom<GeoCodingResponse>({
    name: 'Ho Chi Minh City',
    lat: 10.75,
    lon: 106.6667,
    country: 'VN',
});