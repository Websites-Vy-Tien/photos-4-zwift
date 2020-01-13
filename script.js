console.log("Start the party 🚴🏼‍♂️");

// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 12000; // 12 seconds

if (localStorage.getItem("refreshRate")) {
  refreshRate = localStorage.getItem("refreshRate");
} else {
  localStorage.setItem("refreshRate", refreshRate);
}
let refSelectVal = parseInt(refreshRate);
$("#refresh-select").val(refSelectVal);

//
//
//
$("#refresh-select").change(function() {
  refreshRate = $(this).val();
  localStorage.setItem("refreshRate", refreshRate);
});

// Automatically reload the browser
setInterval(function() {
  location.reload();
}, refreshRate);

// Hide the images on load
$("#foot").hide();

// Get a random image from Unsplash and fade it in on load
$("#foot")
  .css({
    // serves a random image from this collection on Unsplash.com
    "background-image":
      "url(https://source.unsplash.com/1600x900/?nature,water,snow,surf,ironman,cycling,mountains)"
  })
  .fadeIn(1500);

// //
// $.get("https://www.cloudflare.com/cdn-cgi/trace", function(data) {
//   console.log("🟣 We got: ");
//   console.log(data);
// });
