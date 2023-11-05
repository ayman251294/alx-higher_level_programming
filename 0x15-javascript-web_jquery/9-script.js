/*fetches from https://hellosalut.stefanbohacek.dev/?lang=fr and displays the value of hello from thas fetch*/
$.getJSON("https://hellosalut.stefanbohacek.dev/?lang=fr", function(resp){
    $("#hello").text(resp.hello);
});
