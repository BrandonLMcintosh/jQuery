$(() =>{
    $('#movieSubmit').on('submit', (evt) =>{
        evt.preventDefault();
        const movie =  
            (($('.input.name').val()).length >= 2) 
            ?
            $('<li>').text(`  ${$('.input.name').val()} - `)
            :
            null;
        const rating = 
            ((Number($('.input.rating').val()) > 0) 
            && 
            (Number($('.input.rating').val()) < 10)) 
            ? 
            $('<span>').text(`${$('.input.rating').val()}  `)
            : 
            null;
        if(!movie) return;
        if(!rating) return;
        const remove = $('<button>').text('remove').addClass('remove');
        movie.append(rating);
        movie.prepend(remove);
        $('#movies').append(movie);
    })
    $('#movies').on('click', '.remove', (evt) => {
        (evt.target.parentElement).remove();
    })
});