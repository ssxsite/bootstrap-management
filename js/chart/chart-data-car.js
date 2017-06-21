var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var barChartData = {
			labels : ["00","02","04","06","08","10","12"],
			datasets : [
				{
					fillColor : "rgba(48, 164, 255, 0.2)",
					strokeColor : "rgba(48, 164, 255, 0.8)",
					highlightFill : "rgba(48, 164, 255, 0.75)",
					highlightStroke : "rgba(48, 164, 255, 1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
	
	};
	
	var lineChartData = {
    //X坐标数据
    labels : ["00","02","04","06","08","10","12"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(175,25,25,0.5)",
            //统计表画笔颜色
            strokeColor : "#f60",
            //点的颜色
            pointColor : "#fff",
            //点边框的颜色
            pointStrokeColor : "red",
            //鼠标触发时点的颜色
            pointHighlightFill : "red",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#000",
            //Y坐标数据
            data : [300,555,655,714,899,905,1000]
        }
    ]

};


window.onload = function(){
	
	var chart1 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart1).Bar(barChartData, {
		responsive : true
	});
	
	var chart2 = document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart2).Line(lineChartData, {
		responsive: true
	});

	
};