//search 

let searchBtn = document.querySelector('.header__search-btn');
let search = document.querySelector('.header__search');
let searchClose = document.querySelector('.header__search-btn--close ');
let searchInput = document.querySelector('.header__search-input');

searchBtn.addEventListener('click', function(){
  search.classList.add('show');
  searchInput.focus();

});
searchClose.addEventListener('click', function(){
  search.classList.remove('show')
});
document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == search || search.contains(target);
  const its_btnMenu = target == searchBtn;
  const menu_is_active = search.classList.contains("show");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    search.classList.remove('show')
  }
});

// slider

$(function(){
  $('.category__slider').slick({
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '<button class="category__slider-btn category__slider-prev"><img  src="images/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button class="category__slider-btn category__slider-next"><img src="images/arrow-next.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
      
  });
});


//slick-slider

$(function(){
  $('.additions__all').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.additions__add').slick({
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  $('.additions__like').slick({
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.additions__viewed').slick({
    slidesToShow: 4,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

//dropdown menu 

let  dropdownBtn = document.querySelectorAll('.dropdown-btn');
let  dropdownMenu = document.querySelectorAll('.dropdown-content');
let items = document.querySelectorAll('.dropdown-list__item');
let selectedItem = document.getElementById('selected-currency');

window.addEventListener('click', function(){
  closeMenu()
});


dropdownBtn.forEach((button) => button.addEventListener('click', e => {
  e.stopPropagation()
  dropdownMenu.forEach((item) => {
    if (item.querySelector('.dropdown-btn')!== dropdownBtn){
      item.parentElement.classList.remove('open');
    }
  })
  if(!button.classList.contains('open')){
    dropdownBtn.forEach(el=>{ el.classList.remove('open'); });
    button.parentElement.classList.add('open');
    button.classList.add('open');
  }
  else if(button.classList.contains('open')){
    button.parentElement.classList.remove('open');
    button.classList.remove('open');
  } 
}));

items.forEach((item )=> item.addEventListener('click', itemClickHandler));

function closeMenu(){
  dropdownMenu.forEach((item) => item.classList.remove('open'));
  dropdownBtn.forEach((item) => {
    item.parentElement.classList.remove('open')
    item.classList.remove('open')});
};

function itemClickHandler(e){
  let text = this.innerText;
  let select = this.closest('.dropdown');
  const target = e.currentTarget;
  let currentText = select.querySelector('.drop__current');
    
  e.stopPropagation()
  currentText.innerText = text;
  if (selectedItem.innerText === currentText.innerText){
    items.forEach((item) => item.classList.remove('hide'))
    target.classList.add('hide')
  }
  
  select.classList.remove('active');
  items.forEach((item) => item.classList.remove('active'))
  e.target.classList.add('active')
  closeMenu()
};


//drop nav
const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const headerBg = document.querySelector('.header');

const hideMenu = (event) => {
  event.stopPropagation();
  menu.classList.remove('menu__active');
  menuBtn.classList.remove('btn__active');
  // headerBg.classList.remove('backgoung-grey');
  // document.body.style.position = 'static';
}

const close = (event) => !menu.contains(event.target) && hideMenu(event);

menuBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.toggle('menu__active');
  menuBtn.classList.toggle('btn__active');
  // headerBg.classList.toggle('backgoung-grey');
  
  // if(menu.classList.contains('menu__active') && window.matchMedia("(max-width: 768px)").matches){
  //   document.body.style.position = 'fixed';
  // }
  // else document.body.style.position = 'static';
});

window.addEventListener('click', close);


  //product images

  const chooseImage = document.querySelectorAll('.product__choose-btn');
  const contentImage = document.querySelectorAll('.product__img');

  chooseImage.forEach(function(element){
    element.addEventListener('click', open)
  })

  function open(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseImage.forEach(function(item) {
        item.classList.remove('product__choose-btn--active');
    })

    target.classList.add('product__choose-btn--active');

    contentImage.forEach(function(item) {
        item.classList.remove('product__img--active');
    })    

  contentActive.forEach(function(item) {
      item.classList.add('product__img--active');
  })
}

//footer dropdown

const footerDropBtn = document.querySelectorAll('.footer__item-title');
const footerDropcontent = document.querySelectorAll('.footer__item-list');
const footerDrop = document.querySelectorAll('.footer__item');

footerDropBtn.forEach((item) => item.addEventListener("click", (e) => {
   e.target.parentElement.classList.toggle('open');
  })
);
//choose color

const chooseColor = document.querySelectorAll('.product__color-item');
const contentColor = document.querySelectorAll('.product__color-description-item');

chooseColor.forEach(function(element){
  element.addEventListener('click', changeColor)
})

function changeColor(event) {
  const target = event.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item) {
      item.classList.remove('product__color-item--active');
  })

  target.classList.add('product__color-item--active');

  contentColor.forEach(function(item) {
      item.classList.remove('product__color-description-item--active');
  })    

  contentActive.forEach(function(item) {
      item.classList.add('product__color-description-item--active');
  })
};

//catalog drop
if(
  (document.querySelectorAll('.aside-filter').length > 0)
&& (document.querySelectorAll('.aside-filter__title').length > 0)
){
const catalogDrop = document.querySelector('.aside-filter');
const catalogDropBtn = document.querySelector('.aside-filter__title');

catalogDropBtn.addEventListener("click", function(){
  catalogDrop.classList.toggle('open');
});}





//scroll header
if(
  (document.querySelectorAll('.header-fixed').length > 0)
&& (document.querySelectorAll('.banner').length > 0)
){
const header = document.querySelector('.header-fixed');
const defaultOffset = 50;
const banner = document.querySelector('.banner');
const bannerHeight = banner.offsetHeight;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop ;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if( window.matchMedia("(min-width: 1200px)").matches){
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
  // scroll down
  header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide() && window.pageYOffset <= bannerHeight) {
    // scroll up
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
  }
  
});
}




// basket

//отступ перед тысячами грн

if(
  (document.querySelectorAll('#basket').length > 0)
&& (document.querySelectorAll('.basket__item').length > 0)
){
const formatNumber = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');


const totalPriceWrapper = document.getElementById('total-price');

const ACTION = {
  PLUS: 'plus',
  MINUS:  'minus',
  REMOVE:  'remove',
};

const getItemSubTotalPrice = (input) => Number(input.value) * Number(input.dataset.price);
let totalSum = document.getElementById('total'); 

const setTotalPrice = (value) => {
  totalPriceWrapper.textContent = formatNumber(value);
  totalPriceWrapper.dataset.value = value;
  totalSum.innerHTML = totalPriceWrapper.dataset.value;
  totalSum.innerHTML = formatNumber(value);
}

const init = () => {
  let totalCost = 0;

  [...document.querySelectorAll('.basket__item')].forEach((basketItem) =>{
    totalCost += getItemSubTotalPrice(basketItem.querySelector('.input'));

  });

  setTotalPrice(totalCost)
};



const calculateSeparateItem = (basketItem, action) => {
  const input = basketItem.querySelector('.input');
  
  switch (action) {
    case ACTION.REMOVE:
      setTotalPrice(Number(totalPriceWrapper.dataset.value) - (Number(input.dataset.price) * input.value));
      input.value = 0;
      break; 
    case ACTION.PLUS:
      input.value++;
      setTotalPrice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
      break;
    case ACTION.MINUS:
      input.value--;
      setTotalPrice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
      break; 
    
  }

  basketItem.querySelector('.subtotal').textContent = `${formatNumber(getItemSubTotalPrice(input))}  грн`;
};

document.getElementById('basket').addEventListener('click', (event) =>{
  if (event.target.classList.contains('remove')) {
    calculateSeparateItem(
      event.target.closest('.basket__item'),
      ACTION.REMOVE
    );
    event.target.closest('.basket__item').style.display = 'none';
  }
  
  if (event.target.classList.contains('btn_minus')) {
    const input = event.target.closest('.basket__item').querySelector('.input');
    if (Number(input.value) !== 0) {
      calculateSeparateItem(
        event.target.closest('.basket__item'),
        ACTION.MINUS
      );
    }
  }
  if (event.target.classList.contains('btn_plus')) {
    calculateSeparateItem(
      event.target.closest('.basket__item'),
      ACTION.PLUS
    );
  }
  
});

init();
}

//итоговая скидка
if(
  (document.querySelectorAll('#sum-bonus').length > 0)
&& (document.querySelectorAll('#total-bonus').length > 0)
){
let sumOfBonus = document.getElementById('sum-bonus'); 
let totalBonus = document.getElementById('total-bonus'); 


sumOfBonus.addEventListener( "change", getSum);

function getSum(event) {
  totalBonus.innerHTML = Number(event.target.value);
  totalSum.innerHTML = formatNumber(totalPriceWrapper.dataset.value - totalBonus.innerHTML);
};
}



//маска номера телефона 
if(
  (document.querySelectorAll('#phone-mask').length > 0)
&& (document.querySelectorAll('#sum-bonus').length > 0)
){
IMask(
  document.getElementById('phone-mask'),
  {
    mask: '+{38}(000)000-00-00'
  }
)
IMask(
  document.getElementById('sum-bonus'),
  {
    mask: Number,
    min: 0,
    max: 1000,
    thousandsSeparator: ' '
  }
);
}
  


 





  



