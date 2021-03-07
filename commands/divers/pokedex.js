const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pokedex',
            memberName: 'pokedex',
            group: 'divers',
            description: 'Affiche la description du pokemon de votre choix.',
        });
    }
}
