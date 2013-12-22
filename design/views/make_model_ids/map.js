function(doc) {
	if (typeof(doc.name) !== 'undefined' && doc.name == "make_model") {
	  emit(doc.data.MakeModelID, {
      "MakeModelID": doc.data.MakeModelID,
      "MakeName": doc.data.MakeName,
      "ModelName": doc.data.ModelName      
    });
	}	
}