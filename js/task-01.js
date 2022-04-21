


const getConfigOfStructureList = () => {
  
  const listCategoryEl = document.querySelectorAll('li.item');
  console.log(`  Number of categories: ${listCategoryEl.length} `);

  [...listCategoryEl].map(element => {
      
      console.log('Category:', element.firstElementChild.textContent);
      console.log('Elements:', element.lastElementChild.children.length);

});
}

getConfigOfStructureList();

