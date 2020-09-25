module.exports = {
    name: "cat",
    aliases: ['meow'],
    permissions: [],
    ownerOnly: false,
    enabled: true,
    cooldown: 0,
    exec: async (client, message, args) => {
        const Discord = require('discord.js');
        const randomPuppy = require('random-puppy');
        const subReddits = ["cat", "cats"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        const img = await randomPuppy(random);
    
        const embed = new Discord.MessageEmbed()
        .setImage (img)
        .setTitle (`**__Who is a good cuddly kitten!__**`)
        .setURL (`https://reddit.com/${random}`)
        .setFooter (`Made By Codetopia`) //you can remove this :D
    
        message.channel.send(embed);
        },
    };
