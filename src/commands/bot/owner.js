const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Corwin`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Corwin>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CoreWare`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://kickcar.me](https://kickcar.me)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 