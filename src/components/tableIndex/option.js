export default {
    unstatisfy : {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        color : ['#1E90FF','#87CEFA'],
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true,
       },
        legend: {
            data: ['不满意度客户数', , '不满意度比率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '不满意度客户数',
                min: 0,
                max: 400,
                interval: 100,
                axisLabel: {
                    formatter: '{value} / 人'
                }
            },
            {
                type: 'value',
                name: '不满意度比率',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '不满意度客户数',
                type: 'bar',
                data: [10, 49, 70, 23, 25 , 76, 135, 162, 32, 200, 64, 33]
            },
            {
                name: '不满意度比率',
                type: 'line',
                yAxisIndex: 1,
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 50.6, 82.2, 48.7, 18.8, 6.0, 2.3]
            }
        ]
    },
    complain : {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
         color : ['#1E90FF','#87CEFA'],
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
		    containLabel: true,
	    },
        legend: {
            data: ['不满意度客户数', , '不满意度比率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '不满意度客户数',
                min: 0,
                max: 400,
                interval: 100,
                axisLabel: {
                    formatter: '{value} / 人'
                }
            },
            {
                type: 'value',
                name: '不满意度比率',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '投诉客户数',
                type: 'bar',
                data: [67, 75, 170, 123, 125 , 176, 135, 132, 132, 208, 164, 133]
            },
            {
                name: '客户投诉比率',
                type: 'line',
                yAxisIndex: 1,
                data: [25, 59, 90, 26, 28, 70, 50, 82, 48, 18, 60, 23]
            }
        ]
    }
}