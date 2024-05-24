import { storage } from "../utils/storage";
import { atomWithStorage } from "jotai/utils";

interface Units {
    temperature: string;
    windSpeed: string;
    atmosphericPressure: string;
}

const defaultSettings: Units = {
    temperature: 'C',
    windSpeed: 'km/h',
    atmosphericPressure: 'hPa',
};

export const unitSettingAtom = atomWithStorage<Units>(
    'unitSetting',
    defaultSettings,
    storage,
);