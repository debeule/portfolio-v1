var tagCollection = document.getElementsByClassName('tag')

for (var i = 0; i < tagCollection.length; i++) 
{
    var tag = tagCollection[i];
    tag.addEventListener('click', function()
    {
        this.classList.toggle('active');
    })

    tag.addEventListener('click', function()
    {
        var cards = document.getElementsByClassName('card');
        
        console.log(cards)
        for (let i = 0; i < cards.length; i++) 
        {
            var cardTagsArray = getCardTags(cards[i]);
            var activeTagsArray = getActiveTags();
            var isActive = compareTags(cardTagsArray, activeTagsArray)

            console.log(cardTagsArray)
            console.log(activeTagsArray)
            console.log(isActive)
            cards[i].style.display = 'flex';
            if (!isActive)
            {
                cards[i].style.display = 'none';
            }
        }
    })
}

function getCardTags(card)
{
    var cardMid = card.getElementsByClassName('card__middle');
    var cardTags = card.getElementsByClassName('card__tags');


    var cardTagsArray = []
    for (let i = 0; i < cardTags.length; i++) 
    {
        var innerItem = cardTags[i].getElementsByClassName('card__tag');
        
        for (let o = 0; o < innerItem.length; o++) 
        {
            cardTagsArray.push(innerItem[o].innerHTML)
        }
    }

    return cardTagsArray
}

function getActiveTags()
{
    var tags = document.querySelector('.tags');
    var tagsArray = tags.querySelectorAll('button');
    
    var activeTags = []
    for (let i = 0; i < tagsArray.length; i++) 
    {
        if (tagsArray[i].classList.contains('active'))
        {
            activeTags.push(tagsArray[i].innerHTML)
        }
    }
    
    return activeTags
}

function compareTags(cardTagsArray, activeTagsArray)
{
    for (const activeTag of activeTagsArray) {
        if (cardTagsArray.includes(activeTag)) {
          return true
        }
      }

      if (activeTagsArray.length == 0) 
      {
        return true
      }

      return false
}