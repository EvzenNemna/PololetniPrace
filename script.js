$(document).ready(function() {
  $(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      margin: 10,
      loop: true,
      nav: false,
      items: 1,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autplayTimeout: 4,
    });
  });

  var count = 0;
  var cena = 0;
  var velikosti = "";

  $("#add-to-cart").click(function() {
    velikosti += document.getElementById("size").value + " ";
    count++;
    cena += 150;
    localStorage.setItem("pocet", count);
    localStorage.setItem("velikost", velikosti);
    localStorage.setItem("nazev", document.getElementById("name").innerHTML);
    localStorage.setItem("cena", cena);
  });

  if (localStorage.getItem("pocet")>= 1) {
    document.getElementById("empty").style.display = "none";
    document.getElementById("shirt-item").style.display = "flex";
    document.getElementById("go-to-payment").style.display = "initial";
    document.getElementById("appendable").innerHTML = "Počet: " + localStorage.getItem("pocet") + "x";
    document.getElementById("name").innerHTML = localStorage.getItem("nazev");
    document.getElementById("price").innerHTML = localStorage.getItem("cena") + " kč";
    document.getElementById("sizes").innerHTML = localStorage.getItem("velikost");
  }

  $("#go-to-payment").click(function() {
    localStorage.removeItem("pocet");
    localStorage.removeItem("velikost");
    localStorage.removeItem("nazev");
    localStorage.removeItem("cena");
    document.getElementById("empty").style.display = "flex";
    document.getElementById("shirt-item").style.display = "none";
    document.getElementById("go-to-payment").style.display = "none";
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function addToCart() {
  var appendable = document.getElementById("appendable");
  console.log(appendable);
}




