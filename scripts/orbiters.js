alert("hm")
var folder = "http://127.0.0.1:5000";

var result = $.ajax({
  type: "GET",
  url: folder,
  success: function(response){
        var output = response;
        alert(output);
  }
})
console.log(result)