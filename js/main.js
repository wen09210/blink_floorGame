$(document).ready(function(){
        // iOS check...ugly but necessary
if( navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
	$(".modal:before").css('height','0');
}
});
function hover(element) {
    element.setAttribute('src', 'img/start_hover.png');
    $(".startgame").addClass('jello');
}
function unhover(element) {
    element.setAttribute('src', 'img/start.png');
    $(".startgame").removeClass('jello')
}
function next_hover(element) {
    element.setAttribute('src', 'img/question/next_question_hover.png');
}
function next_unhover(element) {
    element.setAttribute('src', 'img/question/next_question.png');  
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function startGame() {
    $("#question_index").load("question1.html");
    fbq('track', 'AddToCart');
    ga('send', 'event','遊戲' , '開始遊戲', '遊戲');
}


function floorsix(a){
	$(this).click(		
		function(){
			var floor=["海神防水地板","海悅蝴蝶鎖扣系列","水御系列","水舞地板","pvc快拚地板","pvc美格地板"]
			$(".floor_six").removeClass("sixon")
			$(".floor_six"+a).addClass("sixon");
			$(".floor_Change").css("display","none");
			$("#floor_Change"+a).css("display","block");
    		ga('send', 'event','遊戲' , '選擇地板', floor[a-1]);
    		fbq('track', 'Purchase');


		})
          var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
          
       	$("html, body").animate({ scrollTop:  $(".floor_description").offset().top }, "slow");
}

function link(a){
	var floor=["海神防水地板","海悅蝴蝶鎖扣系列","水御系列","水舞地板","pvc快拚地板","pvc美格地板"]
    ga('send', 'event','遊戲' , '地板連外',floor[a-1]);
    fbq('track', 'InitiateCheckout');

}

// 計數array//
var score_number = []

function GoToNext(){
	var selecton = $('input[type="radio"][name="q1"]:checked').length;
	var pet = $('input[type="radio"][id="q1a5"]:checked').length;
	var score = $('input[type="radio"][name="q1"]:checked').val();
	if(selecton>0){
		score_number.push(Number(score));
		$(".gamebox_border").addClass("animated bounceOut");
		function change_page(){
				if(pet>0){
						$("#question_index").load("question2-2.html");
				}
					else{
							$("#question_index").load("question2.html");
					}
				}
					setTimeout(change_page,1000);
	}
	else{
		alert("你還沒選擇哦!")
	}
}
function GoToNext1(){
	var selecton = $('input[type="checkbox"][name="Q2"]:checked').length;
	var eachcheck = [];
	var score = $("input[type=checkbox]:checked").each(
		function(){
			eachcheck.push(Number($(this).val()));
		});
	var eachsum = eachcheck.reduce(function(a, b){
        return a + b;
      }, 0);
	if(selecton>0){
		score_number.push(eachsum);
		$(".gamebox_border").addClass("animated bounceOut");

		function change_page(){
		$("#question_index").load("question3.html");
				}
					setTimeout(change_page,1000);
	}
	else{
		alert("你還沒選擇哦!")
	}
}
function GoToNext2(){
	var selecton = $('input[type="checkbox"][name="Q3"]:checked').length;
	var eachcheck = [];
	var score = $("input[type=checkbox]:checked").each(
		function(){
			eachcheck.push(Number($(this).val()));
		});
	var eachsum = eachcheck.reduce(function(a, b){
        return a + b;
      }, 0);
	if(selecton>0){
		score_number.push(eachsum);
		$(".gamebox_border").addClass("animated bounceOut");
		function change_page(){
		$("#question_index").load("question4.html");
				}
					setTimeout(change_page,1000);
	}
	else{
		alert("你還沒選擇哦!")
	}
}
function GoToNext3(){
	var selecton = $('input[type="checkbox"][name="Q4"]:checked').length;
	var eachcheck = [];
	var score = $("input[type=checkbox]:checked").each(
		function(){
			eachcheck.push(Number($(this).val()));
		});
	var eachsum = eachcheck.reduce(function(a, b){
        return a + b;
      }, 0);
	if(selecton>0){
		score_number.push(eachsum);
		$(".gamebox_border").addClass("animated bounceOut");
		function change_page(){
		$("#question_index").load("question5.html");
				}
					setTimeout(change_page,1000);
	}
	else{
		alert("你還沒選擇哦!")
	}
}
function GoResult(){

	var selecton = $('input[type="checkbox"][name="Q5"]:checked').length;
	var eachcheck = [];
	var score = $("input[type=checkbox]:checked").each(
		function(){
			eachcheck.push(Number($(this).val()));
		});
	var eachsum = eachcheck.reduce(function(a, b){
        return a + b;
      }, 0);
	if(selecton>0){
		score_number.push(eachsum);
		var score_sum = score_number.reduce(function(a, b){
        return a + b;
      }, 0);
		// $("#question_index").load("")
		 var x = score_sum;
		 switch(true){
		 	case x<15:
		 		window.location.assign("form6.html")
		 	 break;
		 	case x<20:
		 		window.location.assign("form5.html")
		 	 break;
		 	case x<25:
		 		window.location.assign("form4.html")
		 	 break;
		 	case x<30:
		 		window.location.assign("form3.html")
		 	 break;
		 	case x<40:
		 		window.location.assign("form2.html")
		 	 break;
		 	case x>40:
		 		window.location.assign("form.html")
		 	 break;
		 	
		 	
		 	
		 	   
		 }
		
	}
	else{
		alert("你還沒選擇哦!")
	}
}
      /*FB分享*/
function share(e) {
  FB.ui({
  method: 'feed',
  link: 'www.yesim.tw/blink/floorgame/floorgame.html',
  picture:'http://i.imgur.com/RHfBgu2.jpg',
  name:"BLINK貝力地板-居家地板大進擊",
  description:"玩遊戲抽遊戲地墊，看看家中適合使用哪種木地板",
   caption:'參加小遊戲分享至臉書，就有機會中大獎',
  hashtag:"#居家地板大進擊",


},function(response) {
    if (response && !response.error_message) {
      alert('你已成功分享');
      window.location.assign("http://www.yesim.tw/blink/floorgame/thank.html")
    } else {
      alert('分享失敗');
    }
  });

};
/*填寫表單*/
 function fillin(){
    fbq('track', 'AddPaymentInfo');
    ga('send', 'event','遊戲' , '填寫資料', '填寫資料');
 }
/*傳送表單*/
    function sendform(){
      function hasClass(element, cls) {
          return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }

      var check = document.getElementById('sendform_btn');

      if(hasClass(check, 'disabled')){
        return false;
      }
      else{
        $.get("https://script.google.com/macros/s/AKfycbxLUDlhd5RkstXAO_FgUbdijynkmbnyBq15rkKElQUwI7unF58/exec", {
                    "name": document.getElementById("nameInput").value,
                    "sex": document.getElementById("sexInput").value,
                    "job": document.getElementById("jobInput").value,
                    "age": document.getElementById("ageInput").value,
                    "phone": document.getElementById("phoneInput").value,
                    "email": document.getElementById("emailInput").value,
                    "interest": document.getElementById("intrestInput").value,
                    "product": document.getElementById("productInput").value
                },
                function (data) {

                });
        share();
        	
      }

    }
    
