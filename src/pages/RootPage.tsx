import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { IconLocation } from '../components/icons/IconLocation';
import IconSearch from '../components/icons/IconSearch';
import { useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { selectedGeoAtom } from '../atoms/selectedGeoAtom';
import { IconHome } from '../components/icons/IconHome';
import { IconCog } from '../components/icons/IconCog';
import { IconSun } from '../components/icons/IconSun';
import { IconMoon } from '../components/icons/IconMoon';
import { useDarkSide } from '../hooks/useDarkSide';

export default function RootPage() {
    const navigate = useNavigate();
    const selectGeo = useAtomValue(selectedGeoAtom);
    const location = useLocation();
    const [theme, mutateTheme, loading] = useDarkSide();

    const onInputClick = useCallback(() => {
        navigate('/search');
    }, [navigate]);

    const onHomeClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    const onSettingClick = useCallback(() => {
        navigate('/settings');
    }, [navigate])

    if(loading) return <div className='loading loading-spinner loading-sm mt-3 mx-auto block'></div>

    return (
        <div className="min-h-screen bg-sky dark:bg-night bg-cover">
            <nav className='pt-3'>
                <label className=' input input-bordered mx-auto flex justify-between w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 min-w-[300px] items-center gap-2 border-none bg-white dark:bg-dblack px-3'>
                    {location.pathname === '/' ? 
                        <IconLocation
                            className='cursor-auto fill-black dark:fill-dgray'
                        />
                        :
                        <IconHome
                            className='cursor-pointer fill-black dark:fill-dgray'
                            onClick={onHomeClick}
                        />
                    }
                    <input 
                    disabled
                    value={selectGeo?.name}
                    type="text"
                    className="grow text-black dark:text-dlight"
                    placeholder="Search" 
                    />
                    <div className="flex justify-between">
                        {location.pathname !== '/search' && 
                            <IconSearch
                            className='cursor-pointer fill-black mx-2 dark:fill-dgray'
                            onClick={onInputClick}
                            />
                        }
                        {theme === 'dark' ? 
                            <IconSun 
                            className='cursor-pointer fill-black mx-2 dark:fill-dgray'
                            onClick={() => mutateTheme('dark')}
                            />
                            :
                            <IconMoon
                            className='cursor-pointer fill-black mx-2 dark:fill-dgray'
                            onClick={() => mutateTheme('light')}
                            />
                        }
                        <IconCog
                        className='cursor-pointer fill-black mx-2 dark:fill-dgray'
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