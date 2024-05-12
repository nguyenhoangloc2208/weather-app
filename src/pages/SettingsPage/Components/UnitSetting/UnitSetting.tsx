import { useState } from "react";
import Paper from "../../../../components/Paper/Paper";

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

    return(
        <Paper>
            <span className="font-thin text-black">Unit</span>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black">Temperature Unit</span>
                <select 
                className="select w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap"
                value={units.temperature}
                onChange={(e) => setUnits({ ...units, temperature: e.target.value })}
                >
                    <option value="C">&#8451;</option>
                    <option value="F">&#8457;</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black">Wind speed Unit</span>
                <select 
                className="select w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap"
                value={units.windSpeed}
                onChange={(e) => setUnits({ ...units, windSpeed: e.target.value })}
                >
                    <option value="kmh">Kilometers per hour (km/h)</option>
                    <option value="ms">Meters per second (m/s)</option>
                    <option value="mph">Miles per hour (mph)</option>
                    <option value="ky">Knots (kt)</option>
                </select>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-normal text-black">Atmospheric pressure Unit</span>
                <select 
                className="select w-1/3 rounded-sm p-2 border-none focus:outline-none min-h-16 text-wrap"
                value={units.atmosphericPressure}
                onChange={(e) => setUnits({ ...units, atmosphericPressure: e.target.value })}
                >
                    <option value="hpa">Hectopascal (hpa)</option>
                    <option value="mbar">Miliibar (mbar)</option>
                    <option value="mmhg">Millimeters of Mercury (mmHg)</option>
                    <option value="inhg">Inches of Mercury (inHg)</option>
                    <option value="atm">standard atmosphere (atm)</option>
                </select>
            </div>
        </Paper>
    )
}