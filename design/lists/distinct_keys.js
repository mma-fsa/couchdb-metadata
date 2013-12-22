function(head, req) {
  provides("json", function(){
    var distinct = {} 
    var list = []
    while(row = getRow()){
      if (!distinct[row.key])
        list.push(row.key)
      distinct[row.key] = true
    }    
    return toJSON(list)
  })  
}