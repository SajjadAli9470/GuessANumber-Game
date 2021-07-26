// for Mobile Menu

let MenuOpen = false;

function MenuIcon(x) {
  if (MenuOpen == false) {
    x.classList.toggle("change");
    document.querySelector(".nav").style.height = "47vh";
    document.getElementById("MenueDisplay").style.display = "block";
    MenuOpen = true;
  } else {
    x.classList.toggle("change");
    document.querySelector(".nav").style.height = "11vh";
    document.getElementById("MenueDisplay").style.display = "none";
    MenuOpen = false;
  }
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// Sticky Header
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// for sticky sider social menu bar
var bar = document.querySelector(".container_social");
var icons = document.querySelector(".social_icons");

bar.addEventListener("mouseenter", function () {
  bar.style.display = "none";
  icons.style.display = "block";
});
icons.addEventListener("mouseleave", function () {
  bar.style.display = "block";
  icons.style.display = "none";
});

// to check load more

const loadmore = document.querySelector("#loadmore");
const elementList = [
  ...document.querySelectorAll(".content_list .content_item"),
];
if (elementList.length <= 4) {
    loadmore.style.display = "none";
  }

let currentItems = 4;

loadmore.addEventListener("click", (e) => {
  
  
  for (let i = currentItems; i < currentItems + 2; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "flex";
    }
  }
  currentItems += 2;

  // Load more button will be hidden after content_list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});

// dispaly clicked post

let contentList_Children = document.querySelector(".content_list").children;

for (let i = 0; i <= contentList_Children.length; i++) {
  // console.log(contentList_Children[i]);
}

// Childern 0 for thumbnail purpose
// Childern 1 is content showing
// children 1-> children 0  for more text
// children 1-> children 1  for read more

function p_show(x) {

  var readMore = x.children[1].children[2];
  if (readMore.textContent === "Read more...") {
    x.style.display = "Block";
    x.children[1].children[1].style.display = "inline";
    
    x.classList.remove("post");

    for (let i = 0; i < contentList_Children.length; i++) {
      if (contentList_Children[i] != x) {
        contentList_Children[i].style.display = "none";
      }
    }
    // document.querySelector(".thumbnail").style.padding="0%";
    document.querySelector(".thumbnail").style.height="30rem";
    document.querySelector(".thumbnail").style.width="98%";
    document.querySelector(".thumbnail_pic").style.height="30rem";
    document.querySelector(".thumbnail_pic").style.width="100%";
    document.querySelector(".tutorials_topic").style.display="none";
    readMore.textContent = "Read less...";
    console.log(x.children[1].children[0]);
    x.children[1].children[0].style.display="none";
  } else {
    if(x.children[1].children[1].style.display == "none"){
    x.children[1].children[0].style.display="";
    document.querySelector(".tutorials_topic").style.display="Block"; 
    readMore.textContent = "Read more...";
    document.querySelector(".thumbnail_pic").style.height="11rem";
    document.querySelector(".thumbnail_pic").style.width="11rem";
    document.querySelector(".thumbnail").style.height="11rem";
    document.querySelector(".thumbnail").style.width="11rem";
  }
  }
}

const ItemsToHide = [...document.querySelectorAll(".more_text")];

function p_hide(y) {
  if (y.textContent == "Read less...") {

    for (let i = 0; i < contentList_Children.length; i++) {

      contentList_Children[i].classList.add("post");
      contentList_Children[i].style.display = "flex";
    }

    for (let i = 0; i < ItemsToHide.length; i++) {
      ItemsToHide[i].style.display = "none";
    }
  }
}
function Aboutme(){
  location.href = "/0-ProjectDesign/About.html";
}



