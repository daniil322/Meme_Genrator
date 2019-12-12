function renderMemes() {
  let strHTML = "";
  filterdMemes = filterMemes();
  filterdMemes.forEach(meme => {
    strHTML += `<img class='img' src=${meme.url} onclick=showEditor('${meme.url}')>`;
  });
  return (document.querySelector(".content").innerHTML = strHTML);
}

function searchMemes(elFilter) {
  changeGSearchWord(elFilter.value);
  renderMemes();
}

function showEditor(memeURL) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector("editor").style.display = "flex";
  document.querySelector("main").style.display = "none";
  canvasImage(memeURL);
}

function showAbout(){
    document.querySelector("editor").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.querySelector("about").style.display = "flex";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function showGallery(){
    document.querySelector("editor").style.display = "none";
    document.querySelector("main").style.display = "block";
    document.querySelector("about").style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
