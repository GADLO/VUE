function _zeroPrefix(num) {
    typeof (num) === 'number' ? num : Number(num)
    return num < 10 ? '0' + num : num
}

function getIconDate(type) {
    const date = new Date();

    switch (type) {
        case 'day':
            return _zeroPrefix(date.getDate().toString());
        case 'month':
            return _zeroPrefix((date.getMonth() + 1).toString());
        case 'year':
            return _zeroPrefix(date.getFullYear().toString());
    }
}

function formatCNDate(date, type) {
    // console.log(date);

    const _arr = date?.split('-');

    switch (type) {
        case 'day':
            return `${_zeroPrefix(_arr[0])}年${_zeroPrefix(_arr[1])}月${_zeroPrefix(_arr[2])}日`;
        case 'month':
            return `${_zeroPrefix(_arr[0])}年${_zeroPrefix(_arr[1])}月`;
        case 'year':
            return `${_zeroPrefix(_arr[0])}年`;
        default:
            return `${_zeroPrefix(_arr[0])}年${_zeroPrefix(_arr[1])}月${_zeroPrefix(_arr[2])}日`;
    }

}

function mapForCNDate(data, key) {
    return data.map((item) => {
        item[key] = formatCNDate(item[key]);
        return item;
    })
}

function getNowDate(field) {
    const date = new Date();

    let day = date.getDate().toString(),
        month = (date.getMonth() + 1).toString(),
        year = date.getFullYear().toString();

    function _groupStr(arr, flag) {
        let str = '',
            len = arr.length;

        flag ? flag : flag = '-'

        arr.forEach((ele, ind) => {
            ind < len - 1 ? str += (ele + flag) : str += ele;
        });
        return str
    }

    switch (field) {
        case 'day':
            return _groupStr([year, month, day]);
        case 'month':
            return _groupStr([year, month]);
        case 'year':
            return year;
    }
}

export { getIconDate, formatCNDate, mapForCNDate, getNowDate }