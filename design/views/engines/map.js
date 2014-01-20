function(doc) {
	if (doc.doc_type=="car_engine") {
		var data = {
			"CarEngineID": doc.data.CarEngineID,
			"DisplacementCC": doc.data.DisplacementCC,
			"MpgHighway": doc.data.MpgHighway,
			"MpgCity": doc.data.MpgCity,
			"Horsepower": doc.data.Horsepower,
			"Cylinders": doc.data.Cylinders
		};
	  emit(doc.data.MakeModelID, data)    
	  emit([doc.data.MakeModelID, doc.data.Year], data)	  
	}	
}
