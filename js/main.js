const ram_btn = document.querySelectorAll('#ram-btn');

// all buttons
let ram_btn1 = document.querySelector('.ram-btn1');
let ram_btn2 = document.querySelector('.ram-btn2');

// storage buttons
let hero_storage_btn1 = document.querySelector('.hero_storage-btn1');
let hero_storage_btn2 = document.querySelector('.hero_storage-btn2');
let hero_storage_btn3 = document.querySelector('.hero_storage-btn3');

// color option

ram_btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    if (document.querySelector('.ram-btn-style') !== null) {
      document
        .querySelector('.ram-btn-style')
        .classList.remove('ram-btn-style');
    }
    e.currentTarget.classList.add('ram-btn-style');
    console.log(e.currentTarget);
    if (+e.currentTarget.classList[0] == 3) {
      storageFunc(1);
    } else {
      storageFunc(e.currentTarget.classList[0]);
    }
  });
});

let ram_buttons = [];
let storage_buttons = [];
function ramFunc(id1 = 1) {
  products.forEach((item) => {
    ram_buttons.push(`<h4>${item.ram}GB</h4>`);
  });
  ram_btn1.innerHTML = ram_buttons[0];
  ram_btn1.classList.add('ram-btn-style');
  ram_btn2.innerHTML = ram_buttons[1];
  hero_storage_btn3.style.display = 'none';
  if (id1 == 3) {
    ram_btn1.style.display = 'none';
    ram_btn2.classList.add('ram-btn-style');
  } else {
    ram_btn1.style.display = 'block';
    ram_btn2.classList.remove('ram-btn-style');
  }
}

ramFunc();

// storage
function storageFunc(id = 0) {
  products[id].xotira.forEach((el) => {
    storage_buttons.push(el.xotira);
  });
  // console.log(id);
  storage_buttons.forEach((item) => {
    if (+item == 256) {
      hero_storage_btn1.innerHTML = `<h4>${item}GB</h4>`;
    }
    if (+item == 512) {
      hero_storage_btn2.innerHTML = `<h4>${item}GB</h4>`;
    }
    if (+item == 1) {
      if (id == 1) {
        hero_storage_btn3.innerHTML = `<h4>${item}TR</h4>`;
        hero_storage_btn3.style.display = 'block';
      } else {
        hero_storage_btn3.style.display = 'none';
      }
    }
  });
}

storageFunc();

let hero_storage_btn = document.querySelectorAll('.hero_storage-btn');
function terrabayt() {
  hero_storage_btn.forEach((item) => {
    item.addEventListener('click', (e) => {
      document
        .querySelector('.hero_storage-btn1')
        .classList.remove('hero_storage-btn1');
      e.currentTarget.classList.add('hero_storage-btn1');
      if (+e.currentTarget.classList[0] == 3) {
        ramFunc(+e.currentTarget.classList[0]);
      }
      storageFunc(1);
    });
  });
}
terrabayt();
