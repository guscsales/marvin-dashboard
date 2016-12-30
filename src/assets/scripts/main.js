(function(window, document){

    var initTooltip = function(){
        //  Initialize tooltip
        $('[data-toggle="tooltip"]').tooltip();
    }


    var initActiveMenu = function(){

        function setActive(routerLink){
            var $link = $('.main-nav [routerlink="' + routerLink + '"]');

            console.log($link)

            $('.main-nav [href]').removeClass('active');
            $link.addClass('active');

            if($link.parents('.sub').length > 0)
                $link.parents('.sub').siblings('a').addClass('active');
        }

        $(document).on('click', '[routerlink]', function(){
            setActive($(this).attr('routerlink'));    
        });

        setActive(window.location.pathname);
    }



    initTooltip();
    initActiveMenu();
    
})(window, document);