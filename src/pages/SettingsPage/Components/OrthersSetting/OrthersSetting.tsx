import { ChangeEvent, useState } from "react";
import Paper from "../../../../components/Paper/Paper";
import { useTranslation } from "react-i18next";
import { useDarkSide } from "../../../../hooks/useDarkSide";

export default function OrthersSetting() {
    const [colorTheme, mutateTheme, loading] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === 'light' ? true : false);
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const toggleDarkMode = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const newTheme = checked ? 'dark' : 'light';
        mutateTheme(newTheme);
        setDarkSide(checked);
    };

    const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        localStorage.setItem('lang', newLang);
        i18n.changeLanguage(newLang);
    };

    if(loading) return <div className='loading loading-spinner loading-sm mt-3 mx-auto block'></div>

    return(
        <Paper className="mt-5 px-0">
            <div className="px-4 mb-2">
                <span className="font-thin text-black dark:text-dlight">{t("orthers_setting")}</span>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <span className="text-black dark:text-dlight">{t("dark_mode")}</span>
                    <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={darkSide}
                    onChange={toggleDarkMode} 
                    />
                </div>
            </div>
            <div className="flex justify-between items-center px-4">
                <span className="font-normal text-black dark:text-dlight">{t("language")}</span>
                <select 
                    value={i18n.language} 
                    className="select text-black bg-white w-1/3 rounded-sm px-2 border-none focus:outline-none text-wrap dark:bg-dblack dark:text-dlight"
                    onChange={handleLanguageChange}
                    >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="ja">にほんご</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh">中文</option>
                </select>
            </div>
        </Paper>
    )
}