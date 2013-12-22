function(doc) {
	if (typeof(doc.name) !== 'undefined' && doc.name == "make_model") {
	  emit(doc.data.MakeName, null);
	}	
}