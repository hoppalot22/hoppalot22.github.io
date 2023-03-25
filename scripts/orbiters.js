alert("hm")
var folder = "scripts/getOrbiterList.py";

var result = $.ajax({
  type: "GET",
  url: folder,
  success: function(response){
        var output = response;
        alert(output);
  }
})
console.log(result)