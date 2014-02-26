function(head, req) {
  provides("json", function(){
    var collated = {}
    var distinct = {}
    var row = null
    while(row = getRow()){
      if (!collated[row.key]) {
        collated[row.key] = []
      }
      if (!distinct[row.value.CarEngineID]) {
        collated[row.key].push(row.value)
				distinct[row.value.CarEngineID] = true
      }
    }
    return toJSON(collated)
  })  
}
