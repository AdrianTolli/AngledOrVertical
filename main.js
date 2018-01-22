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
        
        $('.angledImg').attr('src', './images/'+selectedGun+'_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/'+selectedGun+'_vertical_'+aimMode+'.png');

        $('.info').text("You've chosen Right Mouse Button, now click on desired gun");
    });

    $('#aimSelector').on('click', '.ads', function(){
        $('.highlight').removeClass('highlight');
        $('.ads').addClass('highlight');
        aimMode="ads";
        
        $('.angledImg').attr('src', './images/'+selectedGun+'_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/'+selectedGun+'_vertical_'+aimMode+'.png');


        $('.info').text("You've chosen Aim Down Sight, now click on desired gun");
    });

    $('#gunText').on('click', '.m4Text', function() {
        $('.angledImg').attr('src', './images/m4_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/m4_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen M416! No additional information about this weapon. Other attachments will be an option soon!");
        selectedGun="m4";
    });

    $('#gunText').on('click', '.scarText', function() {
        $('.angledImg').attr('src', './images/scar_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/scar_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen Scar! No additional information about this weapon. Other attachments will be an option soon");
        selectedGun="scar";
    });

    $('#gunText').on('click', '.sksText', function() {
        $('.angledImg').attr('src', './images/sks_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/sks_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen SKS! Since this is not an autofire weapon, this is just spamclick. Aim Down Sight pictures will be added shortly!");
        selectedGun="sks";
    });

    $('#gunText').on('click', '.umpText', function() {
        $('.angledImg').attr('src', './images/ump_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/ump_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen UMP! No additional information about this weapon. Other attachments will be an option soon");
        selectedGun="ump";
    });

    $('#gunText').on('click', '.vectorText', function() {
        $('.angledImg').attr('src', './images/vector_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/vector_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen Vector! This weapon cannot equip angled grip. Other attachments will be an option soon");
        selectedGun="vector";
    });

})

var aimMode = "rmb";
var selectedGun = "";