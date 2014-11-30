##PS2 Form Helper for BITS Pilani

```
DISCLAIMER: By using this script, you are taking full responsibility of the consequences. This script is intended for general use and no warranty is implied for suitability to any given task. I hold no responsibility for your setup or any damage done while using/installing/modifing this script.
```


Firstly add the bookmarklet below to your bookmarks bar


```
javascript:(function(){function r(e,t,n){$.ajax({type:"POST",url:"StudentStationPreference.aspx/saveStudentStationPref",contentType:"application/json; charset=utf-8",data:'{ jsondata: "'+encodeURIComponent(e)+'", jsonvalue: "'+encodeURIComponent(t)+'",  contistation: "'+encodeURIComponent(n)+'"}',dataType:"json",success:function(e){alert("Station Preference Submitted Successfully")}})}function i(){var e=$("#prefOrder2").val();alert(e)}function s(){var e=$("#prefOrder2").val().split("\n");jsondata="[";var t=true;for(var n=0;n<e.length;n++){if(!e[n].match(/^\d+$/)){alert("Found non numeric value in pasted data!");return}jsondata+="{";jsondata+="'isActive':'1',";jsondata+="'PreferenceNo':'"+(n+1)+"','StationId':'"+e[n]+"',";jsondata+="'Accommodation':'"+t+"',";jsondata+="},"}jsondata=jsondata.substr(0,jsondata.length-1);jsondata+="]";var i="";var s=0;console.log(jsondata);r(jsondata,i,s)}function o(){(window.myBookmarklet=function(){var e=document.createElement("input");e.setAttribute("type","button");e.setAttribute("value","Submit");e.setAttribute("class","btn btn-primary");e.setAttribute("id","submitPrefs");var t=document.createElement("textarea");t.setAttribute("rows","2");t.setAttribute("id","prefOrder2");document.getElementById("btnSave").parentNode.insertBefore(t,null);document.getElementById("btnSave").parentNode.insertBefore(e,null);document.getElementById("submitPrefs").onclick=s})()}var e="1.3.2";if(window.jQuery===undefined||window.jQuery.fn.jquery<e){var t=false;var n=document.createElement("script");n.src="http://ajax.googleapis.com/ajax/libs/jquery/"+e+"/jquery.min.js";n.onload=n.onreadystatechange=function(){if(!t&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){t=true;o()}};document.getElementsByTagName("head")[0].appendChild(n)}else{o()}})();

```


1. Sort the given csv according to your preferences.
2. Login and go to the preferences page
3. Once the page load completely, click on the previously dragged book mark in your bookmarks bar
4. Now copy the station id column from your sorted csv list. Ensure that you dont copy the column title, also make sure that you cursor ends on the last number and NOT on a new line
5. Now click on the Submit button
6. You'll get a popup confirming the submission.
7. Now refresh your preferences page and see the result!
