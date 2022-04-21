const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  ];


// ====== fn

const getImageList = images => {
  return images.map(image =>
    `<li class= "gallery-item"><img src="${image.url}"alt="${image.alt}"width=450></li>`)
};

const imageList = getImageList(images);

document.querySelector('.gallery').insertAdjacentHTML("afterbegin", imageList);

// =====================fn end

// =======================
// const galleryList = document.querySelector('.gallery');
// console.log(galleryList);

// const imageItem = images.map(image =>
//   `<li class= "gallery-item"><img src="${image.url}"alt="${image.alt}"width=450>`)

// galleryList.insertAdjacentHTML ("afterbegin", imageItem);

// console.log(imageItem);
// ========================== 


// ============== for

// function getCreateImg() {
//   let imgForCreate = '';

//   for (let image of images) {
   
//         imgForCreate += `<li class= "gallery-item"><img src="${image.url}"alt="${image.alt}"width=450>`
//   }
//   return imgForCreate;
// };

// document.querySelector('.gallery').insertAdjacentHTML("beforebegin", getCreateImg());
// ============= for end