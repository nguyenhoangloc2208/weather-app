import { Combobox } from '@headlessui/react';
import { useCallback, useRef, useState } from 'react';
import { debounce } from 'lodash';
import useGeoCoding, { GeoCodingResponse } from '../../../../hooks/useGeoCoding';
import { useSetAtom } from 'jotai';
import { selectedGeoAtom } from '../../../../atoms/selectedGeoAtom';
import { useNavigate } from 'react-router-dom';
import { geoHistoryAtom } from '../../../../atoms/geoHistoryAtom';


export default function SearchInput() {
    const [error, setError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<GeoCodingResponse[]>([]);
    const { trigger } = useGeoCoding();
    const setSelectedGetAtom = useSetAtom(selectedGeoAtom);
    const setGeoHistory = useSetAtom(geoHistoryAtom);
    const navigate = useNavigate();
    const comboBoxButton = useRef<HTMLButtonElement>(null);

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
                className="input h-auto w-full bg-white p-2"
                placeholder="Search country, or city here..."
                onChange={debounce((event) => onInputChange(event.target.value), 500)}
                onFocus={onInputFocus}
                />
                {error && <span className="text-red-500">{error}</span>}
                {options.length > 0 && (
                <Combobox.Options className="mt-1 w-full rounded-md bg-white p-1">
                    {options.map((opt) => (
                    <Combobox.Option
                        key={opt.lat + ',' + opt.lon}
                        value={JSON.stringify(opt)}
                        className="ui-active:bg-blue-200 rounded-sm p-1 text-black"
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