var client;

//Using document.getElementById to get the first bit of text data from the form
function startDataUpload() {
	alert ("start data upload");
	var question_id = document.getElementById("question_id").value;
	var question = document.getElementById("question").value;
	var answer_1 = document.getElementById("answer_1").value;
	var answer_2 = document.getElementById("answer_2").value;
	var answer_3 = document.getElementById("answer_3").value;
	var answer_4 = document.getElementById("answer_4").value;
	var correct_answer = document.getElementById("correct_answer").value;
	var location_name = document.getElementById("location_name").value;

	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	var postString = "question_id="+question_id+"&question="+question+"&answer_1="+answer_1+"&answer_2="+answer_2+"&answer_3="+answer_3+"&answer_4="+answer_4+"&correct_answer="+correct_answer+"&location_name="+location_name; 
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
	//show a pop up alert
	alert(question_id + " " + question + " "+ answer_1 + " "+answer_2 + " "+ answer_3 + " "+ answer_4 + " "+ latitude + " "+longitude + " "+ correct_answer + " " + location_name);

	processData(postString);
}

//Also add an AJAX call and response method to code in uploadData.js
function processData(postString) {
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30284/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

// create the code to wait for the response from the data server, and process the response once it is received
// this function listens out for the server to say that the data is ready - i.e. has state 4
function dataUploaded() {
	if (client.readyState == 4) {
        // change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}