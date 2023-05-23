(function () {
    let navbar = document.querySelector('#navbar'); //seleccionamos navbar
    let main = document.querySelector('main'); //seleccionasmos el main  porq si solo seleccionamos el navbar quedaria un espacio 
    let navbarHeight = navbar.getBoundingClientRect().height; //nos da la altura del navbar (lo que ocupa de espacio)
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos; //nso perimite guardar la posicion de la venatan
    let isFixed = false;
    
    function updatePos () {
        windowPos = window.scrollY;
    }

    function onScroll () {

        updatePos();

        console.log(windowPos, breakpoint);

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + 'px; ';

             } else if (windowPos < breakpoint  && !isFixed) {
                navbar.classList.remove('navbar-fixed');
                main.style.cssText = "margin-top: " + 0;
                isFixed = false;

             } 
            
            
  }
   

  document.addEventListener ('scroll', onScroll);


})()