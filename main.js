$(document).ready(function(){
    $('#gunText').on('click', '.m4Text', function() {
        $('.angledImg').attr('src', './images/m4_angled.jpg');
        $('.verticalImg').attr('src', './images/m4_vertical.jpg');
        $('.highlighted').removeClass('highlighted');
        $('.m4Text').addClass('highlighted');
        alert('M4 clicked!');
    });

    $('#gunText').on('click', '.scarText', function() {
        $('.angledImg').attr('src', './images/scar_angled.jpg');
        $('.verticalImg').attr('src', './images/scar_vertical.jpg');
        $('.highlighted').removeClass('highlighted');
        $('.scarText').addClass('highlighted');
        alert('Scar clicked!');
    });

})