import { useNavigate } from "react-router-dom";
import Paper from "../../../../components/Paper/Paper";
import { IconChevronRight } from "../../../../components/icons/ChevronRight";
import { useCallback } from "react";

export default function Info() {
    const navigate = useNavigate();

    const onBeruClick = () => {
        window.open("https://www.facebook.com/nii.228/", "_blank");
    };
    
    const onPrivacyPolicyClick = useCallback(() => {
        navigate('/privacy');
    }, [navigate]);

    return(
        <Paper className="mt-5 px-0">
            <div className="px-4 mb-2">
                <span className="font-thin text-black">About BeruWeather</span>
            </div>
            <div>
                <button 
                className="p-4 hover:bg-gray-100 w-full bg-white border-none flex justify-between items-center"
                onClick={onBeruClick}
                >
                    <span>About Beru</span>
                    <IconChevronRight />
                </button>
                <button 
                className="p-4 hover:bg-gray-100 w-full bg-white border-none flex justify-between items-center"
                onClick={onPrivacyPolicyClick}
                >
                    <span>Privacy policy</span>
                    <IconChevronRight />
                </button>
            </div>
        </Paper>
    )
}