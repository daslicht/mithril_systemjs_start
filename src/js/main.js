'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _j2c = require('j2c');

var _j2c2 = _interopRequireDefault(_j2c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

//import styler from 'mithril-j2c';
_mithril2.default.route.mode = 'pathname';
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

//# sourceMappingURL=data:application/json;base64,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QXZCLEVBQTRCLEtBQTVCIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGoyYyBmcm9tICdqMmMnO1xuLy9pbXBvcnQgc3R5bGVyIGZyb20gJ21pdGhyaWwtajJjJztcbm0ucm91dGUubW9kZSA9ICdwYXRobmFtZSc7XG5jb25zdCBuZXdzID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gVW5zZXJlIE5ld3NzZWl0ZVxuICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3cycsXG4gICAgICAgICAgICBjb250ZW50OiAnbmV3cyBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBhYm91dCA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhYm91dDogJywgbS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gQWJvdXQgdXNcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0Fib3V0IHVzJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdhYm91dCBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IGhvbWUgPSB7XG5cbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG0ucm91dGUoKSk7XG4gICAgfSxcblxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnLFxuICAgICAgICAgICAgY29udGVudDogJ2hvbWUgY29udGVudCdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY29udGVudCA9IHtcbiAgICBjb250cm9sbGVyOiAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIG9wdHMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdGT09PJztcbiAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfSxcbiAgICB2aWV3OiAoY3RybCkgPT4ge1xuICAgICAgICByZXR1cm4gbSgnLmNvbnRlbnQnLCBbXG4gICAgICAgICAgICBtKCdoMScsIGN0cmwudGl0bGUpLFxuICAgICAgICAgICAgbSgnaDInLCBjdHJsLmNvbnRlbnQpXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgICB2aWV3OiAoY3RybCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIHJldHVybiBtKCcubGF5b3V0JywgW1xuICAgICAgICAgICAgbShtZW51LCB7XG4gICAgICAgICAgICAgICAgJ3Rlc3QnOiAnYmFyJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtKGNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0cy50aXRsZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRzLmNvbnRlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IG1lbnUgPSB7XG4gICAgdmlldzogKHt9LCBvcHRzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuXG5cbiAgICAgICAgdmFyIHN0eWxlcyA9ICcnO1xuICAgICAgICB2YXIgbGl2ZVN0eWxlcyA9ICcnO1xuICAgICAgICB2YXIgc3R5bGVyID0ge1xuICAgICAgICAgICAgbGl2ZVVwZGF0ZTogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVkU3R5bGUgPSBqMmMuc2hlZXQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIGxpdmVTdHlsZXMgKz0gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlZFN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGFjaDogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVkU3R5bGUgPSBqMmMuc2hlZXQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIHN0eWxlcyArPSBzY29wZWRTdHlsZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gW20oJ3N0eWxlJywgc3R5bGVzKSwgbSgnc3R5bGUnLCBsaXZlU3R5bGVzKV07XG4gICAgICAgICAgICAgICAgbGl2ZVN0eWxlcyA9ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2xzID0gc3R5bGVyLmF0dGFjaCh7XG4gICAgICAgICAgICAnLmZvbyc6IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZGRkNDJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnNzk0cHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCdcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcubGlua3MnOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6ICdzb2xpZCAxcHgnLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzEwcHgnLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTUwcHgnLFxuICAgICAgICAgICAgICAgICdmbG9hdCc6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAnY2xlYXInOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3RleHQtZGVjb3JhdGlvbic6ICdub25lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcuYWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICdAZXh0ZW5kJzogWycubGlua3MnXSxcbiAgICAgICAgICAgICAgICAnZm9udC13ZWlnaHQnOiAnYm9sZCdcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG0oJy5tZW51ICcgKyBjbHMuZm9vLCBbXG5cbiAgICAgICAgICAgIHJvdXRlcy5tYXAobGluayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0oJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGxpbmsubGluayxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBtLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAvL2NsYXNzOiBtLnJvdXRlKCkgPT09IGxpbmsubGluayA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAvL2NsYXNzOiBtLnJvdXRlKCkgPT09IGxpbmsubGluayA/ICBjbHMubGlua3MgKycgJytjbHMuYWN0aXZlIDogY2xzLmxpbmtzXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBtLnJvdXRlKCkgPT09IGxpbmsubGluayA/IGNscy5hY3RpdmUgOiBjbHMubGlua3NcbiAgICAgICAgICAgICAgICB9LCBsaW5rLm5hbWUpO1xuICAgICAgICAgICAgfSksXG5cblxuICAgICAgICAgICAgc3R5bGVyLnZpZXcoKVxuXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmxldCBsaW5rcyA9IFtdO1xuXG5jb25zdCByb3V0ZXMgPSBbe1xuICAgICdjb21wb25lbnQnOiBob21lLFxuICAgICdsaW5rJzogJy8nLFxuICAgICduYW1lJzogJ0hvbWUnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IGFib3V0LFxuICAgICdsaW5rJzogJy9hYm91dCcsXG4gICAgJ25hbWUnOiAnQWJvdXQnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IG5ld3MsXG4gICAgJ2xpbmsnOiAnL25ld3MnLFxuICAgICduYW1lJzogJ05ld3MnXG59LCBdO1xuXG5yb3V0ZXMubWFwKGxpbmsgPT4ge1xuICAgIGxpbmtzW2xpbmsubGlua10gPSBsaW5rLmNvbXBvbmVudDtcbn0pO1xuXG5tLnJvdXRlKGRvY3VtZW50LmJvZHksICcvJywgbGlua3MpO1xuIl19
