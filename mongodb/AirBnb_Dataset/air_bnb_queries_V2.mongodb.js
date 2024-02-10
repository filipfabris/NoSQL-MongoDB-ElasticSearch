use ('exercise')

// Get¸one document from the collection air_bnb
// db.air_bnb.findOne()
// db.air_bnb.find().limit(1)


// Get the name and address of the document with the name "Ribeira Charming Duplex"
// db.air_bnb.find(
//     {
//         "name": "Ribeira Charming Duplex"
//     },
//     {
//         "name": 1,
//         "address": 1,
//         // "reviews": 1,
//         // "number_of_reviews": 1
//     }
// )

//Write a query to return all the housings whose minimum nights is equal to 2.
// db.air_bnb.find(
//     {
//         "minimum_nights" : {$ne:null}
//     },
//     {
//         "name": 1,
//         "int_minimum_nights": { $toInt: "$minimum_nights" },
//         // "inst_minimum_nights": { $convert: {'input': '$minimum_nights', 'to': 'double'}}ž
//         // decimal, int, number
//     },
//     {
//         "int_minimum_nights": {$gt : 4}
//     }
// ).limit(10)


//Write a query to return the number of housings whose number of reviews is greater than 10.
// db.air_bnb.find(
//     {
//         "number_of_reviews": {$gt: 10}
//     },
//     {
//         "name": 1,
//         "number_of_reviews": 1
//     }
// ).limit(3)

//Write a query to return the top 10 housings based on their number of bedrooms.
// db.air_bnb.find(
//     {
//         "bedrooms": {$ne: null}
//     },
//     {
//         "name": 1,
//         "bedrooms": 1
//     }
// ).sort(
//     {
//         "bedrooms": -1
//     }
// ).limit(3)

//Write a query to return the housings whose host response rate is greater than 90.
// db.air_bnb.find(
//     {
//         "host.host_response_rate": {$gt: 90}
//     },
//     {
//         "name": 1,
//         "host.host_response_rate": 1
//     }
// ).limit(3)


// db.air_bnb.aggregate([
//     {
//         $match: {
//             "host.host_response_rate": { $gt: 90 }
//         }
//     },
//     {
//         $project: {
//             "name": 1,
//             "host.host_response_rate": 1,
//             "property_type": 1
//         }
//     },
//     {
//         $match: {
//             "property_type": "House"
//         }
//     },
//     {
//         $match: {
//             "name": "Ribeira Charming Duplex"
//         }
//     },

//     {
//         $limit: 3
//     }
// ])

//Write a query to return the name of the hosts whose housings includes a TV !!AND!! Iron.
// db.air_bnb.aggregate([
//     {
//         $match: {
//             "amenities": { $all: ["TV", "Iron"] }
//         }
//     },
//     {
//         $project: {
//             "name": 1,
//             "amenities": 1
//         }
//     },
//     // {
//     //     $limit: 3
//     // },
//     {
//         $group: {
//             "_id": true,
//             "count": { $sum: 1 }
//         }
//     }
// ])

// db.air_bnb.aggregate([
//     // {
//     //     $match: {
//     //         "amenities": "TV",
//     //         "amenities": "Iron" // this will override the previous one
//     //     }
//     // },


//     // {
//     //     $match: {
//     //         "amenities": "TV"
//     //     }
//     //
//     // },
//     //     {
//     //     $match: {
//     //         "amenities": "Iron" //One after one works - WORKS
//     //     }
//     // },


//     // {
//     //     $match: {
//     //         $and: [
//     //         { "amenities": "TV" },   // Match documents with "TV" in amenities
//     //         { "amenities": "Iron" } // Match documents with "Iron" in amenities
//     //         ]
//     //     } 
//     // },

//     // {
//     //     $match: {
//     //         "amenities": {
//     //             $all: [
//     //                 { $elemMatch: { $eq: "TV" } }, // Match documents with "TV" in amenities
//     //                 { $elemMatch: { $eq: "Iron" } } // Match documents with "Iron" in amenities
//     //             ]
//     //         }
//     //     }
//     // },

//     // {
//     //     $match: {
//     //         "amenities": { 
//     //             $all: [
//     //                 "TV", "Iron"
//     //             ] 
//     //         }
//     //     }
//     // },

//     {
//         $match: {
//             "amenities": {
//                 $all: [
//                     { 
//                         $elemMatch: {
//                             $in: ["TV", "Iron"]
//                         } 
//                     }
//                 ]
//             }
//         }
//     },


//     {
//         $project: {
//             "name": 1,
//             "amenities": 1
//         }
//     },
//     {
//         $group: {
//             "_id": true,
//             "count": { $sum: 1 }
//         }
//     }
// ])

//Write a query to return the name of the hosts whose housings includes a TV !!OR!! Iron.
// db.air_bnb.find(
//     {
//         "amenities": { $in: ["TV", "Iron"] }
//     },
//     {
//         "name": 1,
//         "amenities": 1
//     }
// ).limit(3)

//Write a query to compute the total number of bedrooms available across all housings
// db.air_bnb.aggregate([
//     {
//         $group: {
//             "_id": null,
//             "total": { $sum: "$bedrooms" }
//         }
//     }
// ])



//Write a query to return the top 3 housings based on their number of bedrooms.
// db.air_bnb.aggregate([
//     {
//         $project: {
//             "name": 1,
//             "bedrooms": 1
//         }
//     },

//     {
//         $sort: {
//             "bedrooms": -1
//         }
//     },

//     {
//         $limit: 3
//     }

// ]).explain("executionStats")

//Write a query to compute the total number of housings based on their cancellation policy, whose accommodates is greater than 6 and whose host has a profile picture.
// db.air_bnb.aggregate([
//     {
//         $match: {
//             "host.host_picture_url": { $ne: null},
//             "accommodates": { $gt: 6 },
//         }
//     },
//     // {
//     //     $group: {
//     //         "_id": "$cancellation_policy",
//     //         "total": { $sum: 1 }
//     //     }
//     // }

//     {
//         $group: {
//             "_id": true,
//             "total": { $sum: 1 }
//         }
//     }
// ])


//NEŠTO
// db.air_bnb.aggregate([

//     {
//         $match: {
//             "_id": "1001265"
//         }
//     },

//     {
//         $match: {
//             "availability.availability_30": { $gt: 2 },
//             "availability.availability_60": { $gt: 1 }
//         }
//     },

//     {
//         $project: {
//             "name": 1,
//             "availability": 1
//         }
//     }

// ])


//Write a query to compute the total number of housings for each amenity.
// db.air_bnb.aggregate([
//     {
//         $unwind: "$amenities"
//     },
//     {
//         $group: {
//             "_id": "$amenities",
//             "total": { $sum: 1 }
//         }
//     },

//     {
//         $project: {
//             "amenities": "$_id",
//             "total": 1,
//             "_id": 0 // 0 - hide, 1 - show, default is 1 for _id
//         }
//     },
// ])


// Count number of elements in an array
// db.air_bnb.aggregate([
//     {
//         $project: {
//             "item_count": { $size: "$amenities" },
//             _id: 0,
//             "amenities": 1
//         }
//     },
// ])

// Write a query to compute the total number of housings for each amenity, returning only the amenities whose count is greater than 15
// db.air_bnb.aggregate([
//     {
//         $unwind: "$amenities"
//     },
//     {
//         $group: {
//             "_id": "$amenities",
//             "total": { $sum: 1 }
//         }
//     },

//     {
//         $match: {
//             "total": { $gt: 15 }
//         }
//     },

//     {
//         $project: {
//             "amenities": "$_id",
//             "total": 1,
//             "_id": 0 // 0 - hide, 1 - show, default is 1 for _id
//         }
//     },

//     {
//         $group: {
//             "_id": true,
//             "total": { $sum: 1 }
//         }
//     }
// ])

// db.air_bnb.aggregate([

//     {
//         $project: {
//             "name": 1,
//             "number_of_amenities": { $size: "$amenities" },
//             "amenities": 1
//         }
//     },

//     {
//         $match: {
//             "number_of_amenities": { $gt: 15 }
//         }
//     },

//     {
//         $group: {
//             "_id": true,
//             "total": { $sum: 1 }
//         }
//     }

// ])

//Write a query to compute the average price and the average cleaning fees of the housings based on their number of bedrooms and bathrooms, returning only those whose average price is greater than 60 and average cleaning fees is greater than 40.
// db.airbnb.aggregate([
//   {
//     $group: {
//       _id: {
//         bedrooms: "$bedrooms",
//         bathrooms: "$bathrooms"
//       },
//       avgPrice: { $avg: "$price" },
//       avgCleaningFee: { $avg: "$cleaning_fee" }
//     }
//   },
//   {
//     $match: {
//       avgPrice: { $gt: 60 },
//       avgCleaningFee: { $gt: 40 }
//     }
//   }
// ]);

// db.air_bnb.aggregate([
//     {
//         $group: {
//             "_id": "$bedrooms",
//             "total": { $sum: 1 },
//              avgPrice: { $avg: "$price" },
//              avgCleaningFee: { $avg: { $round: ["$cleaning_fee", 2] } }
//         }
//     },

//     {
//         $project: {
//             "bedrooms": "$_id",
//             "total": 1,
//             "avgPrice": {
//                 $round: ["$avgPrice", 2]
//             },
//             "avgCleaningFee": 1,
//             "_id": 0 // 0 - hide, 1 - show, default is 1 for _id
//         }
//     }
// ])

// Write a query to return the housings for which at least one review with listing id 10006546 and reviewer id 11263097 was written.
// db.air_bnb.aggregate([
//   {
//     $match: {
//         reviews: {
//             $elemMatch: {
//                 listing_id: "10006546",
//                 reviewer_id: "11263097"
//             }
//         }
//     }
//   },
// ]);

// Write a query to return the housings for which at least one review with listing id 10006546 and one reviewer name Bridget were written.
// db.air_bnb.aggregate([
//     {
//         $match: {
//             "reviews.listing_id": "10006546",
//             "reviews.reviewer_name": "Bridget"
//         }
//     },
// ]);

//For each country, compute the total number of unique hosts.
db.air_bnb.aggregate([
  {
    $group: {
      _id: "$address.country",
      uniqueHosts: { $addToSet: "$host.host_id" }
    },
  },
  {
    $project: {
      _id: 1,
      totalUniqueHosts: { $size: "$uniqueHosts" }
    }
  }
]);
    
