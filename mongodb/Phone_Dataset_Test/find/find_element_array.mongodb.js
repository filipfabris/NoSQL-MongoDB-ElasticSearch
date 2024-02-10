use('testMongoDB')

//mobile_phone_numers has an array of objects
//at least one of the object has a service_provider field with a value of "Wind"
// db.contacts.find({
//     "mobile_phone_numers.service_provider" : "Wind"
// })


// query will search for documents where any element in the array satisfies one condition or the other, but not necessarily both conditions simultaneously.


// db.contacts.find()

// db.contacts.find({
//    "mobile_phone_numers.service_provider": "TIM",
//    "mobile_phone_numers.phone_numer" : "+39 YYY 9874 123"
// })

//  meets both conditions, meaning the "service_provider" is "TIM" and the "phone_number" is "+39 YYY 9874 123" within the same array element.
// db.contacts.find({
//    "mobile_phone_numers": {
//       $elemMatch: {
//          "service_provider": "TIM",
//          "phone_numer": "+39 XXX 3456 778"
//       }
//    }
// })

db.contacts.aggregate([
   {
      $match : {
         "mobile_phone_numers": {
            $elemMatch: {
               "phone_numer": "+39 XXX 3456 778",
               "service_provider": "TIM"
            }               
         }
      }

   }
])

