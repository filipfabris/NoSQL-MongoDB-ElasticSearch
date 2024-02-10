GET _cat/indices

// Get one elemnt from the index steam_overviews
GET steam_overviews/_search
{
  "query": {
    "match_all": {}
  }
}

// Delete the index steam_overviews
DELETE steam_overviews

GET steam_overviews/_doc/umXpHIwBw556HGXMGkWq

GET steam_overviews/_search
{
    "query": {
        "match": {
            "title": "Spooky's Jum"
        }
    }
}


GET /steam_overviews/_search
{
  "query": {
    "match": {
        "publisher": {
            "query": "Daybreak Game Company ",
            "operator": "and"
        }
    }
    }
}

GET /steam_overviews/_search
{
  "query": {
    "term": {
      "publisher": {
        "value": "Daybreak Game Company ",
        "boost": 1.0,
        "case_insensitive": false
      }
    }
  }
}


GET steam_overviews/_search
{
  "_source": ["title"],
  "query": {
    "match_all": {}
  }
}

GET /steam_overviews/_count

GET /steam_overviews/_search
{
  "query": {
    "match": {
      "overview": {
        "query": "free to play",
        "operator": "and"
      }
    }
  }
}

GET /steam_overviews/_search
{
  "query": {
    "match": {
      "tags": "Tanks"
    }
  }
}


GET /index/_search
{
  "query": {
    "bool": {
      "filter": [
        {"term": {"status": "published"}},
        {"range": {"price": {"gte": 500}}}
      ]
    }
  }
}

GET /steam_overviews/_search
{
  "query": {
    "bool": {
      "filter": [
        {"term": {"publisher": "Daybreak Game Company "}}
      ],
      "must": [
        {"match": {"tags": "Multiplayer"}},
        {"match": {"tags": "Action"}}
      ],
      "must_not": [
        {"match": {"tags": "Singleplayer"}}
      ],
      "should": [
        {"match": {"tags": "Space"}},
        {"match": {"tags": "Shooter"}}
      ]
    }
  }
}

GET /steam_overviews/_mapping

GET /steam_overviews/_mapping/field/title




PUT /my_index

PUT /my_index
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 1
  }
}

DELETE /my_index






PUT /my_index
{
  "mappings": {
    "properties": {
      "age": { "type": "integer" },
      "email": { "type": "keyword" },
      "name": {
        "properties": {
          "first": { "type": "text" },
          "last": { "type": "text" }
        }
      }
    }
  }
}

PUT /my_index/_mapping
{
    "properties": {
      "city": { "type": "text" },
      "index": "false"
    }
}

PUT /my_index/_mapping
{
    "properties": {
        "city": {
            "type": "text",
            "index": false
        }
    }
}

GET /my_index/_mapping





POST /my_index/_doc/1
{
  "age": 25,
  "email": "john.doe@example.com",
  "name": {
    "first": "John",
    "last": "Doe"
  }
}


GET /my_index/_doc/1

GET /my_index/_search
{
  "query": {
    "match": {
      "name.first": "john"
    }
  }
}

GET /steam_overviews/_search
{
  "aggs": {
    "games_per_publisher": {
      "terms": {
        "field": "publisher"
      }
    }
  }
}


GET /steam_overviews/_search
{
  "query": {
    "term": {
      "publisher": {
        "value": "Daybreak Game Company ",
        "boost": 1.0,
        "case_insensitive": false
      }
    }
  },

  "aggs": {
    "games_per_publisher": {
      "terms": {
        "field": "publisher"
      }
    }
  }
}