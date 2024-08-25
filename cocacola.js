let cocacolawebsite=document.querySelector("#cocacola-website")
  let loadercocacola=document.querySelector(".loader-cocacola")
  cocacolawebsite.style.display="none"
  setTimeout(()=>{
  loadercocacola.style.display="none";
  let timeline= gsap.timeline()
 timeline.from(".main-text",{
    y:"-100%",
     opacity:-4,
    duration:1,
 })
  timeline.from(".cocacola-img img",{
  opacity:-5,
    duration:1,
   })
   timeline.from("header span",{
    y:-100,
    opacity:0,
    duration:0.5,
   })
   timeline.from(".nav-bar a",{
   scale:0,
    opacity:0,
    duration:0.3,
    stagger:0.5,
   })
  gsap.from(".slider",{
    scale:0,
    opacity:0,
    scrollTrigger:{
    trigger:"#alldrinks",
    scroller:"body",
    scrub:1,
    start:"top 10%" ,
    pin:true
    }
    })
    gsap.from(".cocacola-buy-products",{
        scale:0,
        opacity:0,
        scrollTrigger:{
         trigger:"#product-buy-section",
         scroller:"body",
         scrub:1,
         pin:true,
         start:"top 7%",
         }
         })
        
         gsap.from(".top-product img",{
           y:-200+"px",
           opacity:0,
           scrollTrigger:{
         trigger:"#cocacola-top-products",
         scroller:"body",
         scrub:1,
         duration:1,
         pin:true,
         start:"top 20%",
         }
         })
  cocacolawebsite.style.display="block"
  },8000)






let nav=document.querySelector("nav")
    let cross=document.querySelector("#cross")
    let menu=document.querySelector("#menu-bar");
    let headings_icon=document.querySelector(".headings-icon");
    let header=document.querySelector("header")
    menu.addEventListener("click",()=>{
        nav.style.display="flex"
        cross.style.display="block";
        headings_icon.style.display="none"
nav.classList.add("menu")
    })
    cross.addEventListener("click",()=>{
        nav.classList.remove("menu")
        cross.style.display="none"
        nav.style.display="none"
        headings_icon.style.display="inline-block"

    })
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 4;
    function loadShow(){
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(10px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 1 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(10px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 1 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }


let navlink=document.querySelectorAll("a");
    navlink.forEach((elm)=>{
        elm.addEventListener("click",(e)=>{
            for(let i=0;i<navlink.length;i++){
navlink[i].style.color="white"
            }
e.target.style.color="red"
        })
    }) 

  
    let colacolaproductsimgcolor=[
        {
            img:"cocacolaimges/cocacola-zerosugar.jpg",
            color:"crimson"
        
        },
        {
            img:"cocacolaimges/cocacola-free-diet.jpg",
            color:"#cc8a8a"
         },
        {
            img:"cocacolaimges/cocacola-calori-free.jpg",
             color:"orange"
        },
        {
            img:"cocacolaimges/cocacola-vanila.jpg",
             color:"#ffc107"
        },
        {
            img:"cocacolaimges/cocacola-cherry.jpg",
             color:"purple"
        },
        {
            img:"cocacolaimges/cocacola-citra.jpg",
             color:"#cddc39"
        },
    ]
    let productrightside=document.querySelector(".product-right-side")
  let colacolaproducts=document.querySelectorAll(".cocacola-product")
  colacolaproducts.forEach((elm,idx)=>{
    elm.addEventListener("click",()=>{
productrightside.firstElementChild.src=colacolaproductsimgcolor[idx].img;
for (let product of colacolaproducts) {
  product.style.boxShadow="none"  
}
elm.style.boxShadow=`0px 0px 5px 5px ${colacolaproductsimgcolor[idx].color}`
    })
  })

let cocacola_top_product_background=[
    {
        backgroundcolor:'linear-gradient(to top, green, white)'
    },
    {
        backgroundcolor:'linear-gradient(to top, orange, white)'
    },
    {
        backgroundcolor:'linear-gradient(to top,#16ea16, white)'
    },
    {
        backgroundcolor:'linear-gradient(to top,blue, white)'
    },
    {
        backgroundcolor:'linear-gradient(35deg, #9e9e9eab, #FFC107)'
    },
    {
        backgroundcolor:'linear-gradient(to top, #FF5722, #f4d8d8f2)'
    },
    {
        backgroundcolor:'linear-gradient(to top, #0b3d0d, #d5edba)'
    },
    {
        backgroundcolor:'linear-gradient(to top, #f3815db5, #7788e3b3)'
    },
    {
        backgroundcolor:'linear-gradient(to top, #236326, #4442421f)'
    },
    {
        backgroundcolor:'linear-gradient(to top, #b2e576, #fefefe)'
    },
]
let cocacolabest=document.querySelectorAll(".top-product")
cocacolabest.forEach((elm,idx)=>{
elm.style.background=cocacola_top_product_background[idx].backgroundcolor
})

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>350){
    header.style.position="sticky"
    header.style.top=0
    header.style.backgroundColor="black"
    header.style.zIndex=100;
    }
    else{
         header.style.position="static"
          header.style.backgroundColor="none"
          header.style.zIndex=500;
    }
  })
  
  
  let slider=document.querySelector(".testimonial-slider")
 let slide=document.querySelectorAll(".slide")
 let dot=document.querySelectorAll(".dot")
 let slidenum=1;
 let testimonialslider;
 const nextmovingslide=()=>{
   for(let i=0;i<=dot.length-1;i++){
      dot[i].style.backgroundColor="rgb(171, 167, 167)"
   }
   dot[slidenum].style.backgroundColor="red"
    slider.style.transform=`translateX(-${slidenum*100}%)`
    slidenum++;
 }
 const nextlastslide=()=>{
    slider.style.transform=`translateX(0px)`
    for(let i=0;i<=dot.length-1;i++){
      dot[i].style.backgroundColor="rgb(171, 167, 167)"
   }
   dot[0].style.backgroundColor="red"
slidenum=1;
 
 }
 autotestimonialslider();
 function autotestimonialslider(){
   testimonialslider=setInterval(()=>{
  if(slidenum<slide.length){
    nextmovingslide()
  }
else{
  nextlastslide()
}
},2500)
 }
 
slide.forEach((elm)=>{
   elm.addEventListener("mouseenter",(e)=>{
 clearInterval( testimonialslider)
   })
   elm.addEventListener("mouseout",(e)=>{
 autotestimonialslider()
   })

})
