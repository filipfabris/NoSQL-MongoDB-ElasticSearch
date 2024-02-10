use('testMongoDB')

db.contacts.find({
    $and: [
        { "birth_date": {$exists: true} },
        { "birth_date": {$type: "date"} }
    ]
})
