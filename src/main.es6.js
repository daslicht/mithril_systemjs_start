import m from 'mithril';
import j2c from 'j2c';
//import styler from 'mithril-j2c';
m.route.mode = 'pathname';
const news = {
    controller: () => {
        console.log(m.route());
    },
    view: () => {
        // Unsere Newsseite
        return m(layout, {
            title: 'News',
            content: 'news content'
        });
    }
};

const about = {
    controller: () => {
        console.log('about: ', m.route());
    },
    view: () => {
        // About us
        return m(layout, {
            title: 'About us',
            content: 'about content'
        });
    }
};


const home = {

    controller: () => {
        console.log(m.route());
    },

    view: () => {
        return m(layout, {
            title: 'Home',
            content: 'home content'
        });
    }
};

const content = {
    controller: (opts = {}) => {
        opts.title = opts.title || 'FOOO';
        return opts;
    },
    view: (ctrl) => {
        return m('.content', [
            m('h1', ctrl.title),
            m('h2', ctrl.content)
        ]);
    }
};

const layout = {
    view: (ctrl, opts = {}) => {
        return m('.layout', [
            m(menu, {
                'test': 'bar'
            }),
            m(content, {
                title: opts.title,
                content: opts.content
            })
        ]);
    }
};

const menu = {
    view: ({}, opts) => {
        console.log(opts);


        var styles = '';
        var liveStyles = '';
        var styler = {
            liveUpdate: function(style) {
                var scopedStyle = j2c.sheet(style);
                liveStyles += scopedStyle;
                return scopedStyle;
            },
            attach: function(style) {
                var scopedStyle = j2c.sheet(style);
                styles += scopedStyle;
                return scopedStyle;
            },
            view: function() {
                var el = [m('style', styles), m('style', liveStyles)];
                liveStyles = '';
                return el;
            }
        };

        let cls = styler.attach({
            '.foo': {
                'background-color': '#FFFFCC',
                'width': '794px',
                'height': '48px'

            },
            '.links': {
                'border': 'solid 1px',
                'padding': '10px',
                'display': 'block',
                'width': '150px',
                'float': 'left',
                'clear': 'right',
                'text-align': 'center',
                'text-decoration': 'none'
            },
            '.active': {
                '@extend': ['.links'],
                'font-weight': 'bold'

            }


        });

        return m('.menu ' + cls.foo, [

            //routes.map(link => {

            Object.keys(routes).forEach( link =>  {
                let value = routes[link];
                console.log('value.name:',value.name);
                return m('a', {
                    href: link,
                    config: m.route,
                    //class: m.route() === link.link ? 'active' : 'inactive'
                    //class: m.route() === link.link ?  cls.links +' '+cls.active : cls.links
                    class: m.route() === link ? cls.active : cls.links
                }, value.name);
            }),


            styler.view()

        ]);
    }
};


/*const routes = [{
    'component': home,
    'link': '/',
    'name': 'Home'
}, {
    'component': about,
    'link': '/about',
    'name': 'About'
}, {
    'component': news,
    'link': '/news',
    'name': 'News'
}, ];

let links = {};
routes.map(link => {
    links[link.link] = link.component;
});*/

const routes = {
    '/': {
        component: home,
        'name': 'Home'
    },
    '/about': {
        'component': about,
        'name': 'About'
    },
    '/news': {
        'component': news,
        'name': 'News'
    }
};
let links = {};
Object.keys(routes).forEach( link =>  {
    let value = routes[link];
    links[link] = value.component;
});
console.log(links);
/*let links = {};
routes.forEach(link => {
    console.log(link);
    //links[link.link] = link.component;
});*/



m.route(document.body, '/', links);
