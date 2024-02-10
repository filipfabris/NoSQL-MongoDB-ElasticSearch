use('testMongoDB')

db.contacts.find({
    $or: [
        {
            $and: [
                { "age": { $gt: 30 } },
                { "age": { $lt: 40 } }
            ]
        },
        {
            "age": { $nin: [40, 41, 42, 44] }
        }
    ]
})
