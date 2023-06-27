function closeBanner() {
    var banner = document.getElementById('banner_slide');
    banner.classList.add('hide');
}
  
window.onload = function() {
    var banner = document.getElementById('banner_slide');
    banner.style.display = 'flex';
};
  
window.addEventListener('animationend', function(e) {
    if (e.animationName === 'slideUp') {
      var banner = document.getElementById('banner_slide');
      banner.style.display = 'none';
      banner.classList.remove('hide');
    }
});