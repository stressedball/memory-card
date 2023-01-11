# Display-Interactions and data

# App
score / bestScore / hearts / level / gameStatus (won, lost)

# gameLogic
initialize score / bestScore / hearts / level / gameStatus (won, lost, nextLevel)
deck : {
    array of cards
    card : {
        id, numOfClicks
    }
}
gameStatus : {
    isWon : false,
    isLost : true, 
}

# Content

# level

# hearts

# deck

# cards
initialize numOfClicks
click 
numOfClicks
gets if
If click
    if numOfClicks > 0 return true
    else numOfClicks++
check card
    if card numOfClicks > 1 
        hearts--
check deck
    if all cards have been clicked exactly once, return true
    else return false
check levels
check hearts
    if hearts <= 0 game over