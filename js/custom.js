$(document).ready(function(){
	
	// 시간이라는 인자를 변수에 담아 주기적으로 함수를 실행
	var timer =  setInterval(function(){
		
		var now = new Date();
		var hr = now.getHours(); // 시
		var min = now.getMinutes(); // 분
		var sec = now.getSeconds(); // 초

		if(hr<10){
			hr = '0' + hr;
		}

		if(min<10){
			min = '0' + min;
		}

		if(sec<10){
			sec = '0' + sec;
		}

		$('p span').eq(0).text(hr);
		$('p span').eq(1).text(min);
		$('p span').eq(2).text(sec);
		// console.log(hr+" : "+min+" : "+sec );
	},1000);
	
	var now = new Date(); 
	var hr = now.getHours();

	// 자정 기준
	if(hr>=5 && hr<11){  // 오전 5시 이상부터 11시 미만이라면 아침을 표현
		$('#wrap').removeClass(); 
		$('#wrap').addClass('morning');
		$('nav li').removeClass('on');
		$('nav li').eq(0).addClass('on'); // eq는 0부터 시작
	} else if(hr>=11 && hr<17){  // 오전 11시 이상부터 오후 17시 미만이라면 오후를 표현
		$('#wrap').removeClass();
		$('#wrap').addClass('afternoon');
		$('nav li').removeClass('on');
		$('nav li').eq(1).addClass('on');
	} else if(hr>=17 && hr<24){ // 오후 5시 이상부터 밤 12시 미만이라면 저녁으로 표현
		$('#wrap').removeClass();
		$('#wrap').addClass('evening');
		$('nav li').removeClass('on');
		$('nav li').eq(2).addClass('on');
	} else { // 그 외 다른 시간을 밤으로 표현
		$('#wrap').removeClass();
		$('#wrap').addClass('night');
		$('nav li').removeClass('on');
		$('nav li').eq(3).addClass('on');
	}

	$('nav li').on('click',function(){	
		var className = $(this).children('a').text();
		$('nav li').removeClass('on');
		$(this).addClass('on');
		$('#wrap').removeClass();
		$('#wrap').addClass(className);
	});
});

