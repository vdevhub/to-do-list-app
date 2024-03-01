
function newItem() {
  //jQuery
  //1. Adding a new item to the list of items: 
  let li = $('<li></li>');
  let inputValue = $('#input').val(); 

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.append(inputValue);
    $('#list').append(li);
    $('#input').val('');
  }

  //2. Crossing out an item from the list of items:
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append('X');
  li.append(crossOutButton); 

  crossOutButton.on("click", function deleteListItem(){
    li.addClass("delete");
  });

  // 4. Reordering the items: 
  $('#list').sortable();
}