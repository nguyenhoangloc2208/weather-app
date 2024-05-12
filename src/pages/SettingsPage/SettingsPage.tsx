import Info from "./Components/Info/Info";
import OrthersSetting from "./Components/OrthersSetting/OrthersSetting";
import UnitSetting from "./Components/UnitSetting/UnitSetting";

export default function SettingsPage() {
    return(
        <div className="mx-auto w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] flex h-full flex-col items-center">
            <span className="font-medium text-black dark:text-dlight text-left w-full mb-5">Setting</span>
            <UnitSetting />
            <OrthersSetting />
            <Info />
        </div>
    )
}