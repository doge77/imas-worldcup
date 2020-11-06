$(document).ready(function(){});

	var million = false, cinderella = false, shiny = false;
	var randToggle;
	
	$(function(){
		$('#million-toggle').click(function(){
			if (million == false){
				$(this).addClass('gray-in');
				$(this).css('filter', 'grayscale(0%)');
				$(this).removeClass('gray-out');
				million = true;
			}
			else if (million == true){
				$(this).addClass('gray-out');
				$(this).css('filter', 'grayscale(100%)');
				$(this).removeClass('gray-in');
				million = false;
			}
			showBtn();
		});
	});
	
	$(function(){
		$('#cinderella-toggle').click(function(){
			if (cinderella == false){
				$(this).addClass('gray-in');
				$(this).css('filter', 'grayscale(0%)');
				$(this).removeClass('gray-out');
				cinderella = true;
			}
			else if (cinderella == true){
				$(this).addClass('gray-out');
				$(this).css('filter', 'grayscale(100%)');
				$(this).removeClass('gray-in');
				cinderella = false;
			}
			showBtn();
		});
	});
	
	$(function(){
		$('#shiny-toggle').click(function(){
			if (shiny == false){
				$(this).addClass('gray-in');
				$(this).css('filter', 'grayscale(0%)');
				$(this).removeClass('gray-out');
				shiny = true;
			}
			else if (shiny == true){
				$(this).addClass('gray-out');
				$(this).css('filter', 'grayscale(100%)');
				$(this).removeClass('gray-in');
				shiny = false;
			}
			showBtn();
		});
	});
	
	function showBtn(){
		if( million == true || cinderella == true || shiny == true ){
			$('#next-btn').addClass('fade-in');
			$('#next-btn').css('opacity', '100%');
			$('#next-btn').removeClass('fade-out');
		}
		else if ( million == false && cinderella == false && shiny == false ){
			$('#next-btn').addClass('fade-out');
			$('#next-btn').css('opacity', '0%');
			$('#next-btn').removeClass('fade-in');
		}
	}
	
	$(function(){
		$('#rand-toggle').change(function(){
			if($(this).is(':checked') == false){
				alert("대진 순서 뒤섞기 기능을 끄면 대진 순번이 가장 뒤에 있는 캐릭터가 계속 부전승으로 올라가게 될 가능성이 있습니다.");
			}
		});
	});
	
	
	//LOADING...
	$(function(){
		$('#next-btn').click(function(){
			if($(this).hasClass("fade-in")==true){
				if($('#rand-toggle').is(':checked')==true){
					randToggle = true;
				}
				else if ($('#rand-toggle').is(':checked')==false){
					randToggle = false;
				}
				initiating();
				$('#intro-box').css('display', 'none');
				$('#loading').css('display', 'block');
				setTimeout(function(){
					$('#loading').css('display', 'none');
					$('#game-box').css('display', 'block');
					},1000);
			}
		});
	});
	
	
	//Idol 프로토타입
	function Idol(uid, name, series, picSrc){
		this.uid = uid;
		this.name = name;
		this.series = series;
		this.picSrc = picSrc;
	}
	
	//밀리0~55 56명(52+사무원2+시이카,레온), 샤니56~79 24명(23+사무원), 신데 80 1명
	//더 추가하려면 여기에 이름 적고 이미지 파일 넣으면 됨
	var milliName = ["아마미 하루카", "하기와라 유키호", "키쿠치 마코토", "가나하 히비키", "키사라기 치하야", "미나세 이오리", "시죠 타카네", "아키즈키 리츠코", "호시이 미키", "타카츠키 야요이", "미우라 아즈사", "후타미 아미", "후타미 마미", "카스가 미라이", "타나카 코토하", "사타케 미나코", "토쿠가와 마츠리", "나나오 유리코", "타카야마 사요코", "마츠다 아리사", "코사카 우미", "나카타니 이쿠", "에밀리 스튜어트", "야부키 카나", "요코야마 나오", "후쿠다 노리코", "모가미 시즈카", "토코로 메구미", "로코", "텐쿠바시 토모카", "키타자와 시호", "마이하마 아유무", "니카이도 치즈루", "마카베 미즈키", "모모세 리오", "나가요시 스바루", "스오 모모코", "줄리아", "시라이시 츠무기", "이부키 츠바사", "시마바라 엘레나", "하코자키 세리카", "노노하라 아카네", "모치즈키 안나", "키노시타 히나타", "바바 코노미", "오오가미 타마키", "토요카와 후카", "미야오 미야", "시노미야 카렌", "키타카미 레이카", "사쿠라모리 카오리", "시이카", "레온", "오토나시 코토리", "아오바 미사키"];
	var cindeName = ["아이바 유미", "아카기 미리아", "아사리 나나미", "아나스타샤", "아베 나나", "아라키 히나", "이브 산타클로스", "이가라시 쿄코", "이치노세 시키", "이치하라 니나", "오오이시 이즈미", "오오츠키 유이", "오가타 치에리", "오토쿠라 유우키", "카타기리 사나에", "카미야 나오", "카와시마 미즈키", "칸자키 란코", "키타 히나코", "키무라 나츠키", "키류 츠카사", "쿠로사키 치토세", "코시미즈 사치코", "코바야카와 사에", "코히나타 미호", "사이온지 코토카", "자이젠 토키코", "사에지마 키요미", "사기사와 후미카", "사쿠마 마유", "사쿠라이 모모카", "사사키 치에", "사죠 유키미", "사토 신", "시이나 노리코", "시오미 슈코", "시부야 린", "시마무라 우즈키", "죠가사키 미카", "죠가사키 리카", "시라기쿠 호타루", "시라사카 코우메", "시라유키 치요", "스나즈카 아키라", "타카가키 카에데", "타카후지 카코", "타카모리 아이코", "타다 리이나", "타치바나 아리스", "츠지노 아카리", "토토키 아이리", "나카노 유카", "닛타 미나미", "니노미야 아스카", "하마구치 아야메", "하야사카 미레이", "하야미 카나데", "히사카와 나기", "히사카와 하야테", "히노 아카네", "히메카와 유키", "후쿠야마 마이", "후지모토 리나", "후타바 안즈", "호죠 카렌", "호시 쇼코", "호리 유코", "혼다 미오", "마에카와 미쿠", "마토바 리사", "미즈모토 유카리", "미후네 미유", "미무라 카나코", "미야모토 프레데리카", "무나카타 아츠미", "무라카미 토모에", "모리쿠보 노노", "모로보시 키라리", "야가미 마키노", "유우키 하루", "유사 코즈에", "유메미 리아무", "요리타 요시노", "류자키 카오루", "센카와 치히로"];
	var shinyName = ["사쿠라기 마노", "카자노 히오리", "하치미야 메구루", "츠키오카 코가네", "타나카 마미미", "시라세 사쿠야", "미츠미네 유이카", "유코쿠 키리코", "오사키 아마나", "오사키 텐카", "쿠와야마 치유키", "코미야 카호", "소노다 치요코", "사이죠 쥬리", "모리노 린제", "아리스가와 나츠하", "마유즈미 후유코", "세리자와 아사히", "이즈미 메이", "이치카와 히나나", "아사쿠라 토오루", "히구치 마도카", "후쿠마루 코이토", "나나쿠사 하즈키"];
	
	const milliNum = milliName.length //56
	const cindeNum = cindeName.length //1
	const shinyNum = shinyName.length //24
	
	var milliIdol = new Array();
	for(var i = 0; i <= milliNum-1; i++){
		milliIdol[i] = new Idol(eval('i'), milliName[i], "밀리언라이브", "./img/" + eval('i+1') + ".png");
	}
	
	
	var shinyIdol = new Array();
	for(var i = 0; i <= shinyNum-1; i++){
		shinyIdol[i] = new Idol(eval('i+milliNum'), shinyName[i], "샤이니컬러즈", "./img/" + eval('i+milliNum+1') + ".png");
	}
	
	
	var cindeIdol = new Array();
	for(var i = 0; i <= cindeNum-1; i++){
		cindeIdol[i] = new Idol(eval('i+milliNum+shinyNum'), cindeName[i], "신데렐라걸즈", "./img/" + eval('i+milliNum+shinyNum+1') + ".png");
	}
	
	
	var roll = new Array();
	var rollExcludeEnrolled = new Array();;
	var rollCount;
	var countQuotient;
	var countRemainder;
	var totalMatch;
	var roundNum;
	var matchNum;
	var finalRound = false;
	var winByDefault = false;
	
	function shuffle(a){
		var j, x, i;
		for (i = a.length; i; i -= 1){
			j = Math.floor(Math.random() * i);
			x = a[i - 1]; a[i - 1] = a[j]; a[j] = x;
		}
	}
	
	function initiating(){
		if(million == true){
			for(var i = 0; i <= milliNum-1; i++){
				roll.push(milliIdol[i]);
			}
		}
		if(shiny == true){
			for(var i = 0; i <= shinyNum-1; i++){
				roll.push(shinyIdol[i]);
			}
		}
		if(cinderella == true){
			for(var i = 0; i <= cindeNum-1; i++){
				roll.push(cindeIdol[i]);
			}
		}

		rollCount = roll.length;
		countQuotient = parseInt(rollCount/2);
		countRemainder = rollCount % 2;
		totalMatch = countQuotient + countRemainder;
		roundNum = 1;
		matchNum = 0;
		
		shuffle(roll); //randToggle과 상관없이 처음에 무조건 셔플
		rollExcludeEnrolled = roll.slice();
		setUp();
	}
	
	function setUp(){
		matchNum++;
		if(matchNum > totalMatch){
			nextRound();
		}
		else{
			if(countRemainder > 0){
				winByDefault = true;
			}
			if(totalMatch == 1){
				finalRound = true;
			}
			
			if(winByDefault == true && matchNum == totalMatch){ //부전승 켜져있으면
				$('#game-desc').html(roundNum + "라운드 제" + matchNum + "경기(부전승)");
				$('#left-idol').css('display', 'none');
				$('#right-idol').css('display', 'none');
				$('#win-by-default').css('display', 'block');
				winByDefault = false;
				winByDefaultSetUp();
			}
			else if(finalRound == true){
				$('#game-desc').html("결승전");
				$('#left-idol').css('display', 'block');
				$('#right-idol').css('display', 'block');
				$('#win-by-default').css('display', 'none');
				leftIdolSetUp();
				rightIdolSetUp();
			}
			else{
				$('#game-desc').html(roundNum + "라운드 제" + matchNum + "경기");
				$('#left-idol').css('display', 'block');
				$('#right-idol').css('display', 'block');
				$('#win-by-default').css('display', 'none');
				leftIdolSetUp();
				rightIdolSetUp();
			}
		}
	}
	
	
	function nextRound(){
		if(randToggle = true){
			shuffle(roll);
		}
		roundNum++;
		matchNum = 0;
		rollCount = roll.length;
		countQuotient = parseInt(rollCount/2);
		countRemainder = rollCount % 2;
		totalMatch = countQuotient + countRemainder;
		rollExcludeEnrolled = roll.slice();
		setUp();
	}
	
	//이하 게임 화면 구성
	function leftIdolSetUp(){
		$('#left-idol-desc').html(rollExcludeEnrolled[0].name);
		$('#left-pic').attr('src',rollExcludeEnrolled[0].picSrc);
	}
	function rightIdolSetUp(){
		$('#right-idol-desc').html(rollExcludeEnrolled[1].name);
		$('#right-pic').attr('src',rollExcludeEnrolled[1].picSrc);
	}
	function winByDefaultSetUp(){
		$('#win-by-default-desc').html(rollExcludeEnrolled[0].name);
		$('#win-by-default-pic').attr('src',rollExcludeEnrolled[0].picSrc);
	}
	
	
	$(function(){
		$('#left-idol').click(function(){
			if(finalRound == true){
				winner(0);
			}
			else{
				deleteIdolFromRoll(rollExcludeEnrolled[1].uid);
				rollExcludeEnrolled.splice(0,2);
				setUp();
			}
		});
	});
	$(function(){
		$('#right-idol').click(function(){
			if(finalRound == true){
				winner(1);
			}
			else{
				deleteIdolFromRoll(rollExcludeEnrolled[0].uid);
				rollExcludeEnrolled.splice(0,2);
				setUp();
			}
		});
	});
	$(function(){
		$('#win-by-default').click(function(){
			rollExcludeEnrolled.splice(0,1);
			setUp();
		});
	});
	
	function deleteIdolFromRoll(deleteUid){
		const tmp = roll.findIndex(function(item){
			return item.uid == deleteUid
		});
		roll.splice(tmp,1);
	}
	
	function winner(idol){
		$('#game-box').css('display', 'none');
		$('#result-box').css('display', 'block');
		if(idol==0){
			$('#winner-desc').html(rollExcludeEnrolled[0].name);
			$('#winner-pic').attr('src',rollExcludeEnrolled[0].picSrc);
		}
		else if(idol==1){
			$('#winner-desc').html(rollExcludeEnrolled[1].name);
			$('#winner-pic').attr('src',rollExcludeEnrolled[1].picSrc);
		}
		$('#fireworks').css('animation', 'fade-out-long 4s');
		$('#fireworks').css('opacity', '0%');
	}
	

