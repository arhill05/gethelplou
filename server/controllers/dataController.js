const GoogleSpreadsheet = require('google-spreadsheet');
const Organization = require('../models/Organization');
const doc = new GoogleSpreadsheet('1NW3OZ_kIPQLeqaZtZb5mzJPgIAOsthNzRV1zoVi20Ug');

initialize = () => {
  const creds = require('../../gethelplou-b9e0d09bac89.json');
  doc.useServiceAccountAuth(creds, () => {
    return null;
  });
  doc.getInfo((err, info) => {
    if (err) {
      console.error('STARTUP : There was an error loading the spreadsheet!');
      throw err;
    }
    else {
      const sheet = info.worksheets[0];
      console.log('STARTUP : Successfully loaded document');
      console.log('STARTUP : Loaded doc: ' + info.title + ' by ' + info.author.email);
      console.log('STARTUP : sheet 1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);
    }
  })
}

getInfoAndWorksheets = () => {
  return new Promise((resolve) => {
    doc.getInfo((err, info) => {
      if (err) console.error(err);
      else {
        return resolve(info.worksheets[0]);
      }
    });
  })
}

getRows = async() => {
  let sheet = await getInfoAndWorksheets();
  let data = [];
  return new Promise((resolve) => {
    sheet.getRows({
        offset: 1, // start reading from row 1. Exclude headers
      },
      (err, rows) => {
        if (err) console.error(err);
        else {
          console.log('dataController.js getRows : Read ' + rows.length + ' rows');
          rows.forEach(function (element) {
            data.push(new Organization(element))
          });

          return resolve(data);
        }
      })
  })
}

module.exports.getData = async(req, res) => {
  let data = await getRows();
  res.json(data);
}
