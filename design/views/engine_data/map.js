function(doc) {
	if (typeof(doc.name) !== 'undefined' && doc.name=="engine_data") {
	  emit(doc.id, doc)
	}	
}