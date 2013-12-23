function(doc){
  if (doc.doc_type == "make_model") {
    emit(doc.data.MakeName, {
      "MakeModelID": doc.data.MakeModelID,
      "MakeName": doc.data.MakeModelID,
      "ModelName": doc.data.ModelName      
    });
  } 
}