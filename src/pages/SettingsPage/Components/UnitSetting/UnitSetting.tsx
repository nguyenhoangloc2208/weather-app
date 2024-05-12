import { useState } from "react";
import Paper from "../../../../components/Paper/Paper";
import { useTranslation } from "react-i18next";

interface Units {
    temperature: string;
    windSpeed: string;
    atmosphericPressure: string;
}

export default function UnitSetting() {
    const [units, setUnits] = useState<Units>({
        temperature: "C",
        windSpeed: "kmh",
        atmosphericPressure: "hpa"
    });
    const { t } = useTranslation();

    return(
        <Paper>
            <span className="font-thin text-black dark:text-dlight">{t("unit")}</span>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black dark:text-dlight">{t("temperature_unit")}</span>
                <select 
                className="select text-black bg-white w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap dark:bg-dblack dark:text-dlight"
                value={units.temperature}
                onChange={(e) => setUnits({ ...units, temperature: e.target.value })}
                >
                    <option value="C">&#8451;</option>
                    <option value="F">&#8457;</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black dark:text-dlight">{t("wind_speed_unit")}</span>
                <select 
                className="select text-black bg-white w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap dark:bg-dblack dark:text-dlight"
                value={units.windSpeed}
                onChange={(e) => setUnits({ ...units, windSpeed: e.target.value })}
                >
                    <option value="kmh">{t("kmh")}</option>
                    <option value="ms">{t("ms")}</option>
                    <option value="mph">{t("mph")}</option>
                    <option value="kt">{t("kt")}</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black dark:text-dlight">{t("atmospheric_pressure_unit")}</span>
                <select 
                className="select text-black bg-white w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap dark:bg-dblack dark:text-dlight"
                value={units.atmosphericPressure}
                onChange={(e) => setUnits({ ...units, atmosphericPressure: e.target.value })}
                >
                    <option value="hpa">{t("hpa")}</option>
                    <option value="mbar">{t("mbar")}</option>
                    <option value="mmhg">{t("mmhg")}</option>
                    <option value="inhg">{t("inhg")}</option>
                    <option value="atm">{t("atm")}</option>
                </select>
            </div>
        </Paper>
    )
}