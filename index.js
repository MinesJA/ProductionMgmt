

$('#submitNumParts').on('click', function(){
  var number = $('#numParts').val()

  numberIngred(number)

})

function numberIngred(number){

  var ingredientName = document.createElement('div')
  
  ingredientName.innerHTML = "Ingredients Name"
    $('#').appendChild()

  var ingredients = document.createElement('input')
    $('#ingredientSubmit').appendChild(newItem);

  var quantity = document.createElement('input')
    ingredients.type = '';
    ingredients.class = '';
    $('ingredientSubmit').appendChild(newItem);

}


function addItem(item){
  var listDiv = document.getElementById('listDiv')

  toDiscussList.push(`${toDiscussList.length + 1}. ${item}`)

  var itemNumber = (toDiscussList.length - 1)

  $('#listDiv').append(toDiscussList[itemNumber]);

  var newItem = document.createElement('input')
  newItem.type = 'checkbox';
  newItem.class = 'newItem';
  listDiv.appendChild(newItem);

  listDiv.appendChild(document.createElement('br'));
}

function discussed(checked){
  var listDiv = document.getElementById('2ndListDiv')

  discussedList.push(checked)

  var itemNumber = (discussedList.length - 1)

  $('#2ndListDiv').append(discussedList[itemNumber]);

  var newItem = document.createElement('input')
  newItem.type = 'checkbox';
  newItem.class = 'newItem';
  listDiv.appendChild(newItem);

  listDiv.appendChild(document.createElement('br'));
}

//EXAMPLE OF HOW CHECKBOX CAN WORK
$('#heyBox').on('click', function(){
  var hey = document.getElementById('hey').innerHTML

  console.log(hey + "clicked");

})
