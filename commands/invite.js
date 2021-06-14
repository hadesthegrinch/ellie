const { MessageButton } = require('discord-buttons');

module.exports = {
        name: 'invite',
        description: 'invites ellie',
        async execute(message, args, client){

            
let button1 = new MessageButton()
.setStyle('gray')
.setLabel('Gray button.') 
.setID('click_to_function'); 

let button2 = new MessageButton()
.setStyle('red')
.setLabel('Red button.') 
.setID('click_to_not_function'); 

let button3 = new MessageButton()
.setStyle('blurple')
.setLabel('Blurple button.') 
.setID('clicked'); 

message.channel.send('Hey, I\'m Ellie the Elephant | Bub\'s Stuffed Assistant :> Check here: https://www.tiktok.com/@carebub?lang=en', button1);
message.channel.send('Hey, I\'m Ellie the Elephant | Bub\'s Stuffed Assistant :> Check here: https://www.tiktok.com/@carebub?lang=en', button2);
message.channel.send('Hey, I\'m Ellie the Elephant | Bub\'s Stuffed Assistant :> Check here: https://www.tiktok.com/@carebub?lang=en', button3);


        },
};
