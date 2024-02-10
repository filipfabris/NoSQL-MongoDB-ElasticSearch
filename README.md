# NoSQL-MongoDB-ElasticSearch

## MongoDB
* Dataset: `Airbnb`
* Collection: `listingsAndReviews`

* Sample Query:
```javascript

//Write a query to compute the total number of housings for each amenity, returning only the amenities whose count is greater than 15
db.air_bnb.aggregate([
    {
        $unwind: "$amenities"
    },
    {
        $group: {
            "_id": "$amenities",
            "total": { $sum: 1 }
        }
    },

    {
        $match: {
            "total": { $gt: 15 }
        }
    },

    {
        $project: {
            "amenities": "$_id",
            "total": 1,
            "_id": 0 // 0 - hide, 1 - show, default is 1 for _id
        }
    },

    {
        $group: {
            "_id": true,
            "total": { $sum: 1 }
        }
    }
])

```


## ElasticSearch
* Dataset: `Employees`
* Index: `employees`

* Sample Query:
```json
// Write a query to collect all the employees whose designation is “Manager” or “Delivery Manager” and whose salary is not higher than 150’000. Assign a higher score to those whose interests includes “Blogging”.
GET exercise/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "match": {
                        "Designation": 
                        {
                            "query": "Manager Delivery Manager",
                            "operator": "or"
                        }
                    }
                },
                {
                    "range": {
                        "Salary": {
                            "lte": 150000
                        }
                    }
                }
            ],
            "should": [
                {
                    "match": {
                        "Interests": "Blogging"
                    }
                }
            ]
        }
    }
}
```