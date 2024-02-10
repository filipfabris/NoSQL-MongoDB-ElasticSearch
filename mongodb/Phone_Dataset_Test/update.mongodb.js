use ('testMongoDB')

db.contacts.updateOne(
    {
        "age": 38
    },

    {
        $set: {
            "age": 77
        }
    }

)