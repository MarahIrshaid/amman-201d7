'use_strict';

function Cat(name, age, color, favThings, breed, isGoodWithDogs, isGoodWithKids, isGoodWithOtherCats) {
    // var arr = [];
    // arr.push(favThings);
    this.name = name;
    this.age = age;
    this.color = color;
    this.favThings = favThings;
    this.breed = breed;
    this.img = 'img/' + this.name + '.jpeg';
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithOtherCats = isGoodWithOtherCats;
}

Cat.prototype.setAge = function (minValue, maxValue) {
    this.age = generateRandomAge(minValue, maxValue);
}

Cat.prototype.render = function () {
    // get the parent document for later usage
    var parentElement = document.getElementById('kittenProfiles');
    // generated a new article and stored that created tag inside a variable 
    var article = document.createElement('article');
    parentElement.appendChild(article);

    var catName = document.createElement('h3');
    catName.textContent = this.name;
    article.appendChild(catName);

    var catColor = document.createElement('p');
    catColor.textContent = this.color;
    article.appendChild(catColor);

    var catAge = document.createElement('p');
    catAge.textContent = this.age;
    article.appendChild(catAge);

    var catBreed = document.createElement('p');
    catBreed.textContent = this.breed;
    catBreed.setAttribute('class', 'cat-breed')
    article.appendChild(catBreed);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for (let index = 0; index < this.favThings.length; index++) {
        var li = document.createElement('li');
        li.textContent = this.favThings[index];
        ul.appendChild(li);
    }

    var img = document.createElement('img');
    // <img>
    img.setAttribute('src', this.img)
    // <img src='img/frankie.jpeg'>
    img.setAttribute('alt', this.name)
    // <img  src='img/frankie.jpeg' alt='frankie'>
    article.appendChild(img);
    ///////////////////////////
    // the table //////////////
    ///////////////////////////
    var table = document.createElement('table');
    table.setAttribute('border', '1');
    table.setAttribute('class', 'table-style');

    // first row
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.textContent = 'Good With Dogs';
    tr.append(th1);
    
    var th2 = document.createElement('th');
    th2.textContent = 'Good With Kids';
    tr.append(th2);
    
    var th3 = document.createElement('th');
    th3.textContent = 'Good With Other Cats';
    tr.append(th3);
    // push the first row to the table
    table.appendChild(tr);
    // Second row
    var tr2 = document.createElement('tr');

    var td1 = document.createElement('td');
    td1.textContent = this.isGoodWithDogs;
    // append the table data <td> to the row <tr>
    tr2.append(td1);
    
    var td2 = document.createElement('td');
    td2.textContent = this.isGoodWithKids;
    tr2.append(td2);
    
    var td3 = document.createElement('td');
    td3.textContent = this.isGoodWithOtherCats;
    tr2.append(td3);
    // push the second row to the table
    table.appendChild(tr2);
    
    article.appendChild(table);

}

// floor 
// 1.4 = 1
// 4.2 = 4
function generateRandomAge(minValue, maxValue) {
    var generatedAge = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return generatedAge;
}

var frankie = new Cat('frankie', 10, 'orange', ['playing with plants', 'eating dry food'], 'tabby', true, true, true);
var jumper = new Cat('jumper', 3, 'grey', ['playing outside', 'fish'], 'local', true, true, false);
var serena = new Cat('serena', 5, 'grey', ['the sun','eating chicken'], 'calico', false, false, false);

console.log(frankie);
console.log(jumper);
console.log(serena);

frankie.setAge(10, 3);
frankie.render();
jumper.setAge(7, 5);
jumper.render();
serena.setAge(20, 5);
serena.render();