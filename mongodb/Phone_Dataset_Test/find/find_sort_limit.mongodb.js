use('testMongoDB')

db.contacts
  .find({
    'name.first': 'Mark',
    'name.last': 'Jonhson'
  })
  .sort({
    'name.first': 1,
    'name.last': 1
  })
  .limit(5)
