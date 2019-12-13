$(document).ready(function () {
    var $name = $("#nav-name");
    var $main = $("#nav-main");
    var incremented = 0;

    function shiftNavIcons() {
        var $heading = $("#nav-heading");

        if($name[0].offsetWidth < ($heading[0].offsetWidth+10)) {
            $main.addClass('nav-shifted');
        } else {
            incremented++;
            if(incremented > 5 && $main[0].offsetWidth > 445) {
                $main.removeClass('nav-shifted');
                incremented = 0;
            }
            
        }
        
    };

    $(window).on('resize', (event) => {
        shiftNavIcons();
    });

    shiftNavIcons();
});
