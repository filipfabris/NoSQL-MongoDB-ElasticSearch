use('testMongoDB')

//mobile_phone_numers has an array of objects
//Now we have unwinded the array and evenry document has only one object of previous array
// db.contacts.aggregate([
//     {
//         $unwind: {"path": "$mobile_phone_numers"}
//     }
// ])

// grouping by $mobile_phone_numers.service_provider
// calculates the count of phone numbers per provider. It uses the $sum operator to increment the count by 1 for each document in the group.
db.contacts.aggregate([
    {
        $unwind: {"path": "$mobile_phone_numers"}
    },
    {
        $group: {
          _id: "$mobile_phone_numers.service_provider",
          naziv_phone_numbers_per_provider: {
            $sum: 1
          }
        }
    }
])


//This means that all the unwound documents are grouped into a single group. It effectively combines all the documents into one group because there's no specific grouping key.
// db.contacts.aggregate([
//     {
//         $unwind: {"path": "$mobile_phone_numers"}
//     },
//     {
//         $group: {
//           _id: true,
//           naziv_phone_numbers_per_provider: {
//             $sum: 1
//           }
//         }
//     }
// ])