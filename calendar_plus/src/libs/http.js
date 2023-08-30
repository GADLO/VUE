import axios from "axios";
import qs from 'qs'

import { JUHE_APPKEY } from "@/configs/keys";

console.log(axios);

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'post',
        header: {
            "Content-Type": "application/x-www-form-urlencoded",

        },
        data: qs.stringify({ key: JUHE_APPKEY, ...options.data })
    })
        .then(res => {
            options.success(res.data);
        })
        .catch(err => {
            options.error(err);
        })
}

export {
    axiosPost
}