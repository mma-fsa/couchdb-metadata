function(head, req) {
  provides("json", function(){
    var collated = {}
    var distinct = {}
    var row = null
    while(row = getRow()){
      if (!collated[row.key]) {
        collated[row.key] = []
        distinct[row.key] = {}
      }
      if (!distinct[row.key][row.value]) {
        collated[row.key].push(row.value)
      }
      distinct[row.key][row.value] = true
    }
    return toJSON(collated)
  })  
}