function showGreeting() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  
  document.getElementById("firstHref").textContent= `ANASAYFA`
  if (name.trim() !== "") {
    document.getElementById("main").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("greeting").textContent = `Selam, ${name}!`;
    document.getElementById(
      "greeting1"
    ).textContent = `Hoşgeldin , seni görmek çok`;

    document.getElementById(
      "greeting2"
    ).textContent = `güzel !`;

    showTime();
  } else {
    alert("Lütfen bir isim girin.");
  }
}
document.getElementById("bugun").textContent = `Bugün`;

function showTime() {
  const date = new Date();
  const day = date.toLocaleDateString("tr-TR", { weekday: "long" });
  const time = date.toLocaleTimeString("tr-TR");
  document.getElementById("time").textContent = `${day} - ${time}`;
}
document.getElementById("firstHref").onclick = function () {
  var a = document.getElementById("firstHref")=
  a.onclick = function () {};
};


