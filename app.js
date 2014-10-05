$(document).ready(function(){
	$('#zip_lookup').submit(function(e){
		e.preventDefault();
		
	    var $results = $('#zip-lookup-results'),
		zipcode = $('#txt-zip').val();  // get zipcode from the user

	if(zipcode.length === 5){
		var result = $.ajax({
		url: 'http://ziptasticapi.com/'+zipcode+'?callback=?',
		//data: request,
		dataType: "jsonp",
		type: "GET",
		})
		 .done(function(data){
			console.log(data);
			if(typeof data.city != 'undefined' && typeof data.state != 'undefined') {
				$results.html("City: " + data.city + "<br> State: "
				+ data.state);  //print the results
			} else {
				$results.html("No results found"); //print if no results found
			}
			
		})
		}
		else {
		$results.html("Zipcode must be 5 digits long"); //print if no results found
		}
	
	});
	});
	

	