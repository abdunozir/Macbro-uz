// all buttons

let hero_ram_option = document.querySelector('.hero-ram_option');
let hero_storage_option = document.querySelector('.hero-storage_option');
let total_price = document.querySelector('.total_price');
let Product_count = document.querySelector('.Product_count');
let product_count_add = 1;
let ramButtons = ``;

function fristLoopram() {
  macObj.ram.forEach((item) => {
    if (item.active == true) {
      ramButtons += `
<button type="button" class="${item.ramSize} ram${item.ramSize} ram-btn-style w-25 ram-btn ram-btn1" id="ram-btn">
  <h4>${item.ramSize}GB</h4>
</button>`;
    } else {
      ramButtons += `
<button type="button" class="${item.ramSize} ram${item.ramSize} w-25 ram-btn ram-btn1" id="ram-btn">
  <h4>${item.ramSize}GB</h4>
</button>`;
    }
  });

  hero_ram_option.innerHTML = ramButtons;
  ramButtons = '';
}

fristLoopram();

const ram_btn = document.querySelectorAll('.ram-btn');
ram_btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    for (let i = 0; i < macObj.ram.length; i++) {
      if (macObj.ram[i].ramSize == +e.currentTarget.classList[0]) {
        macObj.ram[i].active = true;
        document
          .querySelector('.ram-btn-style')
          .classList.remove('ram-btn-style');
        document
          .querySelector('.ram' + e.currentTarget.classList[0])
          .classList.add('ram-btn-style');
        product_count_add = 1;
        Product_count.innerHTML = product_count_add;
      } else {
        macObj.ram[i].active = false;
      }
    }
    storageFilter();
  });
  // price
  productPrice();
});

let storageCon = ``;
let storageBtnId = 0;
let countOfMemory = 0;
function storageFilter() {
  macObj.ram.forEach((item) => {
    if (item.active == true) {
      item.memory.forEach((el) => {
        storageBtnId++;
        if (el.active == true) {
          storageCon += `
          <button
          type="button " onclick="storageClick(event)"
          class="${storageBtnId} w-25 hero_storage-btn hero_storage-btn_style hero_storage-btn1"
          > <h4>${el.size}</h4> </button>`;
        } else {
          storageCon += `
          <button
          type="button " onclick="storageClick(event)"
          class="${storageBtnId} w-25 hero_storage-btn hero_storage-btn1"
          > <h4>${el.size}</h4> </button>`;
        }
      });
    }
  });

  hero_storage_option.innerHTML = storageCon;
  storageCon = '';
  countOfMemory = storageBtnId;
  storageBtnId = 0;
  // price
  productPrice();
}

storageFilter();
hero_storage_btn = document.querySelectorAll('.hero_storage-btn');

function storageClick(e) {
  // console.log(+e.currentTarget.classList[0] - 1);
  // tic the active to true
  macObj.ram.forEach((item) => {
    if (item.active == true) {
      item.memory.forEach((storage) => {
        if (
          item.memory[+e.currentTarget.classList[0] - 1].size === storage.size
        ) {
          storage.active = true;
          product_count_add = 1;
          Product_count.innerHTML = product_count_add;
        } else {
          storage.active = false;
        }
        console.log(storage);
      });
    }
  });

  // change the color of the button
  storageAddClass(e);
  // price
  productPrice();
}

// change the color of the button
function storageAddClass(e) {
  macObj.ram.forEach((item) => {
    item.memory.forEach((el) => {
      if (el.active == true) {
        document
          .querySelector('.hero_storage-btn_style')
          .classList.remove('hero_storage-btn_style');
        e.currentTarget.classList.add('hero_storage-btn_style');
        productPrice();
      }
    });
  });
}

function productPrice() {
  macObj.ram.forEach((item) => {
    if (item.active == true) {
      item.memory.forEach((el) => {
        if (el.active == true) {
          document.querySelector('.total_price').innerHTML =
            el.price.toLocaleString();
          document.querySelector('.chegirma').innerHTML = (
            el.price + 1000000
          ).toLocaleString();
        }
      });
    }
  });
}

productPrice();
let p = null;
let product_price = null;
function countAdd() {
  macObj.ram.forEach((item) => {
    if (item.active) {
      item.memory.forEach((el) => {
        if (el.active) {
          product_price = el.price;
          total_price.innerHTML = el.price;
          p = el.price;

          console.log(el.price);
        }
      });
    }
  });
}
countAdd();

function dec() {
  if (product_count_add > 1) {
    console.log(p, 'dawd');

    if (p - product_price > 0) {
      p = p - product_price;
    }
    product_count_add--;
    Product_count.innerHTML = product_count_add;
    total_price.innerHTML = p;
  }
}
function inc() {
  if (product_count_add <= 100) {
    countAdd();

    for (let i = 1; i <= product_count_add; i++) {
      p += product_price;
    }
    console.log(p, 'dawd');
    total_price.innerHTML = p;
    product_count_add++;
    Product_count.innerHTML = product_count_add;
  }
}
Product_count.innerHTML = product_count_add;

// product colors
let hero_color_option = document.querySelector('.hero-color_option');
let colored_btns = '';
let btn_count = 0;
macObj.colors.forEach((item) => {
  btn_count++;
  if (item.active == true) {
    colored_btns += `
  <button type="button " class="${item.id} colors-btn-style tilla color_btn hero_color-btn">
  <div class="color${btn_count}"></div>
  <h4 class="color-btn1">${item.name}</h4>
</button>`;
  } else {
    colored_btns += `
    <button type="button " class="${item.id} tilla color_btn hero_color-btn">
    <div class="color${btn_count}"></div>
    <h4 class="color-btn1">${item.name}</h4>
  </button>`;
  }
});

hero_color_option.innerHTML = colored_btns;
colored_btns = '';

// color option
let color_btn = document.querySelectorAll('.color_btn');

color_btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    macObj.colors.forEach((el) => {
      if (el.id == e.currentTarget.classList[0]) {
        el.active = true;
        if (document.querySelector('.colors-btn-style') !== null) {
          document
            .querySelector('.colors-btn-style')
            .classList.remove('colors-btn-style');
        }
        e.currentTarget.classList.add('colors-btn-style');
      } else {
        el.active = false;
        console.log(el);
      }
    });
    slider__img_call();
    slider__img_call1();
  });
});

// images
let hero_slider_buttons__wrapper = document.querySelector(
  '.hero_slider-buttons__wrapper'
);
let slide = document.querySelector('.slide');
let img_container = '';
let slider_img = '';
let img_count = 0;
function slider__img_call() {
  slider_img = '';
  img_container = '';
  img_count = 0;
  macObj.colors.forEach((item) => {
    if (item.active == true) {
      item.img.forEach((img) => {
        img_count++;
        img_container += `<div onclick="slidermove(event)" class="${img_count} id${img_count} hero-slider_btn ">
          <img
            src="${img}"
            alt=""
          />
        </div>`;
        slider_img += ` <div class="${img_count} hero-slider__img">
        <img
          src="${img}"
          alt=""
        />
    </div>`;
      });
    }
  });
  hero_slider_buttons__wrapper.innerHTML = img_container;
  slide.innerHTML = slider_img;
}

slider__img_call();

// onclick slider to move
function slidermove(e) {
  if (document.querySelector('.hero-selected_slider-option')) {
    document
      .querySelector('.hero-selected_slider-option')
      .classList.remove('hero-selected_slider-option');
  }
  e.currentTarget.classList.add('hero-selected_slider-option');
  slide.style.marginLeft =
    '-' + 350 * (+e.currentTarget.classList[0] - 1) + 'px';

  if (document.querySelector('.hero-slider__buttons').clientWidth == 270) {
    if (
      +e.currentTarget.classList[0] >= 3 &&
      +e.currentTarget.classList[0] !== 5
    ) {
      document.querySelector('.hero_slider-buttons__wrapper').style.marginLeft =
        '-' + 95 * (+e.currentTarget.classList[0] - 2) + 'px';
    } else if (+e.currentTarget.classList[0] == 2) {
      document.querySelector('.hero_slider-buttons__wrapper').style.marginLeft =
        '-' + 0 + 'px';
    } else if (+e.currentTarget.classList[0] == 1) {
      document.querySelector('.hero_slider-buttons__wrapper').style.marginLeft =
        95 + 'px';
    } else if (+e.currentTarget.classList[0] == 5) {
      document.querySelector('.hero_slider-buttons__wrapper').style.marginLeft =
        '-' + 95 * 3 + 'px';
    }
  } else {
    document.querySelector('.hero_slider-buttons__wrapper').style.marginLeft =
      '-' + 0 + 'px';
  }
}

document.querySelector('.id1').classList.add('hero-selected_slider-option');

// onclick slider to move modal
let hero_slider_buttons__wrapper_modal = document.querySelector(
  '.hero_slider-buttons__wrapper1'
);
let slide1 = document.querySelector('.slide1');
let img_container1 = '';
let slider_img1 = '';
let img_count1 = 0;
function slider__img_call1() {
  slider_img1 = '';
  img_container1 = '';
  img_count1 = 0;
  macObj.colors.forEach((item) => {
    if (item.active == true) {
      item.img.forEach((img) => {
        img_count1++;
        img_container1 += `<div onclick="slidermove1(event)" class="${img_count1} id${img_count} hero-slider_btn1 ">
          <img
            src="${img}"
            alt=""
          />
        </div>`;
        slider_img1 += ` <div class="${img_count1} hero-slider__img1">
        <img
          src="${img}"
          alt=""
        />
    </div>`;
      });
    }
  });
  hero_slider_buttons__wrapper_modal.innerHTML = img_container1;
  slide1.innerHTML = slider_img1;
}

slider__img_call1();
// 270 hero-slider__buttons
function slidermove1(e) {
  // console.log(e.currentTarget.classList[0]);
  if (document.querySelector('.hero-selected_slider-option1')) {
    document
      .querySelector('.hero-selected_slider-option1')
      .classList.remove('hero-selected_slider-option1');
  }
  if (document.querySelector('.slider_container1').clientWidth)
    e.currentTarget.classList.add('hero-selected_slider-option');
  slide1.style.marginLeft =
    '-' + 350 * (+e.currentTarget.classList[0] - 1) + 'px';

  if (document.querySelector('.hero-slider__buttons1').clientWidth == 360) {
    if (
      +e.currentTarget.classList[0] >= 3 &&
      +e.currentTarget.classList[0] !== 5
    ) {
      document.querySelector(
        '.hero_slider-buttons__wrapper1'
      ).style.marginLeft =
        '-' + 120 * (+e.currentTarget.classList[0] - 2) + 'px';
    } else if (+e.currentTarget.classList[0] == 2) {
      document.querySelector(
        '.hero_slider-buttons__wrapper1'
      ).style.marginLeft = '-' + 0 + 'px';
      console.log('ldsad');
    } else if (+e.currentTarget.classList[0] == 1) {
      document.querySelector(
        '.hero_slider-buttons__wrapper1'
      ).style.marginLeft = 120 + 'px';
      console.log('ldsad');
    } else if (+e.currentTarget.classList[0] == 5) {
      document.querySelector(
        '.hero_slider-buttons__wrapper1'
      ).style.marginLeft = '-' + 120 * 3 + 'px';
    }
  } else {
    document.querySelector('.hero_slider-buttons__wrapper1').style.marginLeft =
      '-' + 0 + 'px';
  }

  e.currentTarget.classList.add('hero-selected_slider-option1');
  if (+e.currentTarget.classList[0] == 1) {
    slide1.style.marginLeft = 70 + 'px';
  } else {
    slide1.style.marginLeft =
      '-' + 580 * (+e.currentTarget.classList[0] - 1) + 'px';
  }
}

function closeModal() {
  document.querySelector('.slider_hero_modal').style.display = 'none';
}

function openModal() {
  document.querySelector('.slider_hero_modal').style.display = 'flex';
}

// related products
let related_prodacts_list = document.querySelector('.related_prodacts_list');
let products_card = '';

macObj.colors.forEach((item) => {
  item.img.forEach((el) => {
    products_card += `<div class="related_product_card">
    <div class="card_img"><img src="${el}" alt=""></div>
    <div class="card_body">
      <a href="macbro.com">MacBOK PRO 11" WITH M1</a>
      <p >20 000 000 so'm</p>
    </div>
  </div>`;
  });
});
let related_products_slider_container = document.querySelector(
  '.related_products_slider_container'
);
related_prodacts_list.innerHTML = products_card;
console.log(related_prodacts_list.children.length);
let l = 0;
console.log(related_products_slider_container.clientWidth);

// left click btn to move slider body 650px
function left_click_slider() {
  if (l > 0) {
    l--;
    related_prodacts_list.style.marginLeft = '-' + 340 * l + 'px';
  } else {
    l = 0;
  }

  // right btn when the move end display none
  if (l == 0) document.querySelector('.slider_left').style.display = 'none';
  if (l < related_prodacts_list.children.length - 3) {
    document.querySelector('.slider_right').style.display = 'flex';
  } else if (l < related_prodacts_list.children.length - 2) {
    document.querySelector('.slider_right').style.display = 'flex';
  } else if (l < related_prodacts_list.children.length - 1) {
    document.querySelector('.slider_right').style.display = 'flex';
  }
}

if (l == 0) document.querySelector('.slider_left').style.display = 'none';

// right click btn to move slider of body
function right_click_slider(e) {
  if (related_products_slider_container.clientWidth == 650) {
    //   in small size of screen
    if (l !== related_prodacts_list.children.length - 2) {
      l++;
      document.querySelector('.slider_left').style.display = 'flex';

      related_prodacts_list.style.marginLeft = '-' + 340 * l + 'px';
    }
    if (l == related_prodacts_list.children.length - 2) {
      e.currentTarget.style.display = 'none';
    }
  } else if (related_products_slider_container.clientWidth == 340) {
    //  in medium size of screen
    if (l !== related_prodacts_list.children.length - 1) {
      l++;
      document.querySelector('.slider_left').style.display = 'flex';

      related_prodacts_list.style.marginLeft = '-' + 340 * l + 'px';
    }
    if (l == related_prodacts_list.children.length - 1) {
      e.currentTarget.style.display = 'none';
    }
  } else {
    // in desctop screen size
    if (l !== related_prodacts_list.children.length - 3) {
      l++;
      document.querySelector('.slider_left').style.display = 'flex';

      related_prodacts_list.style.marginLeft = '-' + 340 * l + 'px';
    }
    if (l == related_prodacts_list.children.length - 3) {
      e.currentTarget.style.display = 'none';
    }
  }
}

function tah(e) {
  if (document.querySelector('.hususiyati_btn') !== null)
    document
      .querySelector('.hususiyati_btn')
      .classList.remove('hususiyati_btn');
  e.currentTarget.classList.add('hususiyati_btn');
  document.querySelector('.tahlil').style.display = 'none';
  document.querySelector('.tex').style.display = 'block';
}
document.querySelector('.hususiyati1').classList.add('hususiyati_btn');

function tex(e) {
  if (document.querySelector('.hususiyati_btn') !== null)
    document
      .querySelector('.hususiyati_btn')
      .classList.remove('hususiyati_btn');
  e.currentTarget.classList.add('hususiyati_btn');
  document.querySelector('.tahlil').style.display = 'block';
  document.querySelector('.tex').style.display = 'none';
}
