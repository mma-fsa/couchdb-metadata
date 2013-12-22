function(doc) {
	if (typeof(doc.name) !== 'undefined') {
	  emit(doc.name, null)
	}	
}