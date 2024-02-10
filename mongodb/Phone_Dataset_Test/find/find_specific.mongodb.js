use ('testMongoDB')

db.contacts.find(
    {
        "name.first": "Mark",
        "name.last": "Jonhson" 
    }
).pretty()

// db.contacts.countDocuments(
//     {
//         "name.first": "Mark",
//         "name.last": "Jonhson" 
//     }
// )

