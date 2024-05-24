import dayjs from 'dayjs';

export function formatTimestamp(timestamp: number, noyear: boolean): string {
    const lang = localStorage.getItem('lang') || 'en';
    let format: string;

    switch (lang) {
        case 'en':
            format = noyear ? 'DD MMMM' : 'MMMM DD, YYYY hh:mm A';
            break;
        case 'fr':
            format = noyear ? 'DD MMMM' : 'DD MMMM YYYY HH:mm';
            break;
        case 'zh':
            format = noyear ? 'MM月DD日' : 'YYYY年MM月DD日 HH:mm';
            break;
        case 'vi':
            format = noyear ? 'DD/MM' : 'DD/MM/YYYY HH:mm';
            break;
        case 'ja':
            format = noyear ? 'MM月DD日' : 'YYYY年MM月DD日 HH:mm';
            break;
        default:
            format = noyear ? 'MMMM DD' : 'MMMM DD, YYYY hh:mm A';
    }

    return dayjs(timestamp).locale(lang).format(format);
}
