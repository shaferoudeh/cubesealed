const fs= require('fs');



module.exports = class Sealer {


  static generateSealed (){

      /* let jsondata = fs.readFileSync(__dirname+
      "/../assets/sets/test.json"); */
      let jsondata = fs.readFileSync(__dirname+
      "/../assets/sets/stf.json");

      let data = JSON.parse(jsondata);

      let cardArray = data.cockatrice_carddatabase.cards.card;
      //let cardNames = data.cockatrice_carddatabase.cards.card.name;

      let result=[];

for (card of cardArray){
      result.push(card);
}

//this returns a json object
// <attribute> made up of Key:value
      return {success:true,
         cards: result}
  }





}
