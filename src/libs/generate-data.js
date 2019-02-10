import faker from 'faker';
import random from './random';

const cards = [];

module.exports = {
getTitle: function (){
return faker.random.word();
},
getDescription: function(){
return faker.image.nature(150,150,true);
},
items: function(min, max){
 return random(min, max);
},

height: 250

}