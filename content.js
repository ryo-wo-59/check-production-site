window.onload = function() {
    var body = document.getElementsByTagName('body');
    const divDom = document.createElement('div');
    divDom.setAttribute('style', 'position: fixed; top: 0px; left: 0px; z-index: 99999; text-align:center; width: 100px; height: 50px; background-color: #ff0000; color: #FFF; line-height:50px; text-align: center; font-weight: bold;')
    divDom.innerHTML = "本番";
    console.log(divDom);
    body[0].appendChild(divDom);
  };