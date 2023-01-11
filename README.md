# Make a memory-card game using React
Make use of JS and React to implement functional components 
Game Logic 
Display

# App
Should manage main objects ie Header, Content and Footer

# Header
Logo (display only)

# Content 
an upper div : level attained by player / hearts
the main div : deck => displays cards
game status : next level / game over / game won - div

# Level 
5 levels [1, 2, 3, 4, 5]
Every level is simply the level multiplied by 3 => gives total number of cards per level

# Card 
The card is where the input is taken ie the mouse click event
It should directly tell the deck if it has been clicked

# Clicks on cards
Should follow a GameLogic

# GameLogic
Player must click all present cards exactly once in order to advance to next level
max level is 5 (15 cards)
If a card is clicked twice, minus heart
    If hearts === 0 GAME OVER

# logic
get the deck

get the card by id
if clicks < 1
    clicks++
    score++
    if score > bestScore
        bestScore = score
else
    check hearts

# Card-Deck-Level-(Hearts)-Score-bestScore
click registered at card component
    must return id

At deck component
    gets id, checks numbers of clicks

# display
Deck => cards

# data
card id, numbers of clicks
Array of {id, numOfClicks}
numberOfHearts
score
bestScore



