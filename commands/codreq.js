const { ReactionCollector } = require("discord.js");

module.exports = {
    name: 'codreq',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '849268943372681216';
        let member = message.mentions.users.first() || message.author
        const codmEmoji = '850818589006233611';
        const Bubbies = message.guild.roles.cache.get("847912126987370517");

        var logo = [
            'https://i.pinimg.com/236x/b2/2b/00/b22b0062e330dc8cdc464bcb24ddb8d1.jpg',
            'https://i.pinimg.com/564x/07/7d/ec/077decd00b18ada7b55f68028796471b.jpg',
            'https://i.pinimg.com/564x/42/fe/37/42fe37e7428573b1cdf2824a500c580b.jpg',
            'https://i.pinimg.com/564x/b3/21/92/b32192da8a1eab20ad9baea32fd125f6.jpg',
            'https://i.pinimg.com/564x/24/46/41/244641628b42e9e014c6533eb1f2e5d9.jpg',
        ];
        
        const codIGN = args[0];
        const codID = args[1];

        const embed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('Call of Duty: Mobile | Party Request')
            .setDescription(`${Bubbies} \n\n${member} has requested you to join him to a game :> \nReact if you want to join :>`)
                    .addFields(
                        {name: `${member.username}\'s IGN:`, value: `${codIGN}`, inline: true},
                        {name: `${member.username}\'s ID:`, value: `${codID}`, inline: true}
                        )
                    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
                    .setThumbnail(logo[Math.floor(Math.random() * logo.length)])
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(codmEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                //And then where you define codEmoji change that to '850818589006233611'. Since it's the id of the emoji.
                    if(reaction.emoji.id === codmEmoji) {
                    await reaction.message.guild.members.cache.get(user.id);
                    return reaction.message.channel.send(`${user}, you have reacted to ${member.username}'s request. Please input the command shown below: \n >>> \`bub!codid\` TypeYourIDHere mentionTheUser`);
                    
                
                } 
            } else {
                return;
            }
            
        })
    ;
 
    }
 
}   