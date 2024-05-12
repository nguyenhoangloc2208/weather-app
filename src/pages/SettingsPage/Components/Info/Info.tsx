import { useNavigate } from "react-router-dom";
import Paper from "../../../../components/Paper/Paper";
import { IconChevronRight } from "../../../../components/icons/ChevronRight";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export default function Info() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onBeruClick = () => {
        window.open("https://www.facebook.com/nii.228/", "_blank");
    };
    
    const onPrivacyPolicyClick = useCallback(() => {
        navigate('/privacy');
    }, [navigate]);

    return(
        <Paper className="mt-5 px-0">
            <div className="px-4 mb-2">
                <span className="font-thin text-black dark:text-dlight">{t("about")}</span>
            </div>
            <div>
                <button 
                className="p-4 hover:bg-gray-100 dark:hover:bg-dhoverblack w-full bg-white border-none flex justify-between items-center dark:bg-dblack dark:text-dlight"
                onClick={onBeruClick}
                >
                    <span>{t("beru")}</span>
                    <IconChevronRight />
                </button>
                <button 
                className="p-4 hover:bg-gray-100 dark:hover:bg-dhoverblack w-full bg-white border-none flex justify-between items-center dark:bg-dblack dark:text-dlight"
                onClick={onPrivacyPolicyClick}
                >
                    <span>{t("privacy_policy")}</span>
                    <IconChevronRight />
                </button>
            </div>
        </Paper>
    )
}