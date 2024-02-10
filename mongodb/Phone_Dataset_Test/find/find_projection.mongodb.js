use ('testMongoDB')

// db.contacts.find(
//     {
//         "name.first": "Mark",
//         "name.last": "Jonhson"
//     },
//     {
//         "birth_date": 1,
//         "mobile_phone_numers": 1,
//         "year": {
//             $year: "$birth_date"
//         }
//     }
// )

db.contacts.find(
    {
        "name.first": "Filippo",
        "name.last": "Fabris"
    },
    {
        "birth_date": 1,
        "mobile_phone_numers": 1,
        "year": {
            $year: "$birth_date"
        }
    }
)

// db.test.find(
//     {
//         "name": "Scratch",
//     },
//     {
//         "born": 1,
//         "year": {
//             $year: "$born"
//         }
//     }
// )