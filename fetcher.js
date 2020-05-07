const fs = require('fs');
const request = require('request');

const fetchAndSave = (websiteURL, pathName) => {
  request(websiteURL, (error, response, body) => {
    if (error) throw error; // uses request lib to fetch web data, callsback error, response, and body
    fs.writeFile(pathName, body, (error) => { // writes webdata to specified fileName, error is callback
      if (error) throw error;
      fs.stat(pathName, (error, stats) => { // checks file size of created file. error is callback
        if (error) throw error;
        console.log(`Downloaded and saved ${stats.size} bytes to ${pathName}`);
      });
    });
  });
};

fetchAndSave(process.argv[2], process.argv[3]);

