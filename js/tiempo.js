$(document).ready(function () {
    $('#instructions-modal').modal('show')
});
$('#start').click(function () {
    $("#start2").remove();
    var status = 'off';
    var delay = (Math.floor((Math.random() * 5) + 1)) * 1000;
    var clicks = 0;
    setTimeout(function () {
        //$("#song").play();
        document.getElementById("song").play();
        status = 'wait';
    }, delay);

    setTimeout(function () {
        if (status == 'wait') {
            status = 'failure'
        }

        $('#resultado').text(status);
        console.log(status);
    }, delay + 3000);


    $('#btn-listen').click(function () {

        if (status == 'wait' && clicks == 0) {
            status = 'success'
        } else {
            status = 'failure'
        }
        clicks = clicks + 1;
    })
});