export function temperatureConverter(celsius: number, type: string): number {
    if(type == 'F') {
        return (celsius * 9/5) + 32;
    }
    return celsius
}

export function windSpeedConverter(speed: number, type: string): number {
    switch (type) {
        case 'km/h':
            return speed * 3.6;
        case 'mph':
            return speed * 2.23694;
        case 'kt':
            return speed * 1.94384;
        default:
            return speed;
    }
}

export function atmosphericPressureConverter(pressure: number, type: string): string {
    switch (type) {
        case 'inHg':
            return (pressure * 3.6).toFixed(0);
        case 'mbar':
            return pressure.toFixed(0);
        case 'mmHg':
            return (pressure * 2.23694).toFixed(0);
        case 'kt':
            return (pressure * 1.94384).toFixed(0);
        case 'atm':
            return (pressure * 9.9e-04).toFixed(4);
        default:
            return pressure.toFixed(0);
    }
}