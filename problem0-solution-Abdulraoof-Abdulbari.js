function whereIsMyFood (fridge, item) {
    let x = -1;
  for (let i=0 ; i<fridge.length - 1 ; i++){
  if (fridge[i] == item) {
  x = i+1;
  break;}
  }
    console.log(x);
  }
  let fridgeItem = ['tomato', 'apple', 'onion','banana', 'watermelon','plums', 'pear'];
  let itemSerched = "banana";
  whereIsMyFood(fridgeItem, itemSerched);