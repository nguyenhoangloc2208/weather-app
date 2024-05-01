import { GeoCodingResponse } from "../hooks/useGeoCoding";
import { storage } from "../utils/storage";
import { atomWithStorage } from "jotai/utils";

export const selectedGeoAtom = atomWithStorage<GeoCodingResponse>(
    'selectedGeo',
    {
        name: 'Ho Chi Minh City',
        lat: 10.75,
        lon: 106.6667,
        country: 'VN',
    },
    storage,
);