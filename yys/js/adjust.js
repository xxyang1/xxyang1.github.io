(function (doc, win) {
//	alert(123)
          var docEl = doc.documentElement,
             resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
             recalc = function () {
                 var clientWidth = docEl.clientWidth;
                 if (!clientWidth) return;
                 if(clientWidth>=750){
                     docEl.style.fontSize = '100px';
                 }else{
                     docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                 }
             };
   
        if (!doc.addEventListener) return;
         win.addEventListener(resizeEvt, recalc, false);
         doc.addEventListener('DOMContentLoaded', recalc, false);
     })(document, window);

/*
window.onload = function() {
document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
window.onresize = function() {
document.documentElement.style.fontSize = document.documentElement.clientWidth / 320 * 20 + 'px';
				};
			};
			*/