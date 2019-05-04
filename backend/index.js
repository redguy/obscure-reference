require('dotenv').config();
const db = require('odbc')();

const connectionString = process.env.ODBC_CONNECTION_STRING

db.open(connectionString, (err) => {
  if (err) return console.log(err);
});

module.exports = async (req, res) => {
  const data = await new Promise((resolve, reject) => db.query(`SELECT polyjson FROM polygons WHERE
  (
    rt_lng BETWEEN 14.387 AND 14.388 OR
    rt_lat BETWEEN 50.126 AND 50.129 OR
    lb_lng BETWEEN 14.387 AND 14.288 OR
    lb_lat BETWEEN 50.126 AND 50.129
  ) AND layer = 'test'`, [], (err, data) => {
    if (err) {
      reject(err);
    }
 
    resolve(data);
  }));

  return data;
};
