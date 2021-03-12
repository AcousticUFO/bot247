const CommandoClient = require('./client');
const path = require('path');
const fs = require('fs')
const dotenv = require('dotenv')

const client = new CommandoClient({
    commandPrefix: '?',
    owner: process.env.BOT_OWNER_ID,
    disableMentions: 'everyone',
    presence: {
        activity: {
            name: `?help | mTxServ.com`, // message de présence
            type: 'LISTENING' // type d'activité
        }
    }
});

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        const eventFunction = require(`./events/${file}`);
        if (eventFunction.disabled) return;

        const event = eventFunction.event || file.split('.')[0];
        const emitter = (typeof eventFunction.emitter === 'string' ? client[eventFunction.emitter] : eventFunction.emitter) || client;
        const { once } = eventFunction;

        try {
            emitter[once ? 'once' : 'on'](event, (...args) => eventFunction.run(client, ...args));
        } catch (error) {
            console.error(error.stack);
        }
    });
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['divers', 'Divers'],
        ['admin', 'Admin'],
        ['bot', 'Bot'],
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.login(process.env.BOT_TOKEN);