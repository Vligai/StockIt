function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropdown1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};