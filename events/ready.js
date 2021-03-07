module.exports = {
    run: (client) => {
        client.logger.log('info', `Bot identifié en tant que ${client.user.tag}! (${client.user.id})`);

        const updateActivity = () => {
            client.user.setActivity(`${client.guilds.cache.size} serveur(s)`, { type: 'LISTENING' })
        }

        updateActivity(); // le bot est 'ready', on initialise le message d'activité. Ensuite, le setInterval() permettra de rafraîchir le message toutes les 5 minutes

        client.setInterval( () => updateActivity(), 5000 * 60 ); // toutes les 5 minutes après le lancement du bot, le message de présence sera mis à jour, et le compteur rafraîchi.
    }
};