///////////////////////////////////
//Sidebar functionality module v1.5
//2019 by Tumyr
//
/*This module is dependent of a CSS class defined in nav.settings. Default is .hidden. Be sure to add it to your CSS. Copy to css --> .hidden {display: none;}
The event and the class identifier for the list can be changed in the nav.settings section.
The setup searches for <BUTTON> in pairs and toggles between them. Also toggles the <UL> associated with the button pair.
Please contact me if you have any questions with regards to the code.
*/

let nav = {
    settings: {
        listenType: 'click',
        mainClass: 'cnavig',
        togClass: 'hidden',
    },
    
init() {
    //The main class identifier
    let x = document.getElementsByClassName(this.settings.mainClass);
    let btn = x[0].getElementsByTagName('button');
    let ul = x[0].getElementsByTagName('ul');
    for (let i=0; i < btn.length; i++) {
        if (i % 2 !== 0) {
            btn[i].classList.toggle(this.settings.togClass);
            btn[i].addEventListener(this.settings.listenType, this.onEvent.bind(this, btn[i], btn[i-1], ul[Math.ceil(i/2)]));
        } else {
            btn[i].addEventListener(this.settings.listenType, this.onEvent.bind(this, btn[i], btn[i+1],ul[i/2+1]));
            if(ul[(i/2+2)])ul[(i/2+2)].classList.toggle(this.settings.togClass);
        }
    }
    ul[1].classList.toggle(this.settings.togClass)
},

//The result of the event listeners when triggered
onEvent(el, el2, el3, el4) {
    if (el) {el.classList.toggle(this.settings.togClass)};
    if (el2) {el2.classList.toggle(this.settings.togClass)};
    if (el3 && el4) {el3.classList.toggle(this.settings.togClass)};
    }
}

//initialize nav
nav.init();



