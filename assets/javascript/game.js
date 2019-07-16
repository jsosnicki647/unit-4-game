var game = {
    targetScore: 0,
    cummScore: 0,
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
    wins: 0,
    losses: 0,
    isRoundOver: false,
    play: function(){
        this.targetScore = Math.floor(Math.random()*101) + 19
        this.crystal1 = Math.floor(Math.random()*12) + 1
        this.crystal2 = Math.floor(Math.random()*12) + 1
        this.crystal3 = Math.floor(Math.random()*12) + 1
        this.crystal4 = Math.floor(Math.random()*12) + 1
        $("#target-score").text(this.targetScore)
    }
}

$(document).ready(function(){

    game.play()

    $(".crystal").click(function(){
        
        if(game.isRoundOver){
            $("#your-score").text()
            game.isRoundOver = false
            game.cummScore = 0
            game.play()
        }
        if(this.id == "crystal1"){
            game.cummScore = game.cummScore + game.crystal1
        }
        if(this.id == "crystal2"){
            game.cummScore = game.cummScore + game.crystal2
        }
        if(this.id == "crystal3"){
            game.cummScore = game.cummScore + game.crystal2
        }
        if(this.id == "crystal4"){
            game.cummScore = game.cummScore + game.crystal4
        }
        $("#your-score").text(game.cummScore)
        if(game.cummScore == game.targetScore){
            game.wins++
            $("#wins").text(game.wins)
            $("#won-lost").css("color","blue")
            $("#won-lost").text("You won! Select a crystal to begin a new game.")
            game.isRoundOver = true
        }
        else if(game.cummScore > game.targetScore){
            game.losses++
            $("#losses").text(game.losses)
            $("#won-lost").text("You lost! Select a crystal to begin a new game.")
            game.isRoundOver = true
        }
        else{
            $("#won-lost").text("")
        }
    })

    

})