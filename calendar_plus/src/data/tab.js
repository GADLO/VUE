import { getIconDate } from "@/libs/utils";

export default [
    {
        iconText: getIconDate('day'),
        tabText: '当天',
        path: '/day'
    },
    {
        iconText: getIconDate('month'),
        tabText: '当月',
        path: '/year_month'
    },
    {
        iconText: getIconDate('year'),
        tabText: '当年',
        path: '/year'
    },
    {
        iconText: getIconDate('year'),
        tabText: 'router',
        path: '/router/123'
    },

] 