function(doc){
  if (typeof(doc.name) !== 'undefined' && doc.name == "make_model") {
    emit(doc.data.MakeName, {
      "MakeModelID": doc.data.MakeModelID,
      "MakeName": doc.data.MakeModelID,
      "ModelName": doc.data.ModelName      
    });
  } 
}