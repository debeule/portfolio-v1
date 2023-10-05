if (window.matchMedia("(max-width: 1100px").matches)
{
    const container = document.querySelector('.overview');
    container.classList.remove('active');
}


var tabsArray = ['skills', 'portfolio', 'about']


tabsArray.forEach(function(tabName) 
{
    document.getElementById('nav-' + tabName).addEventListener('click', function() 
    {
        var otherTabs = document.getElementsByClassName('tab')
        for (var i = 0; i < otherTabs.length; i++) 
        {
          var otherTab = otherTabs[i];
          if (otherTab.classList.contains('active')) {
            otherTab.classList.remove('active');
          }
        }

        var div = document.getElementsByClassName(tabName)
        
        div[0].classList.add('active')

        if (window.matchMedia("(max-width: 1100px").matches)
        {
            var container = document.querySelector('.container__sidebar');
            container.classList.toggle('hide');

            var menu = document.querySelector('.mob-menu');
            menu.classList.toggle('open');
        }
    })
})
