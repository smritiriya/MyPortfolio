const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });


const menuBtn= document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu =document.querySelector('nav .container ul')

menuBtn.addEventListener('click',()=>{
  menu.style.display= 'block';
  menuBtn.style.display='none';
  closeBtn.style.display='inline-block';
})
//hide
closeBtn.addEventListener('click',()=>{
  menu.style.display= 'none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';


})
const navItems=menu.querySelectorAll('li');
const changeActiveItem =() =>{
  navItems.forEach(item=>{
    const link =item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item=>{
  const link=item.querySelector('a');
  link.addEventListener('click',()=>{
    changeActiveItem();
    link.classList.add('active');
  })
})

// read more------------------------
const readmorebtn=document.querySelector('.read-more');
const readMoreContent= document.querySelector('.read-more-content');

readmorebtn.addEventListener('click',()=>{
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readmorebtn.textContent="showLess";
  }
  else{
    readmorebtn.textContent="show more";

  }
})

//show-hide skills

const skillsitems=document.querySelectorAll('section.skills .skill');

skillsitems.forEach(skill =>{
  skill.querySelector('.head').addEventListener('click',() => {
    skill.querySelector('.items').classList.toggle('show-items');
  })
})