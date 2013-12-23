function(head, req) {
  provides("json", function(){
    var collated = {}
    var row = null
    while(row = getRow()){
      if (!collated[row.key]) {
        collated[row.key] = []
      }
      collated[row.key].push(row.value)
    }
    return toJSON(collated)
  })  
}