import faker from 'faker';

const cards = [];

module.exports = {
getTitle: function (){
return faker.random.word();
},
getDescription: function(){
return faker.image.nature(150,150,true);
},
items: function(min, max){
 return Math.round(Math.random() * (max-min) + min);
},
height: 250

}