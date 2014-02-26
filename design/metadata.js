{
  "_id":"_design/metadata",
  "_rev":"4-333e0f7d2cae73cb44b7e25e69aa5b66",
  "lists":{
    "collate":"#",
    "distinct_collate":"#",
    "distinct_engines":"#",
    "distinct_keys":"#"
  },
  "rewrites":[
    {
      "from":"/makeModels/",
      "to":"/_list/collate/make_models"
    },
    {
      "from":"/makeModels/:make/",
      "query":{
        "key":":make"
      },
      "to":"/_list/collate/make_models"
    },
    {
      "from":"/makes/",
      "query":{
        "group":"true"
      },
      "to":"/_list/distinct_keys/makes"
    },
    {
      "from":"/engines/:mmid",
      "query":{
        "key":":mmid"
      },
      "to":"/_list/distinct_engines/engines/"
    },
    {
      "from":"/engines/:mmid/:yr",
      "query":{
        "key":[
          ":mmid",
          ":yr"
        ]
      },
      "to":"/_list/distinct_engines/engines/"
    },
    {
      "from":"/years/:mmid",
      "query":{
        "key":":mmid"
      },
      "to":"/_list/distinct_collate/years/"
    }
  ],
  "views":{
    "doc_types":{
      "map":"#",
      "reduce":"#"
    },
    "engines":{
      "map":"#"
    },
    "make_model_ids":{
      "map":"#"
    },
    "make_models":{
      "map":"#"
    },
    "makes":{
      "map":"#",
      "reduce":"#"
    },
    "years":{
      "map":"#"
    }
  }
}