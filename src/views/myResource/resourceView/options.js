var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];
var app = {}
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        // var labelOption = {
        //     normal: {
        //         rotate: app.config.rotate,
        //         align: app.config.align,
        //         verticalAlign: app.config.verticalAlign,
        //         position: app.config.position,
        //         distance: app.config.distance
        //     }
        // };
        // myChart.setOption({
        //     series: [{
        //         label: labelOption
        //     }, {
        //         label: labelOption
        //     }, {
        //         label: labelOption
        //     }, {
        //         label: labelOption
        //     }]
        // });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
        }
    }
};

var deal = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        icon: 'rect',
        itemHeight: 12,
        itemWidth : 12,
        data: ['移动宽带', '魔百和', '智能组网', '语音遥控','家庭安防','全部']
    },
    grid: [{
        left: '10%',
        bottom: '10%',
        top: '30%',
        right: '10%'
    }],
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['1月', '2月', '3月', '4月', '5月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '(万次)',
            min: 0,
            max: 500,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            }
        },
    ],
    color: ['rgb(176,144,244)','rgb(247,146,129)','rgb(239,218,126)','rgb(61,213,194)','rgb(24,179,236)','rgb(236,77,188)'],
    series: [
        {
            name: '移动宽带',
            type: 'bar',
            barGap: 0,
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390,500]
        },
        {
            name: '魔百和',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290,320]
        },
        {
            name: '智能组网',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190,240]
        },
        {
            name: '语音遥控',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [98, 77, 101, 99, 40,140]
        },{
            name: '家庭安防',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [198, 277, 101, 199, 240,320]
        },{
            name: '全部',
            type: 'bar',
            emphasis: {
                focus: 'series'
            },
            data: [198, 277, 101, 199, 240,320]
        },
        
    ]
};

const options = {
    deal : deal,
    grid: {
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
                // console.log(this.series)
                let current = options.grid.series[0].data.filter((item) => item.name == params)[0];
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
                            var colorList = ['rgb(0,172,255)','rgb(24,225,166)','rgb(246,232,0)','rgb(59,229,31)','rgb(229,137,31)']
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
                                   
                        { value: 120, name: '网格总监'},
                        { value: 40, name: '社区经理' },
                        { value: 10, name: '渠道经理' },
                        { value: 10, name: '装维人员' },
                        { value: 10, name: '客户经理' }
                    ]
    
                
            }
        ]
    },
    warn : {
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

                let current = options.warn.series[0].data.filter((item) => item.name == params)[0];
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
                            var colorList = ['rgb(0,172,255)','rgb(24,225,166)','rgb(246,232,0)','rgb(59,229,31)']
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
                                   
                        { value: 120, name: '预警1'},
                        { value: 40, name: '预警2' },
                        { value: 10, name: '预警3' },
                        { value: 10, name: '预警4' }
                    ]
    
                
            }
        ]
    },
    port: {
        tooltip: {
            trigger: 'item'
        },
    
        legend: {
            icon : 'circle',
            orient: 'vertical',
            x:'center',      //可设定图例在左、右、居中
            y: 'top',     //可设定图例在上、下、居中
            align: 'left',
            itemHeight: 10,
            itemWidth : 10,
            padding: [20, 0, 0, 0],
            formatter: function (params) {
                let current = options.port.series[0].data.filter((item) => item.name == params)[0];
                return current.name + '  ' + current.value + '%';
            }
        },
        grid: [{
            left: '10%',
            bottom: '0%',
            top: '15%',
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
                center: ['50%', '60%'],
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
                            var colorList = ['#00ACFF','#18E1A6']
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
                        { value: 75, name: '已使用端口'},
                        { value: 25, name: '剩余端口' }
                    ]   
            }
        ]
    },
}
export default options;