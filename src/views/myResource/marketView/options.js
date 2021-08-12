const options = {
    types: {
        tooltip: {
            trigger: 'item'
        },
    
        legend: {
            icon : 'circle',
            orient: 'vertical',
            x:'right',      //可设定图例在左、右、居中
            y: 'center',     //可设定图例在上、下、居中
            align: 'left',
            itemHeight: 10,
            itemWidth : 10,
            padding: [0, 0, 0, 0],
            formatter: function (params) {
                let current = options.types.series[0].data.filter((item) => item.name == params)[0];
                return current.name + '  ' + current.value;
            }
        },
        grid: [{
            left: '10%',
            bottom: '10%',
            top: '10%',
            right: '10%'
        }],
        label: {
            show: true,
            // formatter: '{b} : {c} ({d}%)'
            formatter: "({d}%)",
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['30%', '50%'],
                avoidLabelOverlap: false,
                
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            // formatter: '{b} : {c} ({d}%)'
                            formatter: "({d}%)",
                        },
                        labelLine: {
                            show: true,
                        },
                        color: function (params) {
                            //自定义颜色
                            var colorList = ['#00ACFF','#18E1A6','#F6E800']
                            return colorList[params.dataIndex];
                        },
                    },
                },
                    label: {//饼图中间文字设置
                        normal: {
                            show: false,
                            position: 'center',
                            color: '#9A9EBA',
                            formatter: function (params) {
                                return params.value + '\n' + params.name
                            },
                        },
                        emphasis: {//中间文字显示
                            show: true,
                            textStyle: { //设置文字样式
                                fontSize: '12',
                                color:"#333"
                            }
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                data: [
                                   
                        { value: 50, name: '分层级任务'},
                        { value: 40, name: '直达' },
                        { value: 10, name: '作战沙盘' }
                    ]
    
                
            }
        ]
    },
    custom : {
        tooltip: {
            trigger: 'item'
        },
    
        legend: {
            icon : 'circle',
            orient: 'vertical',
            x:'right',      //可设定图例在左、右、居中
            y:'center',     //可设定图例在上、下、居中
            padding: [0, 0, 0, 0],
            itemHeight: 10,
            itemWidth : 10,
            formatter: function (params) {
                let current = options.custom.series[0].data.filter((item) => item.name == params)[0];
                return current.name + ' '+  current.value+' ' +  current.percent + '%';
            },
            align: 'left',
        },
        grid: [{
            left: '0%',
            bottom: '10%',
            top: '10%',
            right: '10%'
        }],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '50%'],
                center: ['20%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            // formatter: '{b} : {c} ({d}%)'
                            formatter: "({d}%)",
                        },
                        labelLine: {
                            show: true,
                        },
                        color: function (params) {
                            //自定义颜色
                            var colorList = ['rgb(0,172,255)','rgb(246,232,0)','rgb(24,225,226)','rgb(59,229,31)','rgb(229,137,31)']
                            return colorList[params.dataIndex];
                        },
                    },
                },

                data: [                                   
                        { value: 50, name: '家宽',percent : '10'},
                        { value: 40, name: '加宽付费提速',percent : '50' },
                        { value: 10, name: '魔百和' ,percent : '40'},
                        { value: 10, name: '家庭安防',percent : '40' },
                        { value: 10, name: '家庭权益',percent : '40'}
                    ]   
            }
        ]
    },
    customs: {
        tooltip: {
            trigger: 'item'
        },
    
        legend: {
            icon : 'circle',
            orient: 'vertical',
            x:'right',      //可设定图例在左、右、居中
            y: 'center',     //可设定图例在上、下、居中
            itemHeight: 10,
            itemWidth : 10,
            padding: [0, 0, 0, 0],
            formatter: function (params) {
                let current = options.series[0].data.filter((item) => item.name == params)[0];
                return current.name + '  ' + current.value;
            }
        },
        grid: [{
            left: '10%',
            bottom: '10%',
            top: '10%',
            right: '10%'
        }],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['45%', '60%'],
                center: ['30%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            // formatter: '{b} : {c} ({d}%)'
                            formatter: "({d}%)",
                        },
                        labelLine: {
                            show: true,
                        },
                        color: function (params) {
                            //自定义颜色
                            var colorList = ['rgb(0,172,255)','rgb()','rgb(246,232,0)','rgb(24,225,226)','rgb(59,229,31)','rgb(229,137,31)']
                            return colorList[params.dataIndex];
                        },
                    },
                },

                data: [                                   
                        { value: 50, name: '家宽'},
                        { value: 40, name: '加宽付费提速' },
                        { value: 10, name: '魔百和' },
                        { value: 10, name: '家庭安防' },
                        { value: 10, name: '家庭权益'}
                    ]   
            }
        ]
    }
}
// options.legend.formatter = function (params) {
//     let current = options.series[0].data.filter((item) => item.name == params);
//     return current.name + '  ' + current.value;
// }
export default options;