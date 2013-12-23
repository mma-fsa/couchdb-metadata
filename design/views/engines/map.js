function(doc) {
	if (doc.doc_type=="car_engine") {
	  emit([doc.data.MakeModelID, doc.data.Year], doc.data)	  
	}	
}