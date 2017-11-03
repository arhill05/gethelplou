const GoogleSpreadsheet = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1NW3OZ_kIPQLeqaZtZb5mzJPgIAOsthNzRV1zoVi20Ug');

let data = [];
let sheet;

setAuth = async() => {
  const creds = require('../../gethelplou-b9e0d09bac89.json');
  await doc.useServiceAccountAuth(creds, () => {
    return null;
  });
}

getRows = async() => {
  sheet.getRows({
      offset: 1,
      limit: 20,
      orderby: 'col2'
    },
    (err, rows) => {
      if (err) console.error(err);
      else {
        console.log('Read ' + rows.length + ' rows');
        data = rows;
      }
    })
}

getInfoAndWorksheets = async() => {
  await doc.getInfo((err, info) => {
    if (err) console.error(err);
    else {
      console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
      sheet = info.worksheets[0];
      console.log('sheet 1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);
      getRows();
    }
  });
}

initialize = () => {
  setAuth();
  getInfoAndWorksheets();
}

module.exports.getData = () => {
    return data;
}