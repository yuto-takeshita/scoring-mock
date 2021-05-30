import * as moment from 'moment';

export class DateConverter {
    public static _utcStringAsJSTMoment(utcString): moment.Moment {
        return moment(utcString)
            .utcOffset(540)
            .add(9, 'h');
    }

    public static _jstStringAsUTCMoment(jstString): moment.Moment {
        return moment(jstString)
            .utcOffset(540)
            .utc();
    }

    public static utcStringAsJSTDate(utcString: string): Date {
        return DateConverter._utcStringAsJSTMoment(utcString).toDate();
    }

    public static utcStringToJSTString(utcString: string): string {
        if (!utcString) return '';
        return DateConverter._utcStringAsJSTMoment(utcString).format('YYYY-MM-DD HH:mm:ss');
    }

    public static jstStringAsUTCDate(jstString: string): Date {
        return new Date(DateConverter._jstStringAsUTCMoment(jstString).format());
    }

    public static jstStringToUTCString(jstString: string): string {
        return DateConverter._jstStringAsUTCMoment(jstString).format('YYYY-MM-DD HH:mm:ss');
    }
}
