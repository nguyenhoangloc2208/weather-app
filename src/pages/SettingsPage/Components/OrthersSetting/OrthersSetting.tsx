import { ChangeEvent, useState } from "react";
import Paper from "../../../../components/Paper/Paper";
import useDarkSide from "../../../../hooks/useDarkSide";

export default function OrthersSetting() {
    const [colorTheme, setTheme, loading] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false);

    const toggleDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const newTheme = checked ? 'dark' : 'light';
        setTheme(newTheme);
        setDarkSide(checked);
    };

    if(loading) return <div className='loading loading-spinner loading-sm mt-3 mx-auto block'></div>

    return(
        <Paper className="mt-5 px-0">
            <div className="px-4 mb-2">
                <span className="font-thin text-black dark:text-dlight">Orthers Setting</span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <span className="text-black dark:text-dlight">Dark mode</span>
                    <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={darkSide}
                    onChange={toggleDarkMode} 
                    />
                </div>
            </div>
        </Paper>
    )
}