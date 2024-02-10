use ('exercise')

// Write one or more queries to return a single housing, and each single one of their
// attributes that are sub-documents or array. Inspect their content to understand their
// structure.

// db.air_bnb.findOne(
//     {},
//     {
//         amenities: 1,
//     }
// )

// Write a query to return all the housings whose minimum nights is equal to 2.

// db.air_bnb.find(
//     {"minimum_nights": {"$eq": "2"} },
//     {"minimum_nights": 1}
// )


// Write a query to return the number of housings whose number of reviews is greater than 10

// db.air_bnb.find(
//     {"number_of_reviews": {"$gt": 10} },
//     {"number_of_reviews": 1})
//  .sort({"number_of_reviews": 1})


//  Write a query to return the top 10 housings based on their number of bedrooms.

// db.air_bnb.find(
//     { },
//     {"bedrooms": 1})
//  .sort({"bedrooms": -1})
//  .limit(10)

// Write a query to return the housings whose host response rate is greater than 90.

// db.air_bnb.find(
//     {"host.host_response_rate": {$gt: 90} },
//     {"host.host_response_rate": 1}
// )

// Write a query to return the name of the hosts whose housings includes a TV and Iron.

// db.air_bnb.find(
//     {$and: [
//         {"amenities": "TV"},
//         {"amenities": "Iron"}
//     ]},
//     {"name": 1, "amenities": 1}
// )

// Write a query to return the name of the hosts whose housings includes a TV or Iron.

// db.air_bnb.find(
//     {$or: [
//         {"amenities": "TV"},
//         {"amenities": "Iron"}
//     ]},
//     {"name": 1, "amenities": 1}
// )

// Write a query to count the number of housings based on their price.

// db.air_bnb.aggregate([
//     {
//         $group: {
//         _id: "$price",
//         count: {$sum: 1}
//         }
//     }
// ])

// Write a query to compute the total number of bedrooms available across all housings.

// db.air_bnb.aggregate([
//     {
//         $group: {
//             _id: "$bedrooms",
//             count: {$sum: 1}
//         }
//     }
// ])

// Write a query to compute the total number of housings based on their cancellation policy,
// whose accommodates is greater than 6 and whose host has a profile picture.
// db.air_bnb.aggregate([
//     {
//         $match: {
//             "accommodates": {$gt: 6},
//         }
//    }, 

//     {
//         $match: {
//             "host.host_has_profile_pic": true,
//         }
//     },

//     {
//         $group: {
//             _id: "$cancellation_policy",
//             count: {$sum: 1}
//         }
//     }
// ])


// db.air_bnb.aggregate([
//     {
//         $match: {
//             "host.host_picture_url": { $ne: null},
//             "accommodates": { $gt: 6 },
//         }
//     },
//     {
//         $group: {
//             "_id": "$cancellation_policy",
//             "total": { $sum: 1 }
//         }
//     }
// ])

// Write a query to compute the total number of housings for each amenity.
// db.air_bnb.aggregate([
//     {
//         $unwind: {
//             path: "$amenities",        
//         }
//     },

//     {
//         $group:{
//             _id: "$amenities",
//             count: {$sum: 1}
//         }
//     }
// ])


// Write a query to compute the total number of housings for each amenity, returning only the
// amenities whose count is greater than 15.

// db.air_bnb.aggregate([
//     {
//         $unwind : "$amenities"
//     },

//     {
//         $group:{
//             _id: "$amenities",
//             count: {$sum: 1}
//         }
//     },

//     {
//         $match:{
//             count: {$gt: 15}
//         }
//     }
// ])

// Write a query to compute the average price and the average cleaning fees of the housings
// based on their number of bedrooms and bathrooms, returning only those whose average
// price is greater than 60 and average cleaning fees is greater than 40.

// db.air_bnb.aggregate([
//     {
//         $group: {
//             _id: {
//                 bedrooms: "$bedrooms",
//                 bathrooms: "$bathrooms"
//             },
//             avgPrice: { $avg: "$price" },
//             avgCleaningFees: { $avg: "$cleaning_fee" }
//         }
//     },

    // {
    //     $match: {
    //         avgPrice: { $gt: 60 },
    //         avgCleaningFees: { $gt: 40 }
    //     }
    // },

    // {
    //     $group: {
    //         _id: null,
    //         count: { $sum: 1 }
    //     }
    // }

// ])

// Write a query to return the housings for which at least one review with listing id 10006546
// and reviewer id 11263097 was written.

// db.air_bnb.aggregate([
//   {
//     $match: {
//         reviews: {
//             $elemMatch: {
//                 listing_id: "10006546",
//                 reviewer_id: "40031996"
//             }
//         }
//     }
//   },
// ]);

// Write a query to return the housings for which at least one review with listing id 10006546
// and one with reviewer name Bridget were written
// db.air_bnb.aggregate([

//     {
//         $match: {
//             "reviews.reviewer_id": "124514204",
//             "reviews.reviewer_name": "Bridget",
//         }
        
//     },

    // ISTO
    //     {
    //     $match: {
    //         "reviews.reviewer_name": "Bridget",
    //     }
    // },

    // {
    //     $match: {
    //         reviews: {
    //             $elemMatch: {
    //                 reviewer_name: "Bridget",
    //                 // reviewer_id: "30254316"
    //             }
    //         }
    //     }
    // }

// ])


// For each country, compute the total number of unique hosts.
// db.air_bnb.aggregate([
//     {
//         $group: {
//             _id: "$address.country",
//             count: { $sum: 1 }
//         }
//     }
// ])

// db.air_bnb.aggregate([
//     {
//         $group: {
//             _id: {
//                 country: "$address.country",
//                 host_id: "$host.host_id"
//             },
//             "duplication_count_per_host": {$sum: 1}
//             }
//         },

//     // {
//     //     $group: {
//     //         _id: "$_id.country",
//     //         "unique_host_count": {"$sum": 1}
//     //     }
//     // }

// ])
