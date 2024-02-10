use ('testMongoDB')

db.contacts.createIndex(
{
    "name.last": -1,
    "name.first": 1,
    "age": 1
}
)