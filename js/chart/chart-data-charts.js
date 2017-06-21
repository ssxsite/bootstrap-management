var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
    //X坐标数据
    labels : ["周一","周二","周三","周四","周五","周六","周末"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(0,0,255,0.5)",
            //统计表画笔颜色
            strokeColor : "#f60",
            //点的颜色
            pointColor : "#000;",
            //点边框的颜色
            pointStrokeColor : "red",
            //鼠标触发时点的颜色
            pointHighlightFill : "red",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [300,555,655,714,899,905,1000]
        },{
            fillColor : "rgba(0,255,0,0.5)",
            strokeColor : "rgba(92, 184, 92, 1)",
            pointColor : "rgba(23, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [314,455,755,814,999,905,1000]
        }
        ,{
            fillColor : "rgba(48,165,255,0.6)",
            strokeColor : "blue",
            pointColor : "rgba(23, 126, 23, 1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [114,255,455,414,599,605,500]
        }
    ]

};
	
	var barChartData = {
			labels : ["周一","周二","周三","周四","周五","周六","周末"],
			datasets : [
				{
					fillColor : "rgba(220,220,220,0.5)",
					strokeColor : "rgba(220,220,220,0.8)",
					highlightFill: "rgba(220,220,220,0.75)",
					highlightStroke: "rgba(220,220,220,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
	};

/*pieData只能显示小数或者整数，不能显示百分数*/
	var pieData = [
				{
					value: 0.52,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "苹果"
				},
				{
					value: 0.08,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "橘子"
				},
				{
					value: 0.23,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "香蕉"
				},
				{
					value: 0.17,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "西瓜"
				}

			];
			
	var doughnutData = [
					{
						value: 100,
						color:"#30a5ff",
						highlight: "#62b9fb",
						label: "Blue"
					},
					{
						value: 50,
						color: "#ffb53e",
						highlight: "#fac878",
						label: "Orange"
					},
					{
						value: 100,
						color: "#1ebfae",
						highlight: "#3cdfce",
						label: "Teal"
					},
					{
						value: 120,
						color: "#f9243f",
						highlight: "#f6495f",
						label: "Red"
					}
	
				];

window.onload = function(){
	var chart1 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart1).Line(lineChartData, {
		responsive: true
	});
	var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});
	
//	var chart5 = document.getElementById("bar-chart2").getContext("2d");
//	window.myBar = new Chart(chart2).Bar(barChartData, {
//		responsive : true
//	});
	
};