let uitkomsten = {
    speler1: 0,
    speler2: 0
  };
  
  function gooiDobbelsteen(speler) {
    let uitkomst = Math.floor(Math.random() * 20) + 1;
  
    if (speler === 1) {
        uitkomsten.speler1 = uitkomst;
        document.getElementById("uitkomst1").innerHTML = "Speler 1: " + uitkomst;
    } else if (speler === 2) {
        uitkomsten.speler2 = uitkomst;
        document.getElementById("uitkomst2").innerHTML = "Speler 2: " + uitkomst;
    }
  }
  
  function ToonUitkomst() {
    let winnaar = "";
  
    if (uitkomsten.speler1 > uitkomsten.speler2) {
        winnaar = "Speler 1 heeft gewonnen!";
    } else if (uitkomsten.speler1 < uitkomsten.speler2) {
        winnaar = "Speler 2 heeft gewonnen!";
    } else {
        winnaar = "Het is gelijkspel!";
    }
  
    document.getElementById("winnaar").innerHTML = winnaar;
  }