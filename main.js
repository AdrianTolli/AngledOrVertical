$(document).ready(function(){

    $('#aimSelector').on('click', '.nkd', function(){
        $('.highlight').removeClass('highlight');
        $('.nkd').addClass('highlight');
        aimMode="naked";
    });

    $('#aimSelector').on('click', '.rmb', function(){
        $('.highlight').removeClass('highlight');
        $('.rmb').addClass('highlight');
        aimMode = "rmb";
    });

    $('#aimSelector').on('click', '.ads', function(){
        $('.highlight').removeClass('highlight');
        $('.ads').addClass('highlight');
        aimMode="ads";
    });

    $('#gunText').on('click', '.m4Text', function() {
        $('.angledImg').attr('src', './images/m4_angled_'+aimMode+'.jpg');
        $('.verticalImg').attr('src', './images/m4_vertical_'+aimMode+'.jpg');
    });

    $('#gunText').on('click', '.scarText', function() {
        $('.angledImg').attr('src', './images/scar_angled_'+aimMode+'.jpg');
        $('.verticalImg').attr('src', './images/scar_vertical_'+aimMode+'.jpg');
    });

    $('#gunText').on('click', '.sksText', function() {
        $('.angledImg').attr('src', './images/m4_angled_'+aimMode+'.jpg');
        $('.verticalImg').attr('src', './images/m4_vertical_'+aimMode+'.jpg');
    });

    $('#gunText').on('click', '.umpText', function() {
        $('.angledImg').attr('src', './images/ump_angled_'+aimMode+'.jpg');
        $('.verticalImg').attr('src', './images/ump_vertical_'+aimMode+'.jpg');
    });

})

var aimMode = "rmb"; 