import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IconLocation } from '../components/icons/IconLocation';
import IconSearch from '../components/icons/IconSearch';
import { useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../atoms/selectedGeoAtom';
import { IconHome } from '../components/icons/IconHome';
import { IconCog } from '../components/icons/IconCog';

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

    const onSettingClick = useCallback(() => {
        navigate('/settings');
    }, [navigate])

    return (
        <div className="min-h-screen bg-sky">
            <nav className='pt-3'>
                <label className=' input input-bordered mx-auto flex justify-between w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] items-center gap-2 border-none bg-white px-3'>
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
                    <div className="flex justify-between">
                        {location.pathname !== '/search' && 
                            <IconSearch
                            className='cursor-pointer fill-black mx-3'
                            onClick={onInputClick}
                            />
                        }
                        <IconCog
                        className='cursor-pointer fill-black'
                        onClick={onSettingClick}
                        />
                    </div>
                </label>
            </nav>
            <div className='mt-5'>
                <Outlet />
            </div>
        </div>
    );
}