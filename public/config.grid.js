export default {
    ffcBackend: `http://${window.location.hostname}/`,
    appId: window.location.host,
    scope: JSON.stringify({ doubleName: true }),
    redirect_url: `?callback=true`,
    botFrontEnd: 'https://login.threefold.me/',
    botBackend: 'https://login.threefold.me/',
    debugJanus: false,
    janusServer: `http://${window.location.hostname}/janus`,
    gaId: 'UA-150836145-1',
};
