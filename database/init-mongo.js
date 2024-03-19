/*
    Description: Used to setup the database and the collection names used by the server
    Author: REDtrac, LLC
    License: MIT
*/

const DATABASE_NAME = 'redtrac';
const DATABASE_COLLECTION = 'device-data';

//////////////////////////////////////////////
//// SETUP DATABASE                       ////
//////////////////////////////////////////////
db = new Mongo().getDB(DATABASE_NAME);
db.createUser({
    user: "mongodb-user",
    pwd: "mongodb-user-password",
    roles: [
        {
            role: "readWrite",
            db: "redtrac"
        }
    ]
});

//////////////////////////////////////////////
//// CREATE A COLLECTION                //////
//////////////////////////////////////////////
// db.createCollection('device-data', { capped:true, size:3000000000 });

db.createCollection(
    "devicetimeseriesdatas",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "hours"
       }
    }
)