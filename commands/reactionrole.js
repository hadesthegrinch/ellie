module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '847928253205053440';
        //Bubbies role
        const Bubbies = message.guild.roles.cache.get("847912126987370517"); //main
        const bubbiesTwo = message.guild.roles.cache.get("853635494445187073");
    
        //TikTok role
        const TikTok = message.guild.roles.cache.get("847928642239070268");//main
        const tiktokTwo = message.guild.roles.cache.get("853635759470149633");
    
        //YouTube role
        const YouTube = message.guild.roles.cache.get("849361987766714418");//main
        const ytTwo = message.guild.roles.cache.get("853636003730030592");
    
        //Podcast role
        const Podcast = message.guild.roles.cache.get("849362180938793051");//main
        const pcTwo = message.guild.roles.cache.get("853636278452486184");
   
        //c2 Gang role
        const c2Gang = message.guild.roles.cache.get("850798641404706866");//main
        const c2Two = message.guild.roles.cache.get("853635241800892458");

        //===================
        //===================


        //bubbies emojis
        const bubbiesEmoji = '<:bub:847915097330155602>';//main
        const bub2 = '<:bub2:853637970907889719>';


        //tiktok emojis
        const tiktokEmoji = '<:tiktok:849359755704270948>';//main
        const tk2 = '<:tk2:853637532284878889>';


        //youtube emojis
        const youtubeEmoji = '<:youtube:849360030952194050>';//main
        const yt2 = '<:yt2:853655072872595466>';
  

        //podcast emojis
        const podcastEmoji = '<:podcast:849363426600812564>';//main
        const pc2 = '<:pc2:853638484702789672>';

        //c2gang emojis
        const c2Emoji = '<:c2:850798038069805057>';//main
        const c2_2 = '<:c2_2:853637767833190460>';

        
 
        let bubbiesEmbed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('Bubbies\' Role')
            .setDescription(`Hi Bub! Want to show-off your ${Bubbies} role?\n\n`
                        + `React "${bubbiesEmoji}" to get your **certified Bubbies** role!\n`
                        + `If you want other roles aside from your ${Bubbies} role, just click on the remaining reactions.`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');
 
        let bubEmbed = await message.channel.send(bubbiesEmbed);
        bubEmbed.react(bubbiesEmoji);
        bubEmbed.react(c2_2);
        bubEmbed.react(tk2);
        bubEmbed.react(yt2);
        bubEmbed.react(pc2);

        //==========================

        let c2GangEmbed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('C2 Gang\'s Role')
            .setDescription(`Hi Bub! Want to show-off your ${c2Gang} role?\n\n`
                        + `React "${c2Emoji}" to get your **certified Bubbies** role!\n`
                        + `If you want other roles aside from your ${c2Gang} role, just click on the remaining reactions.`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');
 
        let c2Embed = await message.channel.send(c2GangEmbed);
        c2Embed.react(c2Emoji);
        c2Embed.react(bub2);
        c2Embed.react(tk2);
        c2Embed.react(yt2);
        c2Embed.react(pc2);

        //==========================

        let tiktokEmbed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('TikTok Followers\' Role')
            .setDescription(`Hi Bub! Want to show-off your ${TikTok} role?\n\n`
                        + `React "${tiktokEmoji}" to get your **certified Bubbies** role!\n`
                        + `If you want other roles aside from your ${TikTok} role, just click on the remaining reactions.`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');
 
        let tkEmbed = await message.channel.send(tiktokEmbed);
        tkEmbed.react(tiktokEmoji);
        tkEmbed.react(bub2);
        tkEmbed.react(c2_2);
        tkEmbed.react(yt2);
        tkEmbed.react(pc2);
        //==========================

        let youtubeEmbed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('YouTube Subscribers\' Role')
            .setDescription(`Hi Bub! Want to show-off your ${YouTube} role?\n\n`
                        + `React "${youtubeEmoji}" to get your **certified Bubbies** role!\n`
                        + `If you want other roles aside from your ${YouTube} role, just click on the remaining reactions.`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');
 
        let ytEmbed = await message.channel.send(youtubeEmbed);
        ytEmbed.react(youtubeEmoji);
        ytEmbed.react(bub2);
        ytEmbed.react(c2_2);
        ytEmbed.react(tk2);
        ytEmbed.react(pc2);
            //==========================

            let podcastEmbed = new Discord.MessageEmbed()
            .setColor("#ffeda3")
            .setTitle('Podcast Listeners\' Role')
            .setDescription(`Hi Bub! Want to show-off your ${Podcast} role?\n\n`
                        + `React "${podcastEmoji}" to get your **certified Bubbies** role!\n`
                        + `If you want other roles aside from your ${Podcast} role, just click on the remaining reactions.`)
                        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');
 
        let pcEmbed = await message.channel.send(podcastEmbed);
        pcEmbed.react(podcastEmoji);
        pcEmbed.react(bub2);
        pcEmbed.react(c2_2);
        pcEmbed.react(tk2);
        pcEmbed.react(yt2);

        //extra
        extraEmbed = new Discord.MessageEmbed()
        .setColor("#ffeda3")
        .setTitle('NOTE')
        .setDescription('Every embed message has its specific purpose:\n > Choose which role of your choice on where you want your name to be highlighted in the Members\' List \n\nReact only to ONE embed message of your choice. Reacting to multiple embed message will do no good and it will only duplicate your roles.')
        .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg');

        message.channel.send(extraEmbed);

        client.on('messageReactionAdd', async (reaction, user) => {
            
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if(reaction.emoji.identifier === bubbiesEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Bubbies);
                } if(reaction.emoji.identifier === tiktokEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TikTok);
                } if(reaction.emoji.identifier === youtubeEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(YouTube);
                } if(reaction.emoji.identifier === podcastEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Podcast);
                } if(reaction.emoji.identifier === c2Emoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(c2Gang);
                } if(reaction.emoji.identifier === bub2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bubbiesTwo);
                } if(reaction.emoji.identifier === tk2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(tiktokTwo);
                } if(reaction.emoji.identifier === c2_2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(c2Two);
                } if(reaction.emoji.identifier === yt2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ytTwo);
                } if(reaction.emoji.identifier === pc2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pcTwo);
                } 
            } else {
                return;
            }
            
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if(reaction.emoji.identifier === bubbiesEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Bubbies);
                } if(reaction.emoji.identifier === tiktokEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TikTok);
                } if(reaction.emoji.identifier === youtubeEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(YouTube);
                } if(reaction.emoji.identifier === podcastEmoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Podcast);
                } if(reaction.emoji.identifier === c2Emoji.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(c2Gang);
                }if(reaction.emoji.identifier === bub2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bubbiesTwo);
                } if(reaction.emoji.identifier === tk2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(tiktokTwo);
                } if(reaction.emoji.identifier === c2_2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(c2Two);
                } if(reaction.emoji.identifier === yt2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ytTwo);
                } if(reaction.emoji.identifier === pc2.replace(/<|>/g, "").replace(":", "")) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pcTwo);
                } 
            } else {
                return;
            }
        });
    }
 
}   