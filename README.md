# Bugsnap 

A webtask that accepts a json bugreport payload and saves it to a mongo instance.

If you don't know what a webtask is you can find out all about them [here](http://webtask.io)

Set the webtask up with the webtask command line tool.

    wt create bugsnap.js --secret MONGO_URL=mongodb://dbuser:dbpass@instance.mongolab.com:59195/dbname

Where you substitute the MONGO_URL with one that matches your Mongo db.

An example submission (see report.json for expected format) 

    curl -X POST --data report="$(< report.json)"  https://webtask.it.auth0.com/api/run/wt-account-email-name-0/bugsnap?webtask_no_cache=1 

While you can make an example submission using curl, the intended way to make a submission is from your software itself.
