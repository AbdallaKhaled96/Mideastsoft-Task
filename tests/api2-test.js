const {expect} = require("chai");
//const express = require("express");
//const express = require("jsonwebtoken");
//const userRegistration = express();

//userRegistration.get
const axios = require ('axios');
const usersData = async () => {
let response = await axios.post('https://614784cf65467e0017384b8f.mockapi.io/api/v1/forgetPassword')
    try {
let data = await response.data;
return await data
}catch(err){console.log(err)}}

//"password":"your valid password",
//"newPassword":"valid string password with minimum one {upper letter, lower letter , special char} //required "
//"confirmNewPassword":"valid string with same inserted newPassword"},

describe('forgetPassword', async function() {
    // Validate password
    it('should validate password', async function() {
        let data = await usersData()
        const passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        for(let x = 0  ; x <= usersData.length-1;x++){
          expect(usersData[x].password).to.match(usersData[x].password)
      }
      
    })
    // Validate newPassword
    it('should validate newPassword', async function() {
      // add an assertion
      let data = await usersData()
      const passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      for(let x = 0  ; x <= usersData.length-1;x++){
        expect(usersData[x].newPassword).to.match(passwordRegex)
        }
    })

    // Validate confirmNewPassword
    it('should confirmNewPassword', async function() {
      // add an assertion
      let data = await usersData()
      for(let x = 0  ; x <= usersData.length-1;x++){
        expect(usersData[x].newPassword).to.match(usersData[x].confirmNewPassword)
      }
    
    })
})