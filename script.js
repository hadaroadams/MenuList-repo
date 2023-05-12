console.log("hello word")
const buttons = document.querySelectorAll('button')
let menuSection =document.querySelector('main')

const menu=[
    {
        id: 1,
        title:'Buttermilk pancakes',
        price:'15.99',
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        image:"./assert/item-1.jpeg",
        category:"Breakfast"
    },
     {
        id: 2,
        title:'Diner Double',
        price:'6.99',
        desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        image:"./assert/item-2.jpeg",
        category:"Lunch"
    },
     {
        id: 3,
        title:'Godzilla Milkshake',
        price:'16.99',
        desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        image:"./assert/item-3.jpeg",
        category:"Shakes"
    },
     {
        id: 4,
        title:'Country Delight',
        price:'20.99',
        desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
        image:"./assert/item-4.jpeg",
        category:"Breakfast"
    },
     {
        id: 5,
        title:'Egg Attack',
        price:'22.99',
        desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        image:"./assert/item-5.jpeg",
        category:"Lunch"
    },
     {
        id: 6,
        title:'Oreo Dream',
        price:'18.99',
        desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday.",
        image:"./assert/item-6.jpeg",
        category:"Shakes"
    },
     {
        id: 7,
        title:'Bacon Overflow',
        price:'18.99',
        desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        image:"./assert/item-7.jpeg",
        category:"Breakfast"
    },
     {
        id: 8,
        title:'American Classic',
        price:'17.99',
        desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        image:"./assert/item-8.jpeg",
        category:"Lunch"
    }, 
     {
        id: 9,
        title:'Quarantine Buddy',
        price:'21.99',
        desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        image:"./assert/item-9.jpeg",
        category:"Shakes"
    },
     {
        id: 10,
        title:'Steak Dinner',
        price:'14.99',
        desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.",
        image:"./assert/item-10.jpeg",
        category:"Dinner"
    },
]

    // for(i=0; i<=10;i++){
    //     menuItem.firstElementChild.src=menu[i].image
    // }
function Display(tit,pric,des,img){
    return  `<article class="menu_item">
            <img src="${img}" class="menu_image">
            <div class="menu_info">
                <div class="heading">
                    <h4>${tit}</h4>
                    <h4>$${pric}</h4>
                </div>
                <p>
                ${des}
                </p>
            </div>
        </article>
        ` 
}
// the all function runs first after the page reloads
window.addEventListener("DOMContentLoaded",all)
function all(){
   let all = menu.map((item)=>{
        let list= Display(item.title,item.price,item.desc,item.image) ;    
        return list
    })
// the join("") take away the comma in in the array
        menuSection.innerHTML = all.join('')
}
function subMenu(categ){
   let remaining= menu.map((item)=>{
    //map array mathod is acting like a filter method
    if(item.category== categ){
        let list = Display(item.title,item.price,item.desc,item.image)
        return list
    }
   })
   menuSection.innerHTML= remaining.join("")
}

buttons.forEach((btn)=>{
    btn.onclick=()=>{
       switch(btn.id){
        case "all":
            all()
            console.log('all');
            break;
        case "breakFast":
            subMenu("Breakfast")
            console.log('breakFast');
            break;
        case "lunch":
            subMenu("Lunch")
            console.log('lunch');
            break;
        case "shakes":
            subMenu("Shakes")
            console.log('shakes');
            break;
        case "dinner":
            subMenu('Dinner')
            console.log('dinner');
            break;
        default:
            console.log("all")
       }
    }
})