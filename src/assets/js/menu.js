var div = document.querySelector('.mob-menu');
console.log(div)
div.addEventListener('click', function() 
{
    console.log('hu')
    var sidebar = document.querySelector('.container__sidebar');
    sidebar.classList.toggle('hide');

    
    var dropdown = document.querySelector('.mob-menu');
    dropdown.classList.toggle('open');
});
