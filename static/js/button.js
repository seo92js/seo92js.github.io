function darkLightHandler(self){
    if($(self).val() === 'Dark Mode'){
        $(self).val('Light Mode');

        $('body header div').removeClass('text-black').addClass('text-white');
        $('.container-fluid').removeClass('text-black').addClass('text-white');
        $('.container-fluid').removeClass('bg-light').addClass('bg-dark');
    }else{
        $(self).val('Dark Mode');

        $('body header div').removeClass('text-white').addClass('text-black');
        $('.container-fluid').removeClass('text-white').addClass('text-black');
        $('.container-fluid').removeClass('bg-dark').addClass('bg-light');
    }
}