const axios = require('axios')
const {expect} = require('chai')
const jsonData = require ('./env.json')


describe('Products List', function(){
    it("Get list of Products", async function(){
        const responce = await axios.get(`${jsonData.baseUrl}/api/productsList`, 
        {
            //the body should be written here in json format in case of authentication
        },
        {
            "Content-Type" : "application/json"
        })
        console.log(responce)
        log
        
    })
})
