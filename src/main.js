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

function makeResultHTML(data) {
  return `<div class="dropdown result" onclick="dropdown()">
            <section class="content">
                <div class="icon buy"></div>
                <p> AMZN </p>
                <p> Amazon </p>
                <div class="btn-dropdown">
                    <p><strong>SELL</strong></p>
                    <div class="icon open"></div>
                </div>
            </section>
            <section class="dropdown-content">

            </section>
        </div>`;
}