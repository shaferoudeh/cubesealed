const fs= require('fs');
const sealer= require('./sealer.js');
const decker = require('./decker.js');

module.exports = class ApiHelper {


  static async getResponseForApiRequest(apiEndpointName){

      let data = sealer.generateSealed();
      let cardArray = data.cards;

let getNamesResult = decker.getNames(cardArray);

      return {success:true,
         apiEndpointName: apiEndpointName,
         outputData: data}
  }


}
