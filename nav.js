var bindNavigation = "";


bindNavigation +=  "<div class='container-fluid'>";
bindNavigation +=    "<div class='navbar-header'>";
bindNavigation +=      "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>";
bindNavigation +=        "<span class='icon-bar'></span>";
bindNavigation +=        "<span class='icon-bar'></span>";
bindNavigation +=        "<span class='icon-bar'></span>";
bindNavigation +=      "</button>";
bindNavigation +=      "<a class='navbar-brand' href='https://students.aberrobotics.club/'>Aber Robotics Club</a>";
bindNavigation +=    "</div>";
bindNavigation +=    "<div class='collapse navbar-collapse' id='myNavbar'>";
bindNavigation +=      "<ul class='nav navbar-nav navbar-right'>";
bindNavigation +=        "<li><a href='https://students.aberrobotics.club/'>HOME</a></li>";
//bindNavigation +=        "<li><a href='https://students.aberrobotics.club/committee'>COMMITTEE</a></li>";
bindNavigation +=        "<li class='dropdown'>";
bindNavigation +=          "<a class='dropdown-toggle' data-toggle='dropdown' href='#'>EVENTS";
bindNavigation +=         "<span class='caret'></span></a>";
bindNavigation +=          "<ul class='dropdown-menu'>";
//bindNavigation +=            "<li>EVENTS COMING SOON</li>";
bindNavigation +=            "<li><a href='https://students.aberrobotics.club/freshers'>FRESHERS WEEK</a></li>";
//bindNavigation +=			 "<li><div class='divider'></li>";
//bindNavigation +=            "<li><a href='https://students.aberrobotics.club/scienceweek'>SCIENCE WEEK</a></li>";
bindNavigation +=          "</ul>";
bindNavigation +=        "</li>";
bindNavigation +=        "<li class='dropdown'>";
bindNavigation +=          "<a class='dropdown-toggle' data-toggle='dropdown' href='#'>PROJECTS 2021/22";
bindNavigation +=          "<span class='caret'></span></a>";
bindNavigation +=          "<ul class='dropdown-menu'>";
bindNavigation +=        "<li><a href='https://students.aberrobotics.club/projects'>PROJECTS LIST</a></li>";
bindNavigation +=			 "<li><div class='divider'></li>";
bindNavigation +=            "<li><a href='https://students.aberrobotics.club/github'>VISIT GITHUB</a></li>";
bindNavigation +=			 "<li><a href='https://github.com/arcub/magician-chassis'>MAGICIAN CHASSIS</a></li>";
bindNavigation +=	     "<li><a href='https://students.aberrobotics.club/sumo'>SUMO</a></li>";
//bindNavigation +=	     "<li><a href='https://students.aberrobotics.club/ort2020'>OLYPMUS ROVER TRIALS</a></li>";
bindNavigation +=          "</ul>";
bindNavigation +=        "</li>";
bindNavigation +=        "<li><a href='https://students.aberrobotics.club/shop'>SHOP</a></li>";
bindNavigation +=        "<li><a href='https://students.aberrobotics.club/#contact'>CONTACT</a></li>";
bindNavigation +=        "<!--<li><a href='#'><span class='glyphicon glyphicon-search'></span></a></li>-->";
bindNavigation +=      "</ul>";
bindNavigation +=    "</div>";
bindNavigation +=  "</div>";

function navjs() {
	document.getElementById('navjs').innerHTML = bindNavigation;
}
