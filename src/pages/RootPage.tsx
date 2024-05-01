import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IconLocation } from '../components/icons/IconLocation';
import IconSearch from '../components/icons/IconSearch';
import { useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../atoms/selectedGeoAtom';
import images from '../assets/images/image';
import { IconHome } from '../components/icons/IconHome';

export default function RootPage() {
    const navigate = useNavigate();
    const selectGeo = useAtomValue(selectedGeoAtom);
    const location = useLocation();

    const onInputClick = useCallback(() => {
        navigate('/search');
    }, [navigate]);

    const onHomeClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <div className="min-h-screen" style={{backgroundImage: `url(${images.Background})`}}>
            <nav className='pt-3'>
                <label className='input input-bordered mx-auto flex justify-between w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] items-center gap-2 border-none bg-white px-3'>
                    {location.pathname === '/' ? 
                        <IconLocation
                            className='fill-black'
                        />
                        :
                        <IconHome
                            className='cursor-pointer fill-black'
                            onClick={onHomeClick}
                        />
                    }
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