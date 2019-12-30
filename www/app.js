const loadPage = (page) => {
    const navigator = document.querySelector('#navigator');
  
    document.querySelector('#menu').close();
  
    if (page == 'acerca.html') {
      navigator.bringPageTop(page, { animation: 'fade' });
    } else {
      navigator.resetToPage(page);
    }
};

function calcular(){
  var od = document.getElementById('od').value;
  var dilucion = document.getElementById('dilucion').value;
  var constante = document.getElementById('constante').value;

  var calculo = (Number(od) * Number(dilucion) * Number(constante)) / 1000;

  $("#resultado").html(calculo);
}