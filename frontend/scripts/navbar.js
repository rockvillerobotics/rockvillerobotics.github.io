$(function () {
    var bar = '';
    bar += '<nav class="navbar navbar-default" role="navigation">';
    bar += '<div class="container-fluid">';
    bar += '<div>';
    bar += '<ul class="nav navbar-nav">';
    bar += '<li id="home"><a href="index.html">Home</a></li>';
    bar += '<li id="code"><a href="https://github.com/RockvilleRobotics/Incredibots2020/">Code</a></li>';
    bar += '<li id="documentation"><a href="documentation.html">Documentation</a></li>';
    bar += '<li id="builds"><a href="builds.html">Builds</a></li>';
    bar += '<li id="videos"><a href="videos.html">Videos</a></li>';
    bar += '</ul>';
    bar += '</div>';
    bar += '</div>';
    bar += '</nav>';

    $("#main-bar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}
