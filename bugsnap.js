var mongo = require('mongodb');
var base64 = require('base64-url');
MongoClient = mongo.MongoClient;
Binary = mongo.Binary;

function save_bugsnap(report, db, exit) { 

    var doc = { 
        username: report.username,
        systemname: report.systemname,
        subject: report.subject,
        description: report.description,
        screenshot: new Binary(base64.decode(report.screenshot))
    };

    db
      .collection('reports') 
      .insertOne(doc, function(err) { 
        if (err) return exit(err);

        console.log('Stored bugsnap %s', doc.subject);

        exit(null);
      });
}

module.exports = function (context, exit) { 

    var report = JSON.parse(context.data.report); 

    MongoClient.connect(context.data.MONGO_URL, function(err, db) { 
        if (err) return exit(err);

        save_bugsnap(report, db, exit);
    });
}
