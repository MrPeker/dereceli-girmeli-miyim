/*httpGet = function(theUrl){
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

swapVideos = function(){	
	var theVideos = httpGet('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLbAFXJC0J5GZHUtGea_zQR0OyD3UBuw9s&key=AIzaSyDg5WW8Otlwn5B3_1wVLbFk_XiAtkrT7r4');
	var videoCount = JSON.parse(theVideos).items.length;
	var randomNumber = Math.floor((Math.random() * videoCount));
	var playlistURL = "https://www.youtube.com/embed/videoseries?list=PLbAFXJC0J5GZHUtGea_zQR0OyD3UBuw9s&autoplay=1&controls=0&showinfo=0&rel=0&enablejsapi=1&index=";
	var videoEmbed = document.getElementById('vid')
		videoEmbed.setAttribute('src', playlistURL + randomNumber);
}

swapVideos();
*/

var mouseon = new Audio('audio/mouseon.mp3');
var mouseclick = new Audio('audio/mouseclick.mp3');
var showresult = new Audio('audio/showresult.mp3');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mouseEnterAction() {
    mouseon.currentTime = 0;
    mouseon.play();
}

function mouseLeaveAction(e) {
    mouseon.pause();
}

window.onload = function () {
    try {
        window.myPlayer.playVideo();
    } catch (err) {
        console.log(err);
    }
    $('.start').click(function (e) {
        try {
            window.myPlayer.playVideo();
        } catch (err) {
            console.log(err);
        }
        $('.start').fadeOut(500, function () {
            $('.start').css('display', 'none');
            $('.content').fadeIn(500);
        })
    })

    $('.action').click(function (e) {
        mouseclick.currentTime = 0;
        mouseclick.play();
        $('.result-text').text('Veri Toplanıyor...')
        $('.result').fadeIn(500);

        setTimeout(function () {
            $('.result-text').text('Veri Karşılaştırılıyor...')
        }, 1000)

        setTimeout(function () {
            $('.result-text').text('Analiz Yapılıyor...')
        }, 2000)

        setTimeout(function () {
            $('.result-text').text('Sonuç Doğrulanıyor...')
        }, 3000)

        setTimeout(function () {
            mouseclick.pause();
            mouseclick.currentTime = 0;
            showresult.currentTime = 0;
            showresult.play();
            setTimeout(function () {
                var possibility = getRandomInt(0, 10);
                if (possibility < 7) {
                    $('.result-text').text('Tüh be, şu an dereceli girebilmek için doğru zaman değil ortalık yasuo main kaynıyor!');
                } else if (possibility < 10) {
                    $('.result-text').text('Dereceli girmek için doğru zamandasın vadi seni bekliyor!')
                } else {
                    $('.result-text').text('Efsanevi bir şansın var! Şu an TR Sunucusu tüm yasuo mainlerden arınmış onlar gelmeden bir an önce dereceli girmelisin!')
                }
            }, 500);
        }, 4000);
    })
}
