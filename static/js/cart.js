
let updateBtns = document.querySelectorAll(".update-cart");
// console.log(updateBtns);
updateBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = btn.dataset.product;
    const action = btn.dataset.action;
    console.log("productId: ", productId, "action: ", action);
    if (user === "AnonymousUser") {
      console.log("User is not authenticated");
    } else {
      updateUserOrder(productId, action);
    }
  });
});

function updateUserOrder(productId, action) {
  var url = "/update_item/";
  console.log("User is logged in, sending data...");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify({ productId: productId, action: action }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data: ", data);
      location.reload();
    });
    
}


// Theme Switcher
const body = document.body;
const darkBtn = document.querySelector('.dark-btn');
const lightBtn = document.querySelector('.light-btn');

darkBtn.onclick = () =>{
  body.classList.replace('light','dark');
  darkBtn.classList.add('hidden')
  lightBtn.classList.remove('hidden')
  localStorage.setItem('theme','dark')
};

lightBtn.onclick = () =>{
  body.classList.replace('dark','light');
  darkBtn.classList.remove('hidden')
  lightBtn.classList.add('hidden')
  localStorage.setItem('theme','light')
};

// saving theme in local storage

// const theme = localStorage.getItem('theme');

if(theme){
  document.body.classList.add(theme);
  if(theme === 'dark'){
    darkBtn.classList.add('hidden')
  }else{
    lightBtn.classList.add('hidden');
  }
}

// large image display

const imgCont = document.querySelectorAll('.image-container');
const dispCont = document.querySelector('.display-img-container')
const img = document.querySelector('.image-d');
const displayContainer = document.querySelector('.display-image');
let close;
imgCont.forEach((cont)=>{
  cont.addEventListener('click',(e)=>{
    displayContainer.style.display = "block";
    close = document.querySelector('.close');
    close.addEventListener('click',()=>{
      displayContainer.style.display = "none";
      // console.log("working");
    })
    img.src = e.target.currentSrc;
  })
})

// close.addEventListener('click',()=>{
//   displayContainer.style.display = "none";
//   // console.log("working");
// })