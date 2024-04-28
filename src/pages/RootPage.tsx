import { Outlet, useNavigate } from 'react-router-dom';
import { IconLocation } from '../components/icons/IconLocation';
import IconSearch from '../components/icons/IconSearch';
import { useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../atoms/selectedGeoAtom';

export default function RootPage() {
    const navigate = useNavigate();
    const selectGeo = useAtomValue(selectedGeoAtom);

    const onInputClick = useCallback(() => {
        navigate('/search');
    }, [navigate]);

    const onLocationClick = () => {
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-blue-100">
            <nav className='bg-white'>
                <label className='input input-bordered mx-auto flex justify-between w-1/3 min-w-[300px] items-center gap-2 border-none bg-white px-0'>
                    <IconLocation
                        className='cursor-pointer fill-black'
                        onClick={onLocationClick}
                    />
                    <input 
                        disabled
                        value={selectGeo?.name}
                        type="text"
                        className="grow text-black" 
                        placeholder="Search" 
                    />
                    <IconSearch
                        className='cursor-pointer fill-black'
                        onClick={onInputClick}
                    />
                </label>
            </nav>
            <div className='mt-5'>
                <Outlet />
            </div>
        </div>
    );
}