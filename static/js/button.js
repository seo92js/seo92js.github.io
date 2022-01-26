function darkLightHandler(self){
    // var target = document.querySelector('body');
   
    // if(self.value === 'Dark Mode'){
    //     target.style.backgroundColor = 'black';
    //     target.style.color = 'white';
    //     self.value = 'Light Mode';
    // }else{
    //     target.style.backgroundColor = 'white';
    //     target.style.color = 'black';
    //     self.value = 'Dark Mode';
    // }
    
    if($(self).val() === 'Dark Mode'){
        $('body').css('color', 'white');
        $('body').css('backgroundColor', 'black');
        $(self).val('Light Mode');
    }else{
        $('body').css('color', 'black');
        $('body').css('backgroundColor', 'white');
        $(self).val('Dark Mode');
    }
}