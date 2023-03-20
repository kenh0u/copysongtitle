javascript:(function() {
  var songtitle = '';
  var artistname = '';
  if(window.location.href.indexOf('https://www.uta-net.com/song/')==0){
    songtitle = document.querySelector('h2.ms-2.ms-md-3').textContent;
    artistname = document.querySelector('[itemprop="byArtist name"]').firstChild.data;
  }else if(window.location.href.indexOf('https://utaten.com/lyric/')==0){
    songtitle = document.querySelector("h2.newLyricTitle__main").firstChild.data.replace(/^\s+|\s+$/g, '');
    artistname = document.querySelector("h3").textContent.replace(/^\s+|\s+$/g, '');
  }else{
    alert('このページは対象外です。');
    return;
  }
  if (songtitle=='' || artistname=='') {
    alert('曲名またはアーティストが見つかりませんでした。');
    return;
  }
  let setlisttitle = songtitle+' / '+artistname;
  navigator.clipboard.writeText(setlisttitle);
  alert(setlisttitle);
})();
