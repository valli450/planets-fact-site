/* Mobile menu */
function openMenu(){
    if(!document.querySelector(".showmenu")){
        document.querySelector(".header__planets").classList.add('showmenu');
    }else{
        document.body.style.position = "fixed";
        document.querySelector(".header__planets").classList.add('hidemenu');
        document.querySelector(".header__planets").classList.remove('showmenu');
        setTimeout(function(){
            document.querySelector(".header__planets").classList.remove('hidemenu');
            setTimeout(function(){
                document.body.style.position = "static";
            }, 300)
        }, 600)
    }
}

/* More info */
let list = [];
let geologyCheck = false;
let structureCheck = false;

function fetchData(){ 
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            list = data;
        })
}

function anotherInfo(name, moreInfo){
    const blockList = ['overview', 'structure', 'geology'];
    blockList.forEach(item => {
        document.querySelector(`.${item}`).classList.remove('selected');
    })
    document.querySelector(`.${moreInfo}`).classList.add('selected');

    list.forEach(planet => {
        if(planet.name === name){
            switch(moreInfo){
                case 'overview':
                    showresult(planet.overview, planet.images);
                    break;
                case 'structure': 
                    structureCheck = true;
                    showresult(planet.structure, planet.images);
                    break;
                case 'geology':
                    geologyCheck = true;
                    showresult(planet.geology, planet.images);
                    break;
                default:
                    break;

            }
        }
    })
    
}

function showresult(obj, img){    
    document.querySelector(".cover__block").style.opacity = '1';
    document.querySelector(".cover__block").style.zIndex = '2';
    document.body.style.position = 'fixed';
    hello()

    setTimeout(function(){
        document.querySelector(".text__block").innerHTML = obj.content;
        document.querySelector(".wiki-link").href = obj.source;
        if(geologyCheck){
            document.querySelector(".content__about__image").innerHTML = `
                <img  src="${img.planet}" alt="planet image" class="planet-image" />
                <img src="${img.geology}" alt="planet geology" class="image-geology" />
            `
        }else if(structureCheck){
            document.querySelector(".content__about__image").innerHTML = `
                <img  src="${img.internal}" alt="planet image" class="planet-image" />
            `
        }else{
            document.querySelector(".content__about__image").innerHTML = `
                <img  src="${img.planet}" alt="planet image" class="planet-image" />
            `
        }

        geologyCheck = false;
        structureCheck = false;
    }, 600)

}


let number = 0;
let lap = 0;
const idList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'];

function hello(){
    setTimeout(function(){
        idList.forEach(id => {
            document.getElementById(id).style.fontSize = '20px';
        })
        if(number === 0){
            document.getElementById("seven").style.fontSize = '25px';
            document.getElementById("zero").style.fontSize = '30px';
            document.getElementById("one").style.fontSize = '25px';
            number++;
        }else if(number === 1){
            document.getElementById("zero").style.fontSize = '25px';
            document.getElementById("one").style.fontSize = '30px';
            document.getElementById("two").style.fontSize = '25px';
            number++;
        }else if(number === 2){
            document.getElementById("one").style.fontSize = '25px';
            document.getElementById("two").style.fontSize = '30px';
            document.getElementById("three").style.fontSize = '25px';
            number++;
        }else if(number === 3){
            document.getElementById("two").style.fontSize = '25px';
            document.getElementById("three").style.fontSize = '30px';
            document.getElementById("four").style.fontSize = '25px';
            number++;
        }else if(number === 4){
            document.getElementById("three").style.fontSize = '25px';
            document.getElementById("four").style.fontSize = '30px';
            document.getElementById("five").style.fontSize = '25px';
            number++;
        }else if(number === 5){
            document.getElementById("four").style.fontSize = '25px';
            document.getElementById("five").style.fontSize = '30px';
            document.getElementById("six").style.fontSize = '25px';
            number++;
        }else if(number === 6){
            document.getElementById("five").style.fontSize = '25px';
            document.getElementById("six").style.fontSize = '30px';
            document.getElementById("seven").style.fontSize = '25px';
            number++;
        }else{
            document.getElementById("six").style.fontSize = '25px';
            document.getElementById("seven").style.fontSize = '30px';
            document.getElementById("zero").style.fontSize = '25px';
            number = 0;
        }
        lap++
        if(lap < 25){
            hello();
        }else{
            document.querySelector(".cover__block").style.opacity = '0';
            document.querySelector(".cover__block").style.zIndex = '-2';
            document.body.style.position = 'static';
            lap = 0;
        }
    }, 80)
}
