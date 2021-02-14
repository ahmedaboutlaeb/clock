


(function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";



  if (h == 0) { h = 12 };

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  if (session == 'PM' && h < 5) {
    document.getElementsByClassName("container")[0].classList.add("afternoon");
    var x = document.getElementById("an");
    x.innerHTML = "good after noon";
  }
  if (session == "PM" && h >= 5) {
    document.getElementsByClassName("container")[0].classList.add("night");
    var x = document.getElementById("an");
    x.innerHTML = "good night";
  }
  if (session == "AM" && h > 4) {
    document.getElementsByClassName("container")[0].classList.add("morning");

    var x = document.getElementById("an");
    x.innerHTML = "good  morning";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = `${h}:${m}:${s}:${session}`;

  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}())



