const Discord = require('discord.js')
const client = new Discord.Client({partisl: ["MESSAGE", "CHANNEL", "REACTION"]})
const config = require('./config.json')

require('discord-buttons')(client)

const welcome = require('./welcome')

const prefix = 'bub!';
const fs = require('fs');

const MyStickyChannelID = '848266753095106580';
let cacheMsgs = [];


//const welcome = require('./welcome');
client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command); 
}

client.once('ready', () => {
  console.log('Ellie is awaaaaake!!!')

  welcome(client)

  
});

client.on('ready', async () => {
    /** 
     * Get channel, if found then send the message to that channel and cache it
     */
    const stickyChannel = client.channels.cache.get(MyStickyChannelID);
    if (stickyChannel) {
      const m = await stickyChannel.send('https://i.imgur.com/TgrRDp0.png');
      cacheMsgs.push(m.id);
    }
  });
  
  client.on('message', async message => {
    if (message.author.bot) return;
  
    // Remove a message and remove form cache
    async function remove(id) {
      const msg = message.channel.messages.cache.get(id);
      cacheMsgs.shift();
      if (msg) await msg.delete().catch(_e => {});
    }
  
    // check channel is the sticky channel
    if (message.channel.id === MyStickyChannelID) {
      // if length is more or 2 but not 0 then queue delete all and return without a message
      if (cacheMsgs.length >= 2 && cacheMsgs.length !== 0) return cacheMsgs.forEach(async id => remove(id));
  
      // if cache is more then 0 then queue delete all AND send a message
      if (cacheMsgs.length > 0) cacheMsgs.forEach(async id => await remove(id));
  
      // Send message and add to cache
      const m = await message.channel.send('https://i.imgur.com/TgrRDp0.png');
      cacheMsgs.push(m.id);
    }
  });
  

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (!client.commands.has(command)){
        message.channel.send(`\`⛔ ${message.author.username}, awee buuub, it seems like there's a problem. Try again lateer :<\``);
    } 

	try {
		client.commands.get(command).execute(message, args, Discord, client);
	} catch (error) {
		//console.error(error);
		//message.reply('there was an error trying to execute that command!');
	} 
    
    message.delete().catch(O_o=>{});    

    

});
client.login(config.token)