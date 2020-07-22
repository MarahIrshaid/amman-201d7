'use_strict';

var frankie = {
    name: 'frankie',
    age: 10,
    color: 'orange',
    favThings: ['like fish and chips','playing with plants'],
    breed: 'british',
    img: 'img/frankie.jpeg',
    isGoodWithOtherCats: true,
    isGoodWithDogs: true,
    isGoodWithKids: true,
    setAge: function(maxValue, minValue){
        this.age=generateRandomAge(maxValue, minValue);
    },
    render: function(){
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
        catBreed.setAttribute('class','cat-breed')
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

    }
};


var jumper = {
    name: 'jumper',
    age: 3,
    color: 'grey',
    favThings: ['playing outside','ants'],
    breed: 'local',
    img: 'img/jumper.jpeg',
    isGoodWithOtherCats: true,
    isGoodWithDogs: false,
    isGoodWithKids: true,
    render: function(){
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
        article.appendChild(catBreed);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (let index = 0; index < this.favThings.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.favThings[index];
            ul.appendChild(li);
        }


        var img = document.createElement('img');
        img.setAttribute('src', this.img);
        article.appendChild(img);


    },
    setAge: function(maxValue, minValue){
        this.age=generateRandomAge(maxValue, minValue);
    },
};

var serena = {
    name: 'serena',
    age: 10,
    color: 'grey',
    favThings: ['the sun','dry food'],
    breed: 'calico',
    img: 'img/serena.jpeg',
    isGoodWithOtherCats: false,
    isGoodWithDogs: false,
    isGoodWithKids: false,
    render: function(){
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
        article.appendChild(catBreed);

        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (let index = 0; index < this.favThings.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.favThings[index];
            ul.appendChild(li);
        }


        var img = document.createElement('img');
        img.setAttribute('src', this.img);
        article.appendChild(img);


    },
    setAge: function(maxValue, minValue){
        this.age=generateRandomAge(maxValue, minValue);
    },
};

// floor 
// 1.4 = 1
// 4.2 = 4
function generateRandomAge(maxValue, minValue){
    var generatedAge = Math.floor(Math.random()*(maxValue-minValue+1))+minValue;
    return generatedAge;
}

frankie.setAge(10,3);
frankie.render();
jumper.setAge(7,5);
jumper.render();
serena.setAge(20,5);
serena.render();