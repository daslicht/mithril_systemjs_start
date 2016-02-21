'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = {

    controller: function controller() {

        _mithril2.default.route.mode = 'pathname';

        console.log('navigation opts:');
        /*	m.route(document.body, "/", {
          "/": info
        });*/

        // und/oder kannst du hier auf die Optionen zugreifen.
        return {};
    },

    view: function view() {

        return (0, _mithril2.default)('nav', [(0, _mithril2.default)('a', {
            href: '/',
            config: _mithril2.default.route
        }, ' HOME '), (0, _mithril2.default)('a', {
            href: '/chat',
            config: _mithril2.default.route
        }, ' CHAT ')]);
        //return m('h1', opts.foo + extra);
    }

};

exports.default = nav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbXBvcnQvbmF2LmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE1BQU07O0FBRVIsZ0JBQVksc0JBQU07O0FBRWQsMEJBQUUsS0FBRixDQUFRLElBQVIsR0FBZSxVQUFmLENBRmM7O0FBSWQsZ0JBQVEsR0FBUixDQUFZLGtCQUFaOzs7Ozs7QUFKYyxlQVVQLEVBQVAsQ0FWYztLQUFOOztBQWFaLFVBQU0sZ0JBQU07O0FBRVIsZUFBTyx1QkFBRSxLQUFGLEVBQVMsQ0FFWix1QkFBRSxHQUFGLEVBQU87QUFDSCxrQkFBTSxHQUFOO0FBQ0Esb0JBQVEsa0JBQUUsS0FBRjtTQUZaLEVBR0csUUFISCxDQUZZLEVBU1osdUJBQUUsR0FBRixFQUFPO0FBQ0gsa0JBQU0sT0FBTjtBQUNBLG9CQUFRLGtCQUFFLEtBQUY7U0FGWixFQUdHLFFBSEgsQ0FUWSxDQUFULENBQVA7O0tBRkU7QUFBTTtDQWZWOztrQkF5Q1MiLCJmaWxlIjoidW5kZWZpbmVkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gZnJvbSAnbWl0aHJpbCc7XG5cbmNvbnN0IG5hdiA9IHtcblxuICAgIGNvbnRyb2xsZXI6ICgpID0+IHtcblxuICAgICAgICBtLnJvdXRlLm1vZGUgPSAncGF0aG5hbWUnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0aW9uIG9wdHM6Jyk7XG4gICAgICAgLypcdG0ucm91dGUoZG9jdW1lbnQuYm9keSwgXCIvXCIsIHtcbiAgICBcdCAgICBcIi9cIjogaW5mb1xuICAgIFx0fSk7Ki9cblxuICAgICAgICAvLyB1bmQvb2RlciBrYW5uc3QgZHUgaGllciBhdWYgZGllIE9wdGlvbmVuIHp1Z3JlaWZlbi5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0sXG5cbiAgICB2aWV3OiAoKSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIG0oJ25hdicsIFtcblxuICAgICAgICAgICAgbSgnYScsIHtcbiAgICAgICAgICAgICAgICBocmVmOiAnLycsXG4gICAgICAgICAgICAgICAgY29uZmlnOiBtLnJvdXRlXG4gICAgICAgICAgICB9LCAnIEhPTUUgJyksXG5cblxuXG4gICAgICAgICAgICBtKCdhJywge1xuICAgICAgICAgICAgICAgIGhyZWY6ICcvY2hhdCcsXG4gICAgICAgICAgICAgICAgY29uZmlnOiBtLnJvdXRlXG4gICAgICAgICAgICB9LCAnIENIQVQgJylcblxuXG4gICAgICAgIF0pO1xuICAgICAgICAvL3JldHVybiBtKCdoMScsIG9wdHMuZm9vICsgZXh0cmEpO1xuXG4gICAgfSxcblxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdjtcbiJdfQ==
