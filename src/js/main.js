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

        return (0, _mithril2.default)('.menu ' + cls.foo, [

        //routes.map(link => {

        Object.keys(routes).forEach(function (link) {
            var value = routes[link];
            console.log('value.name:', value.name);
            return (0, _mithril2.default)('a', {
                href: link,
                config: _mithril2.default.route,
                //class: m.route() === link.link ? 'active' : 'inactive'
                //class: m.route() === link.link ?  cls.links +' '+cls.active : cls.links
                class: _mithril2.default.route() === link ? cls.active : cls.links
            }, value.name);
        }), styler.view()]);
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

var routes = {
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
var links = {};
Object.keys(routes).forEach(function (link) {
    var value = routes[link];
    links[link] = value.component;
});
console.log(links);
/*let links = {};
routes.forEach(link => {
    console.log(link);
    //links[link.link] = link.component;
});*/

_mithril2.default.route(document.body, '/', links);

//# sourceMappingURL=data:application/json;base64,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QVksTUFBWixFQUFvQixPQUFwQixDQUE2QixnQkFBUztBQUNsQyxRQUFJLFFBQVEsT0FBTyxJQUFQLENBQVIsQ0FEOEI7QUFFbEMsVUFBTSxJQUFOLElBQWMsTUFBTSxTQUFOLENBRm9CO0NBQVQsQ0FBN0I7QUFJQSxRQUFRLEdBQVIsQ0FBWSxLQUFaOzs7Ozs7O0FBU0Esa0JBQUUsS0FBRixDQUFRLFNBQVMsSUFBVCxFQUFlLEdBQXZCLEVBQTRCLEtBQTVCIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuaW1wb3J0IGoyYyBmcm9tICdqMmMnO1xuLy9pbXBvcnQgc3R5bGVyIGZyb20gJ21pdGhyaWwtajJjJztcbm0ucm91dGUubW9kZSA9ICdwYXRobmFtZSc7XG5jb25zdCBuZXdzID0ge1xuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gVW5zZXJlIE5ld3NzZWl0ZVxuICAgICAgICByZXR1cm4gbShsYXlvdXQsIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3cycsXG4gICAgICAgICAgICBjb250ZW50OiAnbmV3cyBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5jb25zdCBhYm91dCA9IHtcbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhYm91dDogJywgbS5yb3V0ZSgpKTtcbiAgICB9LFxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgLy8gQWJvdXQgdXNcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0Fib3V0IHVzJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdhYm91dCBjb250ZW50J1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5cbmNvbnN0IGhvbWUgPSB7XG5cbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG0ucm91dGUoKSk7XG4gICAgfSxcblxuICAgIHZpZXc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG0obGF5b3V0LCB7XG4gICAgICAgICAgICB0aXRsZTogJ0hvbWUnLFxuICAgICAgICAgICAgY29udGVudDogJ2hvbWUgY29udGVudCdcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY29udGVudCA9IHtcbiAgICBjb250cm9sbGVyOiAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIG9wdHMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdGT09PJztcbiAgICAgICAgcmV0dXJuIG9wdHM7XG4gICAgfSxcbiAgICB2aWV3OiAoY3RybCkgPT4ge1xuICAgICAgICByZXR1cm4gbSgnLmNvbnRlbnQnLCBbXG4gICAgICAgICAgICBtKCdoMScsIGN0cmwudGl0bGUpLFxuICAgICAgICAgICAgbSgnaDInLCBjdHJsLmNvbnRlbnQpXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IGxheW91dCA9IHtcbiAgICB2aWV3OiAoY3RybCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIHJldHVybiBtKCcubGF5b3V0JywgW1xuICAgICAgICAgICAgbShtZW51LCB7XG4gICAgICAgICAgICAgICAgJ3Rlc3QnOiAnYmFyJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBtKGNvbnRlbnQsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogb3B0cy50aXRsZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBvcHRzLmNvbnRlbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cbmNvbnN0IG1lbnUgPSB7XG4gICAgdmlldzogKHt9LCBvcHRzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuXG5cbiAgICAgICAgdmFyIHN0eWxlcyA9ICcnO1xuICAgICAgICB2YXIgbGl2ZVN0eWxlcyA9ICcnO1xuICAgICAgICB2YXIgc3R5bGVyID0ge1xuICAgICAgICAgICAgbGl2ZVVwZGF0ZTogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVkU3R5bGUgPSBqMmMuc2hlZXQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIGxpdmVTdHlsZXMgKz0gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3BlZFN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dGFjaDogZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGVkU3R5bGUgPSBqMmMuc2hlZXQoc3R5bGUpO1xuICAgICAgICAgICAgICAgIHN0eWxlcyArPSBzY29wZWRTdHlsZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NvcGVkU3R5bGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlldzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gW20oJ3N0eWxlJywgc3R5bGVzKSwgbSgnc3R5bGUnLCBsaXZlU3R5bGVzKV07XG4gICAgICAgICAgICAgICAgbGl2ZVN0eWxlcyA9ICcnO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY2xzID0gc3R5bGVyLmF0dGFjaCh7XG4gICAgICAgICAgICAnLmZvbyc6IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZGRkNDJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnNzk0cHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnNDhweCdcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcubGlua3MnOiB7XG4gICAgICAgICAgICAgICAgJ2JvcmRlcic6ICdzb2xpZCAxcHgnLFxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJzEwcHgnLFxuICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTUwcHgnLFxuICAgICAgICAgICAgICAgICdmbG9hdCc6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAnY2xlYXInOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgJ3RleHQtZGVjb3JhdGlvbic6ICdub25lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcuYWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICdAZXh0ZW5kJzogWycubGlua3MnXSxcbiAgICAgICAgICAgICAgICAnZm9udC13ZWlnaHQnOiAnYm9sZCdcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG0oJy5tZW51ICcgKyBjbHMuZm9vLCBbXG5cbiAgICAgICAgICAgIC8vcm91dGVzLm1hcChsaW5rID0+IHtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKCBsaW5rID0+ICB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcm91dGVzW2xpbmtdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZS5uYW1lOicsdmFsdWUubmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0oJ2EnLCB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGxpbmssXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogbS5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgLy9jbGFzczogbS5yb3V0ZSgpID09PSBsaW5rLmxpbmsgPyAgY2xzLmxpbmtzICsnICcrY2xzLmFjdGl2ZSA6IGNscy5saW5rc1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogbS5yb3V0ZSgpID09PSBsaW5rID8gY2xzLmFjdGl2ZSA6IGNscy5saW5rc1xuICAgICAgICAgICAgICAgIH0sIHZhbHVlLm5hbWUpO1xuICAgICAgICAgICAgfSksXG5cblxuICAgICAgICAgICAgc3R5bGVyLnZpZXcoKVxuXG4gICAgICAgIF0pO1xuICAgIH1cbn07XG5cblxuLypjb25zdCByb3V0ZXMgPSBbe1xuICAgICdjb21wb25lbnQnOiBob21lLFxuICAgICdsaW5rJzogJy8nLFxuICAgICduYW1lJzogJ0hvbWUnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IGFib3V0LFxuICAgICdsaW5rJzogJy9hYm91dCcsXG4gICAgJ25hbWUnOiAnQWJvdXQnXG59LCB7XG4gICAgJ2NvbXBvbmVudCc6IG5ld3MsXG4gICAgJ2xpbmsnOiAnL25ld3MnLFxuICAgICduYW1lJzogJ05ld3MnXG59LCBdO1xuXG5sZXQgbGlua3MgPSB7fTtcbnJvdXRlcy5tYXAobGluayA9PiB7XG4gICAgbGlua3NbbGluay5saW5rXSA9IGxpbmsuY29tcG9uZW50O1xufSk7Ki9cblxuY29uc3Qgcm91dGVzID0ge1xuICAgICcvJzoge1xuICAgICAgICBjb21wb25lbnQ6IGhvbWUsXG4gICAgICAgICduYW1lJzogJ0hvbWUnXG4gICAgfSxcbiAgICAnL2Fib3V0Jzoge1xuICAgICAgICAnY29tcG9uZW50JzogYWJvdXQsXG4gICAgICAgICduYW1lJzogJ0Fib3V0J1xuICAgIH0sXG4gICAgJy9uZXdzJzoge1xuICAgICAgICAnY29tcG9uZW50JzogbmV3cyxcbiAgICAgICAgJ25hbWUnOiAnTmV3cydcbiAgICB9XG59O1xubGV0IGxpbmtzID0ge307XG5PYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2goIGxpbmsgPT4gIHtcbiAgICBsZXQgdmFsdWUgPSByb3V0ZXNbbGlua107XG4gICAgbGlua3NbbGlua10gPSB2YWx1ZS5jb21wb25lbnQ7XG59KTtcbmNvbnNvbGUubG9nKGxpbmtzKTtcbi8qbGV0IGxpbmtzID0ge307XG5yb3V0ZXMuZm9yRWFjaChsaW5rID0+IHtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICAvL2xpbmtzW2xpbmsubGlua10gPSBsaW5rLmNvbXBvbmVudDtcbn0pOyovXG5cblxuXG5tLnJvdXRlKGRvY3VtZW50LmJvZHksICcvJywgbGlua3MpO1xuIl19
