"use strict"

document.addEventListener('DOMContentLoaded', () =>{

    //menu-burger

    const menu = document.querySelector('.menu-toggle');

    menu.addEventListener('click', (e) => {
        e.preventDefault();
        if(menu.classList.contains('menu-toggle--closed')){
            menu.classList.remove('menu-toggle--closed');
            menu.classList.add('menu-toggle--opened');
        }else{
            menu.classList.remove('menu-toggle--opened');
            menu.classList.add('menu-toggle--closed');
        }
    })

    //skills circles

    const mySkillsItems = document.querySelectorAll('.skills__wrapper');

    mySkillsItems.forEach(element =>{
        let mySkillsPercent = element.querySelector('.skills__percent').dataset.percent;
        element.style.setProperty('--value', mySkillsPercent);
    });

    const language = document.querySelectorAll('.languages__percent');

    //language stars

    language.forEach(element => {
        let languagePercent = element.dataset.level;

        const ul = document.createElement('ul');
        ul.classList.add('language__level-list');
        switch(languagePercent){
            case '3':
                    ul.setAttribute('title', 'Intermediate level');
                    break;
            case '5':
                    ul.setAttribute('title', 'Native language');
                    break;
        }
        element.append(ul);

        for(let i = 0; i < 5; i++){
            const li = document.createElement('li');
            li.classList.add('language__level');
            if(languagePercent - 1 >= i){
                li.classList.add('language__level--active');
            }
            ul.append(li);
        }    
    })

});