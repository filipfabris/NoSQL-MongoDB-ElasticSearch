use ('testMongoDB')

db.createCollection('contacts')

db.contacts.insert({
    "name": {
        "first": "Filippo",
        "last": "Fabris"
    },
    "age": 37,
    "birth_date": ISODate("1982-05-13T00:00:00Z"),
    "address": {
        "street": "3662 3rd Street",
        "city": "San Francisco",
        "post_code": "94124",
    },
    "mobile_phone_numers": [
        {"phone_number": "+39 XXX 3456 778",
        "service_provider": "Wind"
        },
        {"phone_number": "+39 YYY 9874 123",
        "service_provider": "TIM"
        }
    ]
})

// db.contacts.insert({
//     "name": {
//      "first": "Mark",
//      "last": "Jonhson"
//     },
//     "age": 37,
//     "birth_date": ISODate("1982-05-13T00:00:00Z"),
//     "address": {
//         "street": "3662 3rd Street",
//         "city": "San Francisco",
//         "post_code": "94124",
//     },
//     "mobile_phone_numers": [
//         {"phone_number": "+39 XXX 3456 778",
//         "service_provider": "Wind"
//         },
//         {"phone_number": "+39 YYY 9874 123",
//         "service_provider": "TIM"
//         }
//     ]
// })

//Does not work because of the ISODate
db.contacts.insert({
    "name": {
        "first": "Mark",
        "last": "Jonhson"
    },
    "age": 37,
    "birth_date": {
        "$date": "1982-05-13T00:00:00Z"
    },
    "address": {
        "street": "3662 3rd Street",
        "city": "San Francisco",
        "post_code": "94124",
    },
    "mobile_phone_numers": [
        {"phone_number": "+39 XXX 3456 778",
        "service_provider": "Wind"
        },
        {"phone_number": "+39 YYY 9874 123",
        "service_provider": "TIM"
        }
    ]
})

// db.test.insert(
// { 
//     "_id" : 1,
//     "name" : "Scratch",
//     "born" : ISODate("2021-01-03T23:30:15.123Z") 
// }
// )