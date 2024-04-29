import { Combobox } from '@headlessui/react';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import useGeoCoding, { GeoCodingResponse } from '../../../hooks/useGeoCoding';
import { useSetAtom } from 'jotai';
import { selectedGeoAtom } from '../../../atoms/selectedGeoAtom';
import { useNavigate } from 'react-router-dom';


export default function SearchInput() {
    // const [query, setQuery] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState<GeoCodingResponse[]>([]);
    const { trigger } = useGeoCoding();
    const setSelectedGeoAtom = useSetAtom(selectedGeoAtom);
    const navigate = useNavigate();

    const onInputChange = useCallback(
      async (value: string) => {
        setInputValue(value);
        setOptions([]);
        setError(null);
        try {
          const result = await trigger({ q: value });
          if (result.length > 0) {
            setOptions(result);
          } else {
            setError('Invalid country or city');
          }
        } catch (error) {
          setError('Invalid country or city');
        }
      }, [trigger]
    );

    const onSelectValue = useCallback(
      (value: string) => {
        const json = JSON.parse(value as string) as GeoCodingResponse;
        setInputValue(json.name);
        setSelectedGeoAtom(json);
        navigate('/');
      },
      [setSelectedGeoAtom, navigate]
    )

    return (
        <div className="mx-auto flex h-full flex-col items-center">
            <Combobox
              value={inputValue}
              onChange={onSelectValue}
            >
                <Combobox.Input
                className="input h-auto w-full bg-white p-1"
                placeholder="Search country, or city here..."
                onChange={debounce((event) => onInputChange(event.target.value), 500)}
                />
                {error && <span className="text-red-500">{error}</span>}
                {options.length > 0 && (
                <Combobox.Options className="mt-1 w-full rounded-md bg-white p-1">
                    {options.map((opt) => (
                    <Combobox.Option
                        key={opt.name}
                        value={JSON.stringify(opt)}
                        className="ui-active:bg-blue-200 rounded-sm p-1 text-black"
                    >
                        {opt.name}
                    </Combobox.Option>
                    ))}
                </Combobox.Options>
                )}
            </Combobox>
        </div>
    );
}