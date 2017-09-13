function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const radomUsersTag = document.getElementById('radomUsers');
const url = 'https://randomuser.me/api/?results=1';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
var authors = data.results;
console.log(authors);

var add = document.createElement('span'); 
var getTag = document.getElementById('nameOfRandom');
var infoToAdd =authors.map(getInfo);
add.innerHTML =infoToAdd;
getTag.appendChild((add));
console.log(infoToAdd); 

function getInfo(type){
var printData = type.name.first;
return printData; 
}

  
})
.catch(function(error) {
  console.log(error);
});   