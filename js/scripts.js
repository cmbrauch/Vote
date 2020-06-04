$(document).ready(function() {
    const over18 = confirm("Are you 18 or older? Click OK for yes or Cancel for no.");

    if (over18 === true) {
        $('#vote').show();
    } else {
        $('#under-18').show();
    }
});