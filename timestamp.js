<p><script type="text/javascript" charset="utf-8"><br />
   $(document).ready(function() {<br />
    function getFormattedDate() {<br />
    var date = new Date();</p>

<p>    var month = date.getMonth() + 1;<br />
    var day = date.getDate();<br />
    var hour = date.getHours();<br />
    var min = date.getMinutes();<br />
    var sec = date.getSeconds();</p>

<p>    month = (month < 10 ? "0" : "") + month;<br />
    day = (day < 10 ? "0" : "") + day;<br />
    hour = (hour < 10 ? "0" : "") + hour;<br />
    min = (min < 10 ? "0" : "") + min;<br />
    sec = (sec < 10 ? "0" : "") + sec;</p>

<p>    var str = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;</p>

<p>    /*alert(str);*/</p>

<p>    return str;<br />
    }<br />
     alert("Test!");<br />
   });<br />
</script>