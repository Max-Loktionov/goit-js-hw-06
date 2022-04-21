const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');

const makeListOfItems = ingredients => {
  
  return ingredients.map(item => {
    const itemForCreate = document.createElement('li');
    itemForCreate.classList.add("item");
    itemForCreate.textContent = item;
  
    return itemForCreate;
  });
};

const listOfItems = makeListOfItems(ingredients);
ulEl.append(...listOfItems);

console.log(listOfItems);


// const ingredientsAll = document.querySelector('#ingredients');
// ingredients.forEach(element => {
//   const ingredientsAllItem = document.createElement("li");
//   ingredientsAllItem.classList.add('item')
//   ingredientsAllItem.textContent = element;
//   ingredientsAll.append(ingredientsAllItem);
// });
// console.log(ingredientsAll)