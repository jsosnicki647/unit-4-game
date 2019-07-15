var game = {
    targetScore: 0,
    cummScore: 0,
    crystal1: 0,
    crystal2: 0,
    crystal3: 0,
    crystal4: 0,
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
    })

    

})