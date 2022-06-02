
let i = 0;
let text1 = "Hey! Manda Tersayang.";
let text2 = "so I write some code to celebrate our 1st anniversary."
let text3 = "with our song heheheheh"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
		}
		ok += 2;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		if(ok == 1){
			typeWriter(text2, "txt2");
		}
		else if(ok == 2){
			typeWriter(text3, "txt3");
	}, 100);
//};
