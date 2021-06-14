const { tictactoe } = require ('reconlx')

module.exports = {
    name: "tictactoe",
    description: "a tictactoe game",

    async execute (message, args, Discord, client){
        const member = message.mentions.members.first()
        if(!member) return message.channel.send("I am sorry bub, but you have to specify someone to play with :>");

        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}