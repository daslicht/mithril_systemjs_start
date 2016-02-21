import m from 'mithril';

const nav = {

    controller: () => {

        m.route.mode = 'pathname';

        console.log('navigation opts:');
       /*	m.route(document.body, "/", {
    	    "/": info
    	});*/

        // und/oder kannst du hier auf die Optionen zugreifen.
        return {};
    },

    view: () => {

        return m('nav', [

            m('a', {
                href: '/',
                config: m.route
            }, ' HOME '),



            m('a', {
                href: '/chat',
                config: m.route
            }, ' CHAT ')


        ]);
        //return m('h1', opts.foo + extra);

    },

};



export default nav;
