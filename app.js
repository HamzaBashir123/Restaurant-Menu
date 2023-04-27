const btnArr = ["all", "breakfast", "lunch", "shakes", "dinner"];

const btn = document.querySelector(".btn-container");
const btnempty = [];

btnArr.forEach((item) => {
  let string = `<button class="filter-btn">${item}</button>`;
  btnempty.push(string);
});
btn.innerHTML = btnempty.join("");

// Button category Section
const allBtn = document.querySelectorAll(".filter-btn");
allBtn.forEach((btnText) => {
  let newArry = [];
  btnText.addEventListener("click", () => {
    for (i = 0; i < menu.length; i++) {
      console.log(menu[i].category);
      if (menu[i].category == btnText.innerHTML) {
        console.log(menu[i]);
        newArry.push(menu[i]);
      }
    }

    displayMenuItems(newArry);
  });
});

const allBtn1 = document.querySelector(".filter-btn");
allBtn1.addEventListener("click", () => {
  displayMenuItems(menu);
});

// Content Area
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./assets/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const contentItems = document.querySelector(".item-section");

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div class="col-lg-6 col=md-6 col-sm-12 d-flex pb-5  "> 
    <div class="col-6 imgSection">
        <img src=${item.img} alt=${item.title}>
    </div>
    <div class="col-6">
       <div class="col-12 d-flex justify-content-between contentSection">
        <h5 class="foodName">${item.title}</h5>
        <span class="price">${item.price}</span>
       </div> 
       <div class="col-12 contentSectionbuttom">
        <p class="para">${item.desc}</p>

       </div>
    </div>
</div>`;
  });

  contentItems.innerHTML = displayMenu.join("");
}
