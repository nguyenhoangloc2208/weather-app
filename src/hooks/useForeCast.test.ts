import { renderHook } from "@testing-library/react-hooks";
import useForeCast from "./useForeCast";
import useSWR from "swr";
import { Mock } from "vitest";

// Mock useSWR
vi.mock('swr', () => ({default: vi.fn() }))

describe('useForeCast', () => {
    it('should fetch forecast data', async () => {
        const lat = 123;
        const lon = 456;

        // Mock the response from the API
        const mockData = {
            cod: '200',
            message: 0,
            cnt: 1,
            list: [
                {
                    dt: 1714186800,
                    main: {
                      temp: 302.01,
                      feels_like: 307.3,
                      temp_min: 302.01,
                      temp_max: 302.03,
                      pressure: 1006,
                      sea_level: 1006,
                      grnd_level: 1007,
                      humidity: 79,
                      temp_kf: -0.02
                    },
                    weather: [
                      {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d'
                      }
                    ],
                    clouds: {
                      all: 85
                    },
                    wind: {
                      speed: 7.23,
                      deg: 84,
                      gust: 7.93
                    },
                    visibility: 10000,
                    pop: 0,
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2024-04-27 03:00:00'
                },
            ],
            city: {
                id: 1,
                name: 'Test City',
                coord: {
                    lat: 123,
                    lon: 456
                },
                population: 0,
                timezone: 10800,
                sunrise: 1714185712,
                sunset: 1714230784,
            }
        };

        // Mock useSWR with the response
        (useSWR as Mock).mockImplementation((key) => {
            if (key === `api/data/2.5/forecast?lat=${lat}&lon=${lon}`) {
                return {
                    data: mockData,
                    isLoading: false,
                    error: undefined,
                };
            }
        });

    //Render the hook
    const { result } = renderHook(() => useForeCast(lat, lon));

    // Assert the returned data
    expect(result.current.data).toEqual({
        '27 April': [
            {
                dt: 1714186800,
                main: {
                  temp: 302.01,
                  feels_like: 307.3,
                  temp_min: 302.01,
                  temp_max: 302.03,
                  pressure: 1006,
                  sea_level: 1006,
                  grnd_level: 1007,
                  humidity: 79,
                  temp_kf: -0.02
                },
                weather: [
                  {
                    id: 804,
                    main: 'Clouds',
                    description: 'overcast clouds',
                    icon: '04d'
                  }
                ],
                clouds: {
                  all: 85
                },
                wind: {
                  speed: 7.23,
                  deg: 84,
                  gust: 7.93
                },
                visibility: 10000,
                pop: 0,
                sys: {
                  pod: 'd'
                },
                dt_txt: '2024-04-27 03:00:00'
            },
        ],
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
    });
});