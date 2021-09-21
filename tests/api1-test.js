const {expect} = require("chai");
const axios = require ('axios');
const usersData = async () => {
let response = await axios.get('https://614784cf65467e0017384b8f.mockapi.io/api/v1/users')
    try {
let data = await response.data;
return await data
}catch(err){console.log(err)}}


//   "firstname": "valid string name with length >=1 && <20       //required",

//    "email": "valid string email schema with length >=5 && < 100   //required",

//    "countryCode": "valid  string country code matched with mobile number // required",

//    "mobile": "valid  string mobile number with length >=8 && < 15",

//    "password": "valid string password with minimum one {upper letter, lower letter , special char}   //required ",

//    "confirmPassword": "valid string with same inserted password", //required

//    "lastname": "valid string with length >=1 && <20      //optional "

// begin a test suite of one or more tests

describe('user registration', async function() {
    // Validate firstname
    it('should validate firstName', async function() {
      // add an assertion
      let data = await usersData()
      for(let x = 0  ; x <= usersData.length-1;x++){
          expect(usersData[x].firstName.length).to.be.greaterThanOrEqual(1)
          expect(usersData[x].firstName .length).to.be.lessThan(20)
      }
      
    })
    // Validate email
    it('should validate email', async function() {
      // add an assertion
      const emailRegex= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      let data = await usersData()
        for(let x = 0 ; x <= usersData.length-1 ; x++) {
            expect(usersData[x].email.length).to.be.greaterThanOrEqual(5)
            expect(usersData[x].email.length).to.be.lessThan(100)
            expect(usersData[x].email).to.match(emailRegex)
        }
    })

    //country code test case
    it('should countryCode', async function() {
      // add an assertion
      let data = await usersData()
      for(let x = 0  ; x <= usersData.length-1;x++){
        expect(usersData[x].countryCode.length).to.be.greaterThanOrEqual(2)
        expect(usersData[x].countryCode.length).to.be.lessThan(5)
      }
    
    })
    // Validate mobile number
    it('should mobileNumber', async function() {
      // add an assertion
      let data = await usersData()
      for(let x = 0  ; x <= usersData.length-1;x++){
        expect(usersData[x].mobileNumber.length).to.be.greaterThanOrEqual(8)
        expect(usersData[x].mobileNumber.length).to.be.lessThan(15)
      }
    
    })

     // Validate password
     it('should password', async function() {
      // add an assertion
      let data = await usersData()
      const passwordRegex = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      for(let x = 0  ; x <= usersData.length-1;x++){
        expect(usersData[x].password).to.match(passwordRegex)
      }  
    })

      // Validate confirm password
      it('should confirm password', async function() {
        // add an assertion
        let data = await usersData()
        for(let x = 0  ; x <= usersData.length-1;x++){
          expect(usersData[x].password).to.match(usersData[x].confirmPassword)
        }   
      })

    // Validate lastname
    it('should validate lastName', async function() {
      // add an assertion
      let data = await usersData()
      for(let x = 0  ; x <= usersData.length-1;x++){
          expect(usersData[x].lastName.length).to.be.greaterThanOrEqual(1)
          expect(usersData[x].lastName.length).to.be.lessThan(20)
      }
      
    })
  })
