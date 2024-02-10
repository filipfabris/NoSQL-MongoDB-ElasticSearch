use('testMongoDB')

db.contacts.find({
     "name.first": {$regex: "[A-Z][a-z]+"}
})
