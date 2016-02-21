'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigation = {

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

exports.default = navigation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbXBvcnQvbmF2aWdhdGlvbi5lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhOztBQUVmLGdCQUFZLHNCQUFNOztBQUVkLDBCQUFFLEtBQUYsQ0FBUSxJQUFSLEdBQWUsVUFBZixDQUZjOztBQUlkLGdCQUFRLEdBQVIsQ0FBWSxrQkFBWjs7Ozs7O0FBSmMsZUFVUCxFQUFQLENBVmM7S0FBTjs7QUFhWixVQUFNLGdCQUFNOztBQUVSLGVBQU8sdUJBQUUsS0FBRixFQUFTLENBRVosdUJBQUUsR0FBRixFQUFPO0FBQ0gsa0JBQU0sR0FBTjtBQUNBLG9CQUFRLGtCQUFFLEtBQUY7U0FGWixFQUdHLFFBSEgsQ0FGWSxFQVNaLHVCQUFFLEdBQUYsRUFBTztBQUNILGtCQUFNLE9BQU47QUFDQSxvQkFBUSxrQkFBRSxLQUFGO1NBRlosRUFHRyxRQUhILENBVFksQ0FBVCxDQUFQOztLQUZFO0FBQU07Q0FmVjs7a0JBeUNTIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuXG5jb25zdCBuYXZpZ2F0aW9uID0ge1xuXG4gICAgY29udHJvbGxlcjogKCkgPT4ge1xuXG4gICAgICAgIG0ucm91dGUubW9kZSA9ICdwYXRobmFtZSc7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRpb24gb3B0czonKTtcbiAgICAgICAvKlx0bS5yb3V0ZShkb2N1bWVudC5ib2R5LCBcIi9cIiwge1xuICAgIFx0ICAgIFwiL1wiOiBpbmZvXG4gICAgXHR9KTsqL1xuXG4gICAgICAgIC8vIHVuZC9vZGVyIGthbm5zdCBkdSBoaWVyIGF1ZiBkaWUgT3B0aW9uZW4genVncmVpZmVuLlxuICAgICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIHZpZXc6ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gbSgnbmF2JywgW1xuXG4gICAgICAgICAgICBtKCdhJywge1xuICAgICAgICAgICAgICAgIGhyZWY6ICcvJyxcbiAgICAgICAgICAgICAgICBjb25maWc6IG0ucm91dGVcbiAgICAgICAgICAgIH0sICcgSE9NRSAnKSxcblxuXG5cbiAgICAgICAgICAgIG0oJ2EnLCB7XG4gICAgICAgICAgICAgICAgaHJlZjogJy9jaGF0JyxcbiAgICAgICAgICAgICAgICBjb25maWc6IG0ucm91dGVcbiAgICAgICAgICAgIH0sICcgQ0hBVCAnKVxuXG5cbiAgICAgICAgXSk7XG4gICAgICAgIC8vcmV0dXJuIG0oJ2gxJywgb3B0cy5mb28gKyBleHRyYSk7XG5cbiAgICB9LFxuXG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbjtcbiJdfQ==
