function(doc) {
	if (doc.doc_type == "make_model") {
	  emit(doc.data.MakeName, null);
	}	
}