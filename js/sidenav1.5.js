///////////////////////////////////
//Sidebar functionality module v1.5
//2019 by TTumyr
//
/*This module is dependent of a CSS class defined in nav.settings. Default is .hidden. Be sure to add it to your CSS. Copy to css --> .hidden {display: none;}
Elements can be changed in nav.settings.
The setup searches for a 'button' in pairs and toggles between them. Also toggles the list associated with the button pair.
Consider using GetByClass if you want to add other <button> or <ul> elements inside the menu.
Please contact me if you have any questions with regards to the code.
*/

let nav = {
    settings: {
        listenType: 'click',
        mainClass: 'cnavig', //this is the root element identifier
        togClass: 'hidden',
        btnClass: 'bt-m',
        liClass: 'ul-m',
        btnTag: 'button',
        liTag: 'ul',
        getByTags: 1,
        getByClass: 1,
    },
    
init() {
    //Main class identifier
    let mainClass = document.getElementsByClassName(this.settings.mainClass);

    //get elements
    let inget = 0;
    let btnul;
    while(inget !== 2) {
        if(Array.isArray(btnul)) {
            if(btnul[0].length > 0 && btnul[1].length > 0) {
                inget=btnul[2];
                break;
            }
            else if(!btnul[0].length > 0 && !btnul[1].length > 0) inget=btnul[2];
        }
        btnul = this.getElem(mainClass, inget);
    }
    let btn = btnul[0];
    let ul = btnul[1];
    

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
    if (el) el.classList.toggle(this.settings.togClass);
    if (el2) el2.classList.toggle(this.settings.togClass);
    if (el3 && el4) el3.classList.toggle(this.settings.togClass);
    },
//Retrieves elements based on settings. Class has priority over tags
getElem(el, token) {
    if (this.settings.getByClass === 1 && token === 0) {
        let btn = el[0].getElementsByClassName(this.settings.btnClass);
        let ul = el[0].getElementsByClassName(this.settings.liClass);
        if(btn.length < 1) token = 1;
        return [btn, ul, token];
    } else if(this.settings.getByTags === 1) {
        let btn = el[0].getElementsByTagName(this.settings.btnTag);
        let ul = el[0].getElementsByTagName(this.settings.liTag);
        token = 2;
        return [btn, ul, token];
    }
},
} 

nav.init();



