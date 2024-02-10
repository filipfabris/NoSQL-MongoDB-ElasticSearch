use ('testMongoDB')

db.createCollection('contacts')

db.contacts.insertMany([
{
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
        {"phone_numer": "+39 XXX 3456 778",
        "service_provider": "TIM"
        },
        {"phone_numer": "+39 YYY 9874 123",
        "service_provider": "Vodafone"
        }
    ]
},

// {
//     "name": {
//         "first": "Filip",
//         "last": "Fabris"
//     },
//     "age": 22,
//     "birth_date": {
//         "$date": "1999-05-13T00:00:00Z"
//     },
//     "address": {
//         "street": "3662 3rd Street",
//         "city": "Milan Francisco",
//         "post_code": "94124",
//     },
//     "mobile_phone_numers": [
//         {"phone_numer": "+39 XXX 3456 778",
//         "service_provider": "Wind"
//         },
//         {"phone_numer": "+39 YYY 9874 123",
//         "service_provider": "TIM"
//         }
//     ]
// },
])