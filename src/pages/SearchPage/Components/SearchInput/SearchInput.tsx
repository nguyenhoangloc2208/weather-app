import { Combobox } from '@headlessui/react';
import { useCallback, useRef, useState } from 'react';
import { debounce } from 'lodash';
import useGeoCoding, { GeoCodingResponse } from '../../../../hooks/useGeoCoding';
import { useSetAtom } from 'jotai';
import { selectedGeoAtom } from '../../../../atoms/selectedGeoAtom';
import { useNavigate } from 'react-router-dom';
import { geoHistoryAtom } from '../../../../atoms/geoHistoryAtom';
import { useTranslation } from 'react-i18next';

export default function SearchInput() {
    const [error, setError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<GeoCodingResponse[]>([]);
    const { trigger, isMutating } = useGeoCoding();
    const setSelectedGetAtom = useSetAtom(selectedGeoAtom);
    const setGeoHistory = useSetAtom(geoHistoryAtom);
    const navigate = useNavigate();
    const comboBoxButton = useRef<HTMLButtonElement>(null);
    const { t } = useTranslation();

    const search = useCallback(
      async (value: string) => {
        try {
          const result = await trigger({ q: value, limit: 5 });
          if (result.length > 0) {
            setOptions(result);
          } else {
            setError('Invalid country or city');
          }
        } catch (error) {
          setError('Invalid country or city');
        }
      },
      [trigger],
    );
  
    const onInputChange = useCallback(
      async (value: string) => {
        setInputValue(value);
        setOptions([]);
        setError(null);
        await search(value);
      },
      [search],
    );
  
    const onSelectValue = useCallback(
      (value: string) => {
        const json = JSON.parse(value as string) as GeoCodingResponse;
        setInputValue(json.name);
        setSelectedGetAtom(json);
        setGeoHistory((prev) => {
          const newHistory = prev.filter((item) => item.name !== json.name);
          newHistory.unshift(json);
          return newHistory;
        });
        navigate('/');
      },
      [navigate, setGeoHistory, setSelectedGetAtom],
    );
  
    const onInputFocus = useCallback(async () => {
      if (inputValue.length > 0) {
        await search(inputValue);
      }
  
      comboBoxButton.current?.click();
    }, [inputValue, search]);

    return (
        <div className="mx-auto w-full flex h-full flex-col items-center">
            <Combobox
              value={inputValue}
              onChange={onSelectValue}
            >
                <Combobox.Input
                className="input h-auto w-full bg-white dark:bg-dblack dark:text-dlight p-2"
                placeholder={t("search_input")}
                autoComplete='off'
                onChange={debounce((event) => onInputChange(event.target.value), 500)}
                onFocus={onInputFocus}
                />
                {isMutating && !error && (<span className='loading loading-spinner loading-sm mt-3 mx-auto block'></span>)}
                {!isMutating && error && (<span className="text-red-500">{error}</span>)}
                {!isMutating && !error && options.length > 0 && (
                <Combobox.Options className="mt-1 w-full rounded-md bg-white dark:bg-black p-1">
                    {options.map((opt) => (
                    <Combobox.Option
                        key={opt.lat + ',' + opt.lon}
                        value={JSON.stringify(opt)}
                        className="ui-active:bg-blue-200 dark:ui-active:bg-dhoverblack dark:bg-black rounded-sm p-1 text-black dark:text-dlight"
                    >
                        {opt.name}
                    </Combobox.Option>
                    ))}
                </Combobox.Options>
                )}
                <Combobox.Button ref={comboBoxButton} className={'hidden'}>
                  Submit
                </Combobox.Button>
            </Combobox>
        </div>
    );
}