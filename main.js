function preloadImages(){
    new Promise((resolve, reject) => {
        var images = new Array()

        preload(
            "https://angledorvertical.herokuapp.com/images/m4_angled_rmb.png",
            "https://angledorvertical.herokuapp.com/images/m4_vertical_rmb.png",
            "https://angledorvertical.herokuapp.com/images/m4_angled_ads.png",
            "https://angledorvertical.herokuapp.com/images/m4_vertical_ads.png",
            "https://angledorvertical.herokuapp.com/images/scar_angled_rmb.png",
            "https://angledorvertical.herokuapp.com/images/scar_vertical_rmb.png",
            "https://angledorvertical.herokuapp.com/images/scar_angled_ads.png",
            "https://angledorvertical.herokuapp.com/images/scar_vertical_ads.png",
            "https://angledorvertical.herokuapp.com/images/sks_angled_rmb.png",
            "https://angledorvertical.herokuapp.com/images/sks_vertical_rmb.png",
            "https://angledorvertical.herokuapp.com/images/sks_angled_ads.png",
            "https://angledorvertical.herokuapp.com/images/sks_vertical_ads.png",
            "https://angledorvertical.herokuapp.com/images/ump_angled_rmb.png",
            "https://angledorvertical.herokuapp.com/images/ump_vertical_rmb.png",
            "https://angledorvertical.herokuapp.com/images/ump_angled_ads.png",
            "https://angledorvertical.herokuapp.com/images/ump_vertical_ads.png",
            "https://angledorvertical.herokuapp.com/images/vector_vertical_rmb.png",
            "https://angledorvertical.herokuapp.com/images/vector_vertical_ads.png"
        )

        for(i=0; i<preload.arguments.length; i++){
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
        resolve();
        });
}


$(document).ready(function(){

    preloadImages();

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

    $('#gunText').on('click', '.m4Icon', function() {
        $('.angledImg').attr('src', './images/m4_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/m4_vertical_'+aimMode+'.png');

        $('.selected').removeClass('selected');
        $('.m4Icon').addClass('selected');

        $('.info').text("You've chosen M416! No additional information about this weapon. Other attachments will be an option soon!");
        selectedGun="m4";
    });

    $('#gunText').on('click', '.scarIcon', function() {
        $('.angledImg').attr('src', './images/scar_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/scar_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen Scar! No additional information about this weapon. Other attachments will be an option soon");
        
        $('.selected').removeClass('selected');
        $('.scarIcon').addClass('selected');

        selectedGun="scar";
    });

    $('#gunText').on('click', '.sksIcon', function() {
        $('.angledImg').attr('src', './images/sks_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/sks_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen SKS! Since this is not an autofire weapon, this is just spamclick. Aim Down Sight pictures will be added shortly!");
        
        $('.selected').removeClass('selected');
        $('.sksIcon').addClass('selected');

        selectedGun="sks";
    });

    $('#gunText').on('click', '.umpIcon', function() {
        $('.angledImg').attr('src', './images/ump_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/ump_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen UMP! No additional information about this weapon. Other attachments will be an option soon");
        
        $('.selected').removeClass('selected');
        $('.umpIcon').addClass('selected');
        
        selectedGun="ump";
    });

    $('#gunText').on('click', '.vectorIcon', function() {
        $('.angledImg').attr('src', './images/vector_angled_'+aimMode+'.png');
        $('.verticalImg').attr('src', './images/vector_vertical_'+aimMode+'.png');
        $('.info').text("You've chosen Vector! This weapon cannot equip angled grip. Other attachments will be an option soon");
        
        $('.selected').removeClass('selected');
        $('.vectorIcon').addClass('selected');

        selectedGun="vector";
    });

})

var aimMode = "rmb";
var selectedGun = "";