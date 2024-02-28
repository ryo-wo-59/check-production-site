window.onload = function() {
    var header = document.getElementsByClassName('header');
    const divDom = document.createElement('div');
    divDom.setAttribute('style', 'position: absolute; width: 50px; height: 50px; background-color: #ff0000; color: #FFF; line-height:50px; text-align: center; font-weight: bold;')
    divDom.innerHTML = "本番";
    console.log(divDom);
    header[0].appendChild(divDom);
  };