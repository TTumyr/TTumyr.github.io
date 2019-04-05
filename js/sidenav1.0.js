///////////////////////////////////
//Sidebar functionality module v1.0
//2019 by Tumyr
//
/*This module is dependent of .hidden. Copy and paste this into your CSS stylesheet --> .hidden {display: none;}
Setup can be customied with the elements in the nav object. the IDs are made up of "id+separator+index+subindex+button/menu".
Example with the default values: id="sn-0-0-minus" = {id,separator,arrayindex,separator,subarrayindex,btnTwo}.
Please contact me if you have any questions with regards to the code.
*/

function NavDefault(id, btnOne, btnTwo, sub) {
        this.id = id,
        this.btnOne = btnOne,
        this.btnTwo = btnTwo,
        this.sub = []
    }

let nav = {
    id: 'sn',
    btnOne: 'plus',
    btnTwo: 'minus',
    separator: '-',
    menu: 'menu',
    listenOnId: 0,
    listenOnBtnOne: 1,
    listenOnBtnTwo: 1,
    listenType: 'click',
    fLayAmount: 5,
    sLayAmount: 5,
    a: [],
    init() {
        //Getting elements from HTML and putting them into the nav object
        for(let i=0; i < this.fLayAmount; i++) {
            let fid = `${this.id}${this.separator}${i}`;
            let fbo = `${this.id}${this.separator}${i}${this.separator}${this.btnOne}`;
            let fbt = `${this.id}${this.separator}${i}${this.separator}${this.btnTwo}`;
            let fidm = `${this.id}${this.separator}${i}${this.separator}${this.menu}`;            
            nav.a.push(new NavDefault(this.getEl(fid), this.getEl(fbo), this.getEl(fbt)));
            //adding listeners to first level elements  -- type is defined in nav.listType
            this.exeInit(this.listenOnId, this.getEl(fid));
            this.exeInit(this.listenOnBtnOne, this.getEl(fbo), this.getEl(fbt), this.getEl(fidm));
            this.exeInit(this.listenOnBtnTwo, this.getEl(fbt), this.getEl(fbo), this.getEl(fidm));

            for(let j=0; j < this.sLayAmount; j++){
                let fids = `${this.id}${this.separator}${i}${this.separator}${j}`;
                let fbos = `${this.id}${this.separator}${i}${this.separator}${j}${this.separator}${this.btnOne}`;
                let fbts = `${this.id}${this.separator}${i}${this.separator}${j}${this.separator}${this.btnTwo}`;
                let fidms = `${this.id}${this.separator}${i}${this.separator}${j}${this.separator}${this.menu}`; 
                nav.a[i].sub.push(new NavDefault(this.getEl(fids), this.getEl(fbos), this.getEl(fbts)));
                //adding listeners to second layer elements
                this.exeInit(this.listenOnId, this.getEl(fids));
                this.exeInit(this.listenOnBtnOne, this.getEl(fbos), this.getEl(fbts), this.getEl(fidms));
                this.exeInit(this.listenOnBtnOne, this.getEl(fbts), this.getEl(fbos), this.getEl(fidms));           
            }
        }
    },

    //defines document.getElement
    getEl(el) {
        return document.getElementById(`${el}`);
    },

    //checks if elements exist and executes accordingly
    exeInit(cond, el, el2, el3, el4) {
        if(cond === 1 && el) {
            this.addListen(el, el, el2, el3, el4); 
        }
    },

    //adds listeners
    addListen(el, el2, el3, el4 ) {
        el.addEventListener(this.listenType, this.onEvent.bind(this, el2, el3, el4));
    },

    //result of event
    onEvent(el, el2, el3) {
        if (el) {el.classList.toggle('hidden')};
        if (el2) {el2.classList.toggle('hidden')};
        if (el3) {el3.classList.toggle('hidden')};
    }
}

//initialize nav
nav.init();



