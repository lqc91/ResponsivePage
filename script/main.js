// 移动端适配，REM布局
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;  
      if (!clientWidth) return;
      if (clientWidth >= 980) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 980) + 'px';
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  recalc();
})(document, window);

// 获取相关元素
var barBtn = document.getElementById('barBtn'),
  nav = document.getElementById('nav'),
  showNav = false;

// iPhone6下，顶部右侧方块按钮点击事件
barBtn.addEventListener('click', function(){
  nav.style.transition = 'top 1s';
  // 若导航条已滑下，点击按钮，导航缓缓滑上去
  if(showNav){
    nav.style.top = '-1.6rem';
    showNav = false;
  }else{
    // 若导航条未滑下，点击按钮，导航缓缓滑下
    nav.style.top = '1rem';
    showNav = true;
  }
});