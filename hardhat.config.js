require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    ganache:{
      url:"http://127.0.0.1:7545",
      accounts:[process.env.NEXT_APP_PRIVATE_KEY]
    },
    
  }
};
