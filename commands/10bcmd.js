module.exports = {
    name: '10bcmd',
    description: 'shows vexera commands',
    execute (message, args, Discord, client) {

        const radioTen = client.users.cache.get("228537642583588864") //vexera

        const rtembed = new Discord.MessageEmbed()
        .setTitle("Ellie's Music BOTs' Prefixes")
        .setColor("#ffeda3")
        .setDescription(`**Hi Bub!** \n\nHere's your request :>\n\n__Vexera BOT__ \n${radioTen}'s Commands: \n\n`
        + " >>> `+play [song / URL]` - *Plays a track. A range of sites are supported.*"  
        + "\n `+skip [amount=1]` - *Voteskps a track.*"
        + "\n `+lyrics [query]` - *Gets lyrics for a track / the track currently playing."
        + "\n `+np` - *Shows the current playing song.*"
        + "\n `+pause` - *Pauses the music playback.*"
        + "\n `+join` - *Joins a voice channel.*"
        + "\n `+queue` - *Shows the current track queue.*"
        + "\n `+back` - *Goes to the last track played.*" 
        + "\n `+clear` - *Clears the queue.*"
        + "\n `+resume` - *Resumes music playback.*"
        + "\n `+delete [track]` - *Deletes a track from queue.*"
        + "\n `+jump [amount]` - *Jumps to a specific song in the queue.*"
        + "\n `+leave` - *Leaves the voice channel.*"
        + "\n `+repeat [all / one / off]` - *Repeats a track.*"
        + "\n `+search [track]` - *Allows you to choose a track to play with a fancy selection menu.*"
        + "\n `+seek [position]` - *Seeks to a position in the track.*"
        + "\n `+shuffle` - *Shuffles the queue.*")


    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')
    .setTimestamp()

        message.channel.send(rtembed);
    }
}