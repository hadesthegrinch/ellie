module.exports = {
    name: 'testbutton',
    async execute(button, client){
        if (button.id === "click_to_function") {
                button.channel.send("Button works!")
        } else if (button.id === "click_to_not_function") {
                button.channel.send("Button not working!");
        }
    },
};