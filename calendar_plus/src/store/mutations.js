export default {
    setHeaderTitle(state, routeName) {
        // console.log('state', state);
        switch (routeName) {
            case 'DayPage':
                state.headerTitle = '当天'
                break;
            case 'MonthPage':
                state.headerTitle = '当月'
                break;
            case 'YearPage':
                state.headerTitle = '当年'
                break;
            default:
                state.headerTitle = '当天'
                break;
        }
    },
    setMaxLength(state, routeName) {
        switch (routeName) {
            case 'DayPage':
                state.maxlength = '8'
                break;
            case 'MonthPage':
                state.maxlength = '4'
                break;
            case 'YearPage':
                state.maxlength = '4'
                break;
            default:
                state.maxlength = '8'
                break;
        }
    },
    setPlaceholder(state, routeName) {
        function _zeroPrefix(num) {
            return num < 10 ? '0' + num : num
        }

        const date = new Date();

        let day = _zeroPrefix(date.getDate()),
            month = _zeroPrefix(date.getMonth() + 1),
            year = date.getFullYear();

        switch (routeName) {
            case 'DayPage':
                state.placeholder = `格式：${year}-${month}-${day}（${year}年${month}月${day}日）`
                break;
            case 'MonthPage':
                state.placeholder = `格式：${year}-${month}（${year}年${month}月${day}）`
                break;
            case 'YearPage':
                state.placeholder = `格式：${year}（${year}年）`
                break;
            default:
                state.placeholder = `格式：${year}-${month}-${day}（${year}年${month}月${day}日）`
                break;
        }
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode;
    },
    setData(state, payload) {
        const { field, data } = payload;

        switch (field) {
            case 'day':
                state.dayData = data;
                break;
            case 'month':
                state.monthData = data;
                break;
            case 'year':
                state.yearData = data;
                break;
            default:
                break;
        }
    }
}