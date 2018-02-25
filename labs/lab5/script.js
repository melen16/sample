
var pname = "";
var pemail = "";

function load(){
	$.ajax({

		dataType: "jsonp",
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}



function jsonCallback(data) {
	$('#tdhead').prepend("<tr><th>Firstname</th><th>Email</th></tr>");
	for(var i=0; i<data.length; i++){
		pname = data[i].name;
		pemail = data[i].email;
		$('#tdbody').prepend("<tr><td>" +pname+ "</td><td><a href='mailto:" +pemail+ "'>"+pemail+"</a></td></tr>");
	}
}
