const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('genshinstats')
        .setDescription('Get an overview of the GenshinStats system'),
        
    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        await interaction.deferReply({ fetchReply: true });
        let row = new Discord.ActionRowBuilder()
            .addComponents(
                new Discord.ButtonBuilder()
                    .setLabel("Invite")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=1152074810726289429&permissions=2048&scope=bot")
                    .setStyle(Discord.ButtonStyle.Link),

                new Discord.ButtonBuilder()
                    .setLabel("Support server")
                    .setURL(client.config.discord.serverInvite)
                    .setStyle(Discord.ButtonStyle.Link),
            );

        client.embed({
            title: `🤝・Invite GenshinStats`,
            desc: `A multipurpose bot packed with features about Genshin Impact`,
            image: "https://media.discordapp.net/attachments/1098983233368105012/1198055065605394504/Purple_and_Black_Modern_Bold_Welcome_Discord_Profile_Banner.png?ex=65bd82ba&is=65ab0dba&hm=46fd1345f637bf3daa3f1a3c7f9c586359a06e8b1c1980bbb499b3aa0ee705e3&=&format=webp&quality=lossless&width=966&height=386",
            url: `https://discord.com/api/oauth2/authorize?client_id=1152074810726289429&permissions=2048&scope=bot`,
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 