// /server/config/dbConfig.js
const hana = require('@sap/hana-client');

const connOptions = {
  serverNode: 'e36dd7e7-98f5-481a-9ab8-32b1c5118df6.hana.prod-jp10.hanacloud.ondemand.com:443', // Replace with your server and port
  uid: 'DBADMIN',                         // Replace with your username
  pwd: 'Demodatabase@123',                         // Replace with your password
  encrypt: true,                               // Optional: use encryption if needed
  sslValidateCertificate: 'false', 
};

const connection = hana.createConnection();

module.exports = {
  connectToHana: () => {
    return new Promise((resolve, reject) => {
      connection.connect(connOptions, (err) => {
        if (err) {
          return reject(err);
        }
        console.log('Connected to SAP HANA');
        resolve(connection);
      });
    });
  }
};
