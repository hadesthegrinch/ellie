module.exports = {
    name: 'smlinks',
    description: "Embed IP",
    execute(message, args, Discord){
        //const msg = args.join(" ");

  const rtembed = new Discord.MessageEmbed()
    .setColor("#ffeda3")
    .setDescription("**Bub’s World Of Social Media**\n\n __Links:__ \n>>> 1. [TikTok Account](https://www.tiktok.com/@carebub?lang=en)\n2. [YouTube Channel](https://www.youtube.com/channel/UC1Tzxxzn5kNMa0PGDDXjHCg)\n3. [Podcast on Spotify](https://open.spotify.com/show/0GixSXcqvdiS0OY9LfZEan)\n4. [Podcast on iTunes](https://podcasts.apple.com/ph/podcast/sheesh-youre-valid/id1567202269) ")
    .setFooter('All rights reserved. © 2021, carebub', 'https://i.imgur.com/WNXOyzE.jpg')

        message.channel.send(rtembed);
    }
}