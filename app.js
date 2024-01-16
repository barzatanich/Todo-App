let todoArray = [];
let choice = prompt('Choose what you want to do (new, list, delete, quit)').toLowerCase();
while (choice !== 'quit' && choice !== null) {
  while (choice !== 'new' && choice !== 'list' && choice !== 'delete' && choice !== 'quit') {
    choice = prompt(`${choice} is not a valid command. Please choose new, list, delete, or quit`).toLowerCase();
  }
  if (choice === 'new') {
    let newTodo = prompt('What do you want to add?');
    if (newTodo === 'quit' || newTodo === null) {
      break;
    }
    if (newTodo !== null && newTodo.trim() !== '') {
      todoArray.push(newTodo);
      console.log( `"${newTodo}" is added to the list`);
    } else {
      console.log('Invalid input, nothing added');
    }
  } else if (choice === 'list') {
    if (todoArray.length === 0) {
      console.log('You have no items to display');
    } else {
      console.log('\n------------\nYour To-Do List:');
      for (let index = 0; index < todoArray.length; index++) {
        console.log(`${index}: ${todoArray[index]}`);
      }
      console.log('------------\n');
    }
  } else if (choice === 'delete') {
    let deleteItem = prompt('Enter the index of the item you want to delete');
    let deleteItemCopy = Number(deleteItem);
    while (isNaN(deleteItemCopy)) {
      if (deleteItem === 'quit' || deleteItem === null) {
        break;
      }
      deleteItem = prompt('Please enter a valid index number');
    }
    if (todoArray[deleteItem] === undefined) {
      console.log('Invalid index, nothing deleted');
    } else {
      console.log(`${todoArray[deleteItem]} is deleted from your list`);
      todoArray.splice(deleteItem,1);
    }
  }
  choice = prompt('Choose what you want to do (new, list, delete, quit)').toLowerCase();
}