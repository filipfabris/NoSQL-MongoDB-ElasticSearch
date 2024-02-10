use('testMongoDB')

db.contacts.find({
    $or: [
      {
        'name.first': 'Mark'
      },
      {
        age: 37
      }
    ]
}).pretty()
