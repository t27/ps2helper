javascript:(function(){


	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}

	function saveprefdata(data, jsonvalue, contistation) {

	    $.ajax({
	        type: "POST",
	        url: "StudentStationPreference.aspx/saveStudentStationPref",
	        contentType: "application/json; charset=utf-8",
	        data: '{ jsondata: "' + encodeURIComponent(data) + '", jsonvalue: "' + encodeURIComponent(jsonvalue) + '",  contistation: "' + encodeURIComponent(contistation) + '"}',
	        dataType: "json",
	        success: function (response) {
	       	            alert("Station Preference Submitted Successfully");
	       	            window.location.replace("FillProbBankSkills.aspx");
	        }
	    });

	}
	function submitprefs1(){

		var text1 = $('#prefOrder2').val();
		alert(text1);
	}
	function pushPrefs(){
		var lines = $('#prefOrder2').val().split('\n');
		jsondata="[";
		var accomo=true;
		if(lines.length!=312){
			alert("Didnt find Exactly 312 stations!");
			return;
		}
		for(var i = 0;i < lines.length;i++){
			if(!(lines[i].match(/^\d+$/)))
			{
				alert("Found non numeric value in pasted data!");
				return;
			}
		    jsondata += "{";
            jsondata += "'isActive':'1',";
            jsondata += "'PreferenceNo':'" + (i+1) + "','StationId':'" + lines[i] + "',";
            jsondata += "'Accommodation':'" + accomo + "',";
            jsondata += "},";
		}
		jsondata = jsondata.substr(0, jsondata.length - 1);
        jsondata += "]";
        var dummy = "";
		var c = 0;
		saveprefdata(jsondata, dummy, c);
	}


	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			var submitbtn=document.createElement("input");
			submitbtn.setAttribute("type","button");
			submitbtn.setAttribute("value","Submit");
			submitbtn.setAttribute("class","btn btn-primary");
			submitbtn.setAttribute("id","submitPrefs");

			var textarea1=document.createElement("textarea");
			textarea1.setAttribute("rows","2");
			textarea1.setAttribute("id","prefOrder2");
			if(document.getElementById("submitPrefs")==null)
			{
				document.getElementById("btnSave").parentNode.insertBefore(textarea1,null);
				document.getElementById("btnSave").parentNode.insertBefore(submitbtn,null);

				document.getElementById("submitPrefs").onclick=pushPrefs;
			}
			else{
				alert("You Only Click Once");
			}

		})();
	}
})();
