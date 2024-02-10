use ('testMongoDB')

db.contacts.deleteOne(
    {
        "age": 77
    }
)