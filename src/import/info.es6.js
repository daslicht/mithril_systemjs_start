const info = {
    view: () => {
        return m('.info', [
            m('h1', 'Info'),
            m('h2', m.route.param('id')),
            m('a', {
                href: '/',
                config: m.route
            }, 'Zurück')
        ]);
    }
};

export default info;
