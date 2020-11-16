const fs= require('fs');



module.exports = class ApiHelper {


  static async getResponseForApiRequest(apiEndpointName){

      ///write custom code here
      /* maybe like looping through magic card files,
      filtering, stor[filepathgoeshere]ing into variable, etc
      */

      let jsondata = fs.readFileSync(__dirname+
      "/../assets/buttdata/butt.json");

      let data = JSON.parse(jsondata);

      return {success:true,
         apiEndpointName: apiEndpointName,
         outputData: data,
       outputJson: jsondata.toString()}
  }





}
