/*этот код для новостного слайдера юзая chiefslider*/
document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000,
    refresh: true,
  });
});
/*тут кончается новостной слайдер*/
/*этот код для header-а чтоб оно становилось fixed когда скроллим*/
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 40) {
    document.getElementById("mainheader").className = "header-search-fixed";
    document.querySelector("header").setAttribute('style', 'padding-bottom: 105px;');
  }
  else {
    document.getElementById("mainheader").className = "header-search";
    document.querySelector("header").setAttribute('style', 'padding-bottom: 0px;');
  }
}

/*function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}*/

$(document).ready(function(){
  var bar = $(".side-paths"), pord, idb, finder;
  bar.add(pord).mouseover(function(){
    idb = $(this).attr('id');
    /*pord.setAttribute('style', 'display:block');*/
    console.dir(pord);
    console.dir(idb);
  });
  bar.add(pord).mouseout(function(){
    // pord.setAttribute('style', 'display:none');
  });
});

/*тут заканчивается код для header fixed*/