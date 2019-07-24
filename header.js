function headerjs(level) {
	var bindHeader = "";
	bindHeader += "<div class='row'>";
	bindHeader += "  <div class='col-md-6'>";
	if (level == 0) {
		bindHeader += "    <img src='img/aulogo.png' width='30%' />";
	}
	if (level == 1) {
		bindHeader += "    <img src='../img/aulogo.png' width='30%' />";
	}
	if (level == 2) {
		bindHeader += "    <img src='../../img/aulogo.png' width='30%' />";
	}
	bindHeader += "  </div>";
	bindHeader += "  <div class='col-md-6 col-md-offset-3'>";
	if (level == 0) {
		bindHeader += "    <h1 class='text-center'><img src='img/logo.png' width='20%' class='logo'/></h1>";
	}
	if (level == 1) {
		bindHeader += "    <h1 class='text-center'><img src='../img/logo.png' width='20%' class='logo'/></h1>";
	}
	if (level == 2) {
		bindHeader += "    <h1 class='text-center'><img src='../../img/logo.png' width='20%' class='logo'/></h1>";
	}
	bindHeader += "    <h1 class='text-center'>Aberystwyth Robotics Club<br />University Branch</h1>";
	//bindHeader += "    <h3 class='text-center'>(Spaces at the club are now full)</h3>";
	bindHeader += "  </div>";
	bindHeader += "</div>";
	document.getElementById('headerjs').innerHTML = bindHeader;
}

function logojs(level) {
	bindLogo = "";
	bindLogo += "  <div class='row'>";
	bindLogo += "    <div>";
	if (level == 0) {
		bindLogo += "      <h1 class='text-center'><img src='img/header-2019.jpg' width='5472' class='img-responsive'/></h1>";
	}
	if (level == 1) {
		bindLogo += "      <h1 class='text-center'><img src='../img/header-2019.jpg' width='5472' class='img-responsive'/></h1>";
	}
	if (level == 2) {
		bindLogo += "      <h1 class='text-center'><img src='../../img/header-2019.jpg' width='5472' class='img-responsive'/></h1>";
	}
	bindLogo += "    </div>";
	bindLogo += "  </div>";
	document.getElementById('logojs').innerHTML = bindLogo;
}