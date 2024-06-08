function changeTypeGrass() {

    const img = document.getElementById("myImage"); //Armazenamento o conteúdo da imagem

    const currentSrc = img.getAttribute("src"); //Pegando o atributo SRC da imagem para trabalhar a troca da mesma

    if(currentSrc === 'pokemon0.png'){

        img.setAttribute("src", "pokemon7.png")
    }
    else{
        img.setAttribute("src", "pokemon0.png")
    }
}

function changeTypeFire() {

    const img =  document.getElementById("typeFire"); //Pegando o conteúdo da imagem

    const currentSrc1 = img.getAttribute("src"); //Pegando o atributo SRC da imagem 

    if(currentSrc1 === 'pokemon2.png'){

        img.setAttribute("src", "pokemon8.png");
    }
    else{
        img.setAttribute("src", "pokemon2.png");
    }
}




















function changeTypeWater() {
    const img = document.getElementById("typeWater"); //Pegando o conteúdo da imagem

    const currentSrc2 = img.getAttribute("src"); //Pegando o atributo SRC da imagem

    if(currentSrc2 === 'pokemon3.png') {

        img.setAttribute("src", "pokemon9.png");
    }
    else{

        img.setAttribute("src", "pokemon3.png");
    }
}