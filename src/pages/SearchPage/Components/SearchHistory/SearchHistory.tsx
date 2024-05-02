import { useAtom, useSetAtom } from "jotai";
import Paper from "../../../../components/Paper/Paper";
import { geoHistoryAtom } from "../../../../atoms/geoHistoryAtom";
import IconTrash from "../../../../components/icons/IconTrash";
import IconSearch from "../../../../components/icons/IconSearch";
import { useCallback } from "react";
import { GeoCodingResponse } from "../../../../hooks/useGeoCoding";
import { selectedGeoAtom } from "../../../../atoms/selectedGeoAtom";
import { useNavigate } from "react-router-dom";


export default function SearchHistory() {
    const [history, setHistory] = useAtom(geoHistoryAtom);
    const setSelectedGeo = useSetAtom(selectedGeoAtom);
    const navigate = useNavigate();

    const onSelectGeo = useCallback(
        (item: GeoCodingResponse) => {
            setSelectedGeo(item);
            navigate(`/`);
        },
        [setSelectedGeo, navigate]
    );

    const onDeleteGeo = useCallback(
        (item: GeoCodingResponse) => {
            setHistory((prev) => prev.filter((i) => i.name !== item.name))
        },
        [setHistory]
    );

    return(
        <div className="flex w-full flex-col mt-5">
            {history.length > 0 &&
                <span className="font-medium text-black"> Search History</span>
            }
            <Paper className="mt-3 max-h-[450px] overflow-auto p-0">
                {/* {history.length === 0 && (
                    <span className="p-2 text-black">No history</span>
                )} */}
                {history.length > 0 && history.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            role="listitem"
                            className="transition duration-300 flex cursor-pointer items-center justify-between p-2 hover:bg-gray-100">
                            <span>{item.name}</span>
                            <div className="flex gap-3">
                                <IconSearch
                                    className="fill-black"
                                    width={20}
                                    height={20}
                                    onClick={() => onSelectGeo(item)}
                                />
                                <IconTrash
                                    className="fill-black"
                                    width={20}
                                    height={20}
                                    onClick={() => onDeleteGeo(item)}
                                />
                            </div>
                        </div>
                    )
                })}
            </Paper>
        </div>
    );
}