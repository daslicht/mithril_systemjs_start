'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _j2c = require('j2c');

var _j2c2 = _interopRequireDefault(_j2c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//import styler from 'mithril-j2c';

var news = {
    controller: function controller() {
        console.log(_mithril2.default.route());
    },
    view: function view() {
        // Unsere Newsseite
        return (0, _mithril2.default)(layout, {
            title: 'News',
            content: 'news content'
        });
    }
};

var about = {
    controller: function controller() {
        console.log('about: ', _mithril2.default.route());
    },
    view: function view() {
        // About us
        return (0, _mithril2.default)(layout, {
            title: 'About us',
            content: 'about content'
        });
    }
};

var home = {

    controller: function controller() {
        console.log(_mithril2.default.route());
    },

    view: function view() {
        return (0, _mithril2.default)(layout, {
            title: 'Home',
            content: 'home content'
        });
    }
};

var content = {
    controller: function controller() {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        opts.title = opts.title || 'FOOO';
        return opts;
    },
    view: function view(ctrl) {
        return (0, _mithril2.default)('.content', [(0, _mithril2.default)('h1', ctrl.title), (0, _mithril2.default)('h2', ctrl.content)]);
    }
};

var layout = {
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return (0, _mithril2.default)('.layout', [(0, _mithril2.default)(menu, {
            'test': 'bar'
        }), (0, _mithril2.default)(content, {
            title: opts.title,
            content: opts.content
        })]);
    }
};

var menu = {
    view: function view(_ref, opts) {
        _objectDestructuringEmpty(_ref);

        console.log(opts);
        _mithril2.default.route.mode = 'pathname';

        var styles = '';
        var liveStyles = '';
        var styler = {
            liveUpdate: function liveUpdate(style) {
                var scopedStyle = _j2c2.default.sheet(style);
                liveStyles += scopedStyle;
                return scopedStyle;
            },
            attach: function attach(style) {
                var scopedStyle = _j2c2.default.sheet(style);
                styles += scopedStyle;
                return scopedStyle;
            },
            view: function view() {
                var el = [(0, _mithril2.default)('style', styles), (0, _mithril2.default)('style', liveStyles)];
                liveStyles = '';
                return el;
            }
        };

        var cls = styler.attach({
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

        return (0, _mithril2.default)('.menu ' + cls.foo, [routes.map(function (link) {
            return (0, _mithril2.default)('a', {
                href: link.link,
                config: _mithril2.default.route,
                //class: m.route() === link.link ? 'active' : 'inactive'
                //class: m.route() === link.link ?  cls.links +' '+cls.active : cls.links
                class: _mithril2.default.route() === link.link ? cls.active : cls.links
            }, link.name);
        }), styler.view()]);
    }
};

var links = [];

var routes = [{
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
}];

routes.map(function (link) {
    links[link.link] = link.component;
});

_mithril2.default.route(document.body, '/', links);

//# sourceMappingURL=data:application/json;base64,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LEVBQWUsR0FBdkIsRUFBNEIsS0FBNUIiLCJmaWxlIjoidW5kZWZpbmVkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCc7XG5pbXBvcnQgajJjIGZyb20gJ2oyYyc7XG4vL2ltcG9ydCBzdHlsZXIgZnJvbSAnbWl0aHJpbC1qMmMnO1xuXG5jb25zdCBuZXdzID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gVW5zZXJlIE5ld3NzZWl0ZVxuICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3cycsXG4gICAgICAgICAgICBjb250ZW50OiAnbmV3cyBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBhYm91dCA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhYm91dDogJywgbS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gQWJvdXQgdXNcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0Fib3V0IHVzJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdhYm91dCBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IGhvbWUgPSB7XG5cbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG0ucm91dGUoKSk7XG4gICAgfSxcblxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnLFxuICAgICAgICAgICAgY29udGVudDogJ2hvbWUgY29udGVudCdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY29udGVudCA9IHtcbiAgICBjb250cm9sbGVyOiAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIG9wdHMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdGT09PJztcbiAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfSxcbiAgICB2aWV3OiAoY3RybCkgPT4ge1xuICAgICAgICByZXR1cm4gbSgnLmNvbnRlbnQnLCBbXG4gICAgICAgICAgICBtKCdoMScsIGN0cmwudGl0bGUpLFxuICAgICAgICAgICAgbSgnaDInLCBjdHJsLmNvbnRlbnQpXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgICB2aWV3OiAoY3RybCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIHJldHVybiBtKCcubGF5b3V0JywgW1xuICAgICAgICAgICAgbShtZW51LCB7XG4gICAgICAgICAgICAgICAgJ3Rlc3QnOiAnYmFyJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtKGNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0cy50aXRsZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRzLmNvbnRlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IG1lbnUgPSB7XG4gICAgdmlldzogKHt9LCBvcHRzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuICAgICAgICBtLnJvdXRlLm1vZGUgPSAncGF0aG5hbWUnO1xuXG4gICAgICAgIHZhciBzdHlsZXMgPSAnJztcbiAgICAgICAgdmFyIGxpdmVTdHlsZXMgPSAnJztcbiAgICAgICAgdmFyIHN0eWxlciA9IHtcbiAgICAgICAgICAgIGxpdmVVcGRhdGU6IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3BlZFN0eWxlID0gajJjLnNoZWV0KHN0eWxlKTtcbiAgICAgICAgICAgICAgICBsaXZlU3R5bGVzICs9IHNjb3BlZFN0eWxlO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZWRTdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRhY2g6IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3BlZFN0eWxlID0gajJjLnNoZWV0KHN0eWxlKTtcbiAgICAgICAgICAgICAgICBzdHlsZXMgKz0gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlZFN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IFttKCdzdHlsZScsIHN0eWxlcyksIG0oJ3N0eWxlJywgbGl2ZVN0eWxlcyldO1xuICAgICAgICAgICAgICAgIGxpdmVTdHlsZXMgPSAnJztcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNscyA9IHN0eWxlci5hdHRhY2goe1xuICAgICAgICAgICAgJy5mb28nOiB7XG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI0ZGRkZDQycsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzc5NHB4JyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLmxpbmtzJzoge1xuICAgICAgICAgICAgICAgICdib3JkZXInOiAnc29saWQgMXB4JyxcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzE1MHB4JyxcbiAgICAgICAgICAgICAgICAnZmxvYXQnOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgJ2NsZWFyJzogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAnbm9uZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLmFjdGl2ZSc6IHtcbiAgICAgICAgICAgICAgICAnQGV4dGVuZCc6IFsnLmxpbmtzJ10sXG4gICAgICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJ2JvbGQnXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtKCcubWVudSAnICsgY2xzLmZvbywgW1xuXG4gICAgICAgICAgICByb3V0ZXMubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtKCdhJywge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBsaW5rLmxpbmssXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogbS5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAgY2xzLmxpbmtzICsnICcrY2xzLmFjdGl2ZSA6IGNscy5saW5rc1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyBjbHMuYWN0aXZlIDogY2xzLmxpbmtzXG4gICAgICAgICAgICAgICAgfSwgbGluay5uYW1lKTtcbiAgICAgICAgICAgIH0pLFxuXG5cbiAgICAgICAgICAgIHN0eWxlci52aWV3KClcblxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5sZXQgbGlua3MgPSBbXTtcblxuY29uc3Qgcm91dGVzID0gW3tcbiAgICAnY29tcG9uZW50JzogaG9tZSxcbiAgICAnbGluayc6ICcvJyxcbiAgICAnbmFtZSc6ICdIb21lJ1xufSwge1xuICAgICdjb21wb25lbnQnOiBhYm91dCxcbiAgICAnbGluayc6ICcvYWJvdXQnLFxuICAgICduYW1lJzogJ0Fib3V0J1xufSwge1xuICAgICdjb21wb25lbnQnOiBuZXdzLFxuICAgICdsaW5rJzogJy9uZXdzJyxcbiAgICAnbmFtZSc6ICdOZXdzJ1xufSwgXTtcblxucm91dGVzLm1hcChsaW5rID0+IHtcbiAgICBsaW5rc1tsaW5rLmxpbmtdID0gbGluay5jb21wb25lbnQ7XG59KTtcblxubS5yb3V0ZShkb2N1bWVudC5ib2R5LCAnLycsIGxpbmtzKTtcbiJdfQ==
