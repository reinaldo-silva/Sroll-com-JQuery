// 1 – Identificar quando o usuário utiliza o scroll
// 2 – Calcular a distância entre o topo da página e o scroll
// 3 – Calcular a distância entre o topo da página e o elemento que deseja animar
// 4 – Comparar as duas distâncias anteriores
// 5 – Adicionar uma classe com css animation ou transition ao elemento animado
//Debounce do Lodash

debounce = function(func, wait, imediate){
  var timeout;
  return function(){
    var context = this, args = arguments;
    var later = function(){
      timeout = null;
      if(!timeout) func.apply(context, args);
    };
    var callNow = imediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
};


(function(){
var $target = $('.anime'),
    animationClass = 'anime-start';
    offset = $(window).height() * 3/4;

  function animeScroll(){
    var documentTop = $(document).scrollTop();//mostra a distancia que o scroll esta do top
    
    $target.each(function(){
      var itemTop = $(this).offset().top;// distancia do top e o item 
      if(documentTop > itemTop - offset){
        $(this).addClass(animationClass);//adiciona a classe 
      } else{
        $(this).removeClass(animationClass);//remove a classe
      }
    });
  }

  animeScroll();

  $(document).scroll(debounce(function(){ //demora 200ms para executar a função novamente 
    animeScroll();
  },100));

}());