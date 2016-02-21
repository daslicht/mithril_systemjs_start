'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _j2c = require('j2c');

var _j2c2 = _interopRequireDefault(_j2c);

var _mithrilJ2c = require('mithril-j2c');

var _mithrilJ2c2 = _interopRequireDefault(_mithrilJ2c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var cls = _mithrilJ2c2.default.attach({
    '.foo': {
        background: 'blue'
    }
});

var news = {
    controller: function controller() {
        console.log(_mithril2.default.route());
    },
    view: function view() {
        // Unsere Newsseite
        return (0, _mithril2.default)(layout, {
            title: 'News'
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
            title: 'About us'
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
            url: '/home'
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
        return (0, _mithril2.default)('.content', [(0, _mithril2.default)('h1', ctrl.title), (0, _mithril2.default)('h2', 'Content...')]);
    }
};

var layout = {
    view: function view(ctrl) {
        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return (0, _mithril2.default)('.layout', [(0, _mithril2.default)(menu, {
            'test': 'bar'
        }), (0, _mithril2.default)(content, {
            title: opts.title
        })]);
    }
};

var menu = {
    view: function view(_ref, opts) {
        _objectDestructuringEmpty(_ref);

        console.log(opts);

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
                'background-color': 'yellow',
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

var test = [];

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
    test[link.link] = link.component;
});
console.log(test);

_mithril2.default.route(document.body, '/', test);

//# sourceMappingURL=data:application/json;base64,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VCxFQUFlLEdBQXZCLEVBQTRCLElBQTVCIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGoyYyBmcm9tICdqMmMnO1xuaW1wb3J0IHN0eWxlciBmcm9tICdtaXRocmlsLWoyYyc7XG5cbmNvbnN0IGNscyA9IHN0eWxlci5hdHRhY2goe1xuICAgICcuZm9vJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnYmx1ZSdcbiAgICB9XG59KTtcblxuY29uc3QgbmV3cyA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG0ucm91dGUoKSk7XG4gICAgfSxcbiAgICB2aWV3OiAoKSA9PiB7XG4gICAgICAgIC8vIFVuc2VyZSBOZXdzc2VpdGVcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ05ld3MnXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGFib3V0ID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Fib3V0OiAnLCBtLnJvdXRlKCkpO1xuICAgIH0sXG4gICAgdmlldzogKCkgPT4ge1xuICAgICAgICAvLyBBYm91dCB1c1xuICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQWJvdXQgdXMnXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cblxuY29uc3QgaG9tZSA9IHtcblxuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobS5yb3V0ZSgpKTtcbiAgICB9LFxuXG4gICAgdmlldzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgIHRpdGxlOiAnSG9tZScsXG4gICAgICAgICAgICB1cmw6ICcvaG9tZSdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY29udGVudCA9IHtcbiAgICBjb250cm9sbGVyOiAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIG9wdHMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdGT09PJztcbiAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfSxcbiAgICB2aWV3OiAoY3RybCkgPT4ge1xuICAgICAgICByZXR1cm4gbSgnLmNvbnRlbnQnLCBbXG4gICAgICAgICAgICBtKCdoMScsIGN0cmwudGl0bGUpLFxuICAgICAgICAgICAgbSgnaDInLCAnQ29udGVudC4uLicpXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgICB2aWV3OiAoY3RybCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIHJldHVybiBtKCcubGF5b3V0JywgW1xuICAgICAgICAgICAgbShtZW51LCB7XG4gICAgICAgICAgICAgICAgJ3Rlc3QnOiAnYmFyJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtKGNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0cy50aXRsZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuY29uc3QgbWVudSA9IHtcbiAgICB2aWV3OiAoe30sIG9wdHMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cob3B0cyk7XG5cblxuICAgICAgICB2YXIgc3R5bGVzID0gJyc7XG4gICAgICAgIHZhciBsaXZlU3R5bGVzID0gJyc7XG4gICAgICAgIHZhciBzdHlsZXIgPSB7XG4gICAgICAgICAgICBsaXZlVXBkYXRlOiBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzY29wZWRTdHlsZSA9IGoyYy5zaGVldChzdHlsZSk7XG4gICAgICAgICAgICAgICAgbGl2ZVN0eWxlcyArPSBzY29wZWRTdHlsZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0YWNoOiBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzY29wZWRTdHlsZSA9IGoyYy5zaGVldChzdHlsZSk7XG4gICAgICAgICAgICAgICAgc3R5bGVzICs9IHNjb3BlZFN0eWxlO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29wZWRTdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBbbSgnc3R5bGUnLCBzdHlsZXMpLCBtKCdzdHlsZScsIGxpdmVTdHlsZXMpXTtcbiAgICAgICAgICAgICAgICBsaXZlU3R5bGVzID0gJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjbHMgPSBzdHlsZXIuYXR0YWNoKHtcbiAgICAgICAgICAgICcuZm9vJzoge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3llbGxvdycsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzc5NHB4JyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzQ4cHgnXG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLmxpbmtzJzoge1xuICAgICAgICAgICAgICAgICdib3JkZXInOiAnc29saWQgMXB4JyxcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJzE1MHB4JyxcbiAgICAgICAgICAgICAgICAnZmxvYXQnOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgJ2NsZWFyJzogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICd0ZXh0LWRlY29yYXRpb24nOiAnbm9uZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnLmFjdGl2ZSc6IHtcbiAgICAgICAgICAgICAgICAnQGV4dGVuZCc6IFsnLmxpbmtzJ10sXG4gICAgICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogJ2JvbGQnXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtKCcubWVudSAnICsgY2xzLmZvbywgW1xuXG4gICAgICAgICAgICByb3V0ZXMubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBtKCdhJywge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBsaW5rLmxpbmssXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogbS5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAgY2xzLmxpbmtzICsnICcrY2xzLmFjdGl2ZSA6IGNscy5saW5rc1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyBjbHMuYWN0aXZlIDogY2xzLmxpbmtzXG4gICAgICAgICAgICAgICAgfSwgbGluay5uYW1lKTtcbiAgICAgICAgICAgIH0pLFxuXG5cbiAgICAgICAgICAgIHN0eWxlci52aWV3KClcblxuICAgICAgICBdKTtcbiAgICB9XG59O1xuXG5sZXQgdGVzdCA9IFtdO1xuXG5jb25zdCByb3V0ZXMgPSBbe1xuICAgICdjb21wb25lbnQnOiBob21lLFxuICAgICdsaW5rJzogJy8nLFxuICAgICduYW1lJzogJ0hvbWUnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IGFib3V0LFxuICAgICdsaW5rJzogJy9hYm91dCcsXG4gICAgJ25hbWUnOiAnQWJvdXQnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IG5ld3MsXG4gICAgJ2xpbmsnOiAnL25ld3MnLFxuICAgICduYW1lJzogJ05ld3MnXG59LCBdO1xuXG5yb3V0ZXMubWFwKGxpbmsgPT4ge1xuICAgIHRlc3RbbGluay5saW5rXSA9IGxpbmsuY29tcG9uZW50O1xufSk7XG5jb25zb2xlLmxvZyh0ZXN0KTtcblxubS5yb3V0ZShkb2N1bWVudC5ib2R5LCAnLycsIHRlc3QpO1xuIl19
