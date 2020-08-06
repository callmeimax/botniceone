const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('./config.json')
 
client.on('ready' , () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("One Piece World", {type: "WATCHING"})
})

client.on('message', msg => {
    if(msg.content === 'zoro') {
        msg.reply('Im sorry. I never pray to god.')
    }

    if(msg.content.includes('one piece anime')) {
        msg.reply([
            'Its sound like you want to watch one piece?!',
            'Try one of the following links for download One Piece Anime:',
            'One Piece Link :https://anime-list1.gq/anime/4892/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%A7%D9%86%DB%8C%D9%85%D9%87-one-piece'
        ])
    }


})

client.on('message' , message => {
    if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
    }
})

client.on('message' , message => {
    console.log(message.content)
})
client.login(process.env.TOKEN);

