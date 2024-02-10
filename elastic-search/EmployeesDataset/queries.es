
GET /exercise/_mapping

//Write a query to collect all the employees whose first name is “Bob”
GET exercise/_search
{
    "query": {
        "match":{
            "FirstName": "Bob"
        }
    }
}

//Write a query to collect all the employees whose salary is greater than 80’000 and less than 95’000.
GET exercise/_search
{
    "query": {
        "range":{
            "Salary": {
                "gte": 80000,
                "lte": 95000
            }
        }
    }
}

//Write a query to collect all the employees whose age is 31
GET exercise/_search
{
    "query": {
        "match": {
            "Age": 31
        }
    }
}

GET exercise/_search
{
    "query": {
        "range": {
            "Age": {
                "gt": 31
            }
        }
    }
}

//Write a query to collect all the employees who joined later than 03/09/2015.
GET exercise/_search
{
    "query": {
        "range": {
            "DateOfJoining": {
                "gt": "2015-09-03"
            }
        }
    }
}

//Write a query to collect all the employees whose gender is exactly “Male”.
GET exercise/_search
{
    "query":{
        "match": {
            "Gender": "Female"
        }
    }
}


//Write a query to collect all the employees whose first name is “Moses” and whose last name is “Daschofsky”
GET exercise/_search
{
    "query": {
        "bool" :{
            "must": [
                {
                    "match": {
                        "FirstName": "Moses"
                    }
                },
                {
                    "match": {
                        "LastName": "Daschofsky"
                    }
                }
            ]
        }
    }
}


//Write a query to collect all the employees whose interests contains the words “Paragliding”, “Kayaking”, and “Playing”. The more words are found, the higher the final score.
GET exercise/_search
{
    "query": {
        "match": {
            "Interests": {
                "query": "Paragliding Kayaking Playing",
                "operator": "and"
            }
        }
    }
}

//Write a query to collect all the employees whose name is “Elden”, assigning a higher score those whose designation is “Delivery Manager”
GET exercise/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "match": {
                        "FirstName": "Elden"
                    }
                }
            ],
            "should": [
                {
                    "match": {
                        "Designation": "Delivery Manager"
                    }
                }
            ]
        }
    }
}

//Write a query to collect all the employees whose last name is “Weatherly” and whose salary is greater than 50’000. The name should not affect the final score
GET exercise/_search
{
    "query": {
        "bool": {
            "filter": [
                {
                    "match": {
                        "LastName": "Weatherly"
                    }
                }
            ],
            "must": [
                {
                    "range": {
                        "Salary": {
                            "gt": 50000
                        }
                    }
                }
            ]
        }
    }
}

// Write a query to collect all the employees whose designation is “Manager”, assigning a higher score to those whose gender is “Female” and those who are married.
GET exercise/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "match": {
                        "Designation": "Manager"
                    }
                }
            ],
            "should": [
                {
                    "match": {
                        "MaritalStatus": "Married"
                    }
                }, 

                {
                    "match": {
                        "Gender": "Female"
                    }
                }
            ]
        }
    }
}


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

// Write a query to count the number of employees based on their gender and designation.
GET exercise/_search
{
    "aggs": {
        "gender_terms": {
            "terms": {
                "field": "Gender"
            }
        },
        "designation_terms": {
            "terms": {
                "field": "Designation"
            }
        }
    }
}

PUT exercise/_mapping
{
  "properties": {
    "Gender": {
      "type": "text",
      "fielddata": true
    }
  }
}

PUT exercise/_mapping
{
  "properties": {
    "Designation": {
      "type": "text",
      "fielddata": true
    }
  }
}

// Write a query to count the number of employees based on their gender. Then, compute the number of people based on their age for each gender.
GET exercise/_search
{
    "aggs": {
        "gender_terms": {
            "terms": {"field": "Gender"},
            "aggs": {
                "age_terms": {
                    "terms": {
                        "field": "Age"
                    }
                }
            }
        }
    }
}
