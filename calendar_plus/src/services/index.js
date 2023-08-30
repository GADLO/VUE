
import { getDayData, getMonthData, getYearData } from "./request";
import { formatCNDate, mapForCNDate } from "@/libs/utils";

export default async (store, field, date) => {
    let data = null;
    // console.log('service', date);
    switch (field) {
        case 'day':
            data = await getDayData(date);
            break;
        case 'month':
            data = await getMonthData(date);
            break;
        case 'year':
            data = await getYearData(date);
            break;
        default:
            break;
    }

    if (data && data?.error_code !== 0) {
        store.commit('setErrorCode', data.error_code);
        return;
    }

    let res = null;

    switch (field) {
        case 'day':
            res = data.result.data;
            res.date = formatCNDate(res.date, 'day');
            res['year-month'] = formatCNDate(res['year-month'], 'month')
            console.log('res', res['year-month']);
            break;
        case 'month':
            res = data.result.data.holiday_array;
            res = mapForCNDate(res, 'festival');
            // console.log(res);
            break;
        case 'year':
            res = data.result.data.holiday_list;
            res = mapForCNDate(res, 'startday');
            break;
        default:
            break;
    }

    store.commit('setData', { field, data: res });
    // console.log(store);
}