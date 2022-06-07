    /*------------------
        Image Slider
    --------------------*/

    let indice = 1;
    let i;
    let j = 0;
    let itemPics = new Array(11);
    itemPics = document.getElementsByClassName('product__item__pic');
    let slides = new Array(itemPics.length);
    let arrayBarras = new Array(itemPics.length);

    for (i = 0; i < slides.length; i++) {
        slides[i] = document.getElementsByClassName('miSlider'+i);
        arrayBarras[i] = document.getElementsByClassName('barra'+i);
        for(let j = 0; j < 3; j++){
            slides[i][j].style.display = 'none';
        }
        for(let j = 0; j < 3; j++){
            arrayBarras[i][j].className = arrayBarras[i][j].className.replace(" barraActive", "");
        }
        slides[i][indice-1].style.display = 'block';
        arrayBarras[i][indice-1].className += ' barraActive';
    }
    

    function avanzaSlide(n, id) {
        muestraSlides(indice += n, id);
    }

    function posicionSlide(n, id) {
        muestraSlides(indice = n, id);
    }
    /*setInterval(function tiempo(){
        muestraSlides(indice+=1)
    },4000);*/

    function muestraSlides(n, id) {
        console.log(n,id)
        if(n > 3){
            indice = 1;
        }
        if(n < 1){
            indice = 2;
        }
        for(i = 0; i < 3; i++){
            slides[id][i].style.display = 'none';
        }
        for(i = 0; i < 3; i++){
            arrayBarras[id][i].className = arrayBarras[id][i].className.replace(" barraActive", "");
        }
    
        slides[id][indice-1].style.display = 'block';
        arrayBarras[id][indice-1].className += ' barraActive';


    }