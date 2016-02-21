'use strict';

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = {

    controller: function controller() {
        var value = 'Meine Value';
        var prop = _mithril2.default.prop('Mein Prop'); // http://mithril.js.org/mithril.prop.html

        return {
            text: 'Hallo Marc!, auch klar oder?',
            value: value,
            prop: prop
        };
    },

    view: function view(ctrl) {

        return (0, _mithril2.default)('.learningn', [(0, _mithril2.default)('span', ctrl.value), (0, _mithril2.default)('input', {
            value: ctrl.value,
            placeholder: 'Test Input',
            oninput: _mithril2.default.withAttr('value', function (v) {
                ctrl.value = v;console.log(v);
            })
        }), (0, _mithril2.default)('span', ctrl.prop()), (0, _mithril2.default)('input', {
            value: ctrl.prop(),
            oninput: _mithril2.default.withAttr('value', ctrl.prop) // http://mithril.js.org/mithril.withAttr.html
        })]);
    }
};

_mithril2.default.mount(document.body, app);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluXzIuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsSUFBTSxNQUFNOztBQUVSLGdCQUFZLHNCQUFNO0FBQ2QsWUFBSSxRQUFRLGFBQVIsQ0FEVTtBQUVkLFlBQUksT0FBTyxrQkFBRSxJQUFGLENBQU8sV0FBUCxDQUFQOztBQUZVLGVBSVA7QUFDSCxrQkFBTSw4QkFBTjtBQUNBLG1CQUFPLEtBQVA7QUFDQSxrQkFBTSxJQUFOO1NBSEosQ0FKYztLQUFOOztBQVlaLFVBQU0sY0FBQyxJQUFELEVBQVU7O0FBRVosZUFBTyx1QkFBRSxZQUFGLEVBQWdCLENBRW5CLHVCQUFFLE1BQUYsRUFBVSxLQUFLLEtBQUwsQ0FGUyxFQUduQix1QkFBRSxPQUFGLEVBQVc7QUFDUCxtQkFBTyxLQUFLLEtBQUw7QUFDUCx5QkFBYSxZQUFiO0FBQ0EscUJBQVMsa0JBQUUsUUFBRixDQUFXLE9BQVgsRUFBb0IsVUFBQyxDQUFELEVBQU87QUFBRSxxQkFBSyxLQUFMLEdBQWEsQ0FBYixDQUFGLE9BQWtCLENBQVEsR0FBUixDQUFZLENBQVosRUFBbEI7YUFBUCxDQUE3QjtTQUhKLENBSG1CLEVBU25CLHVCQUFFLE1BQUYsRUFBVSxLQUFLLElBQUwsRUFBVixDQVRtQixFQVVuQix1QkFBRSxPQUFGLEVBQVc7QUFDUCxtQkFBTyxLQUFLLElBQUwsRUFBUDtBQUNBLHFCQUFTLGtCQUFFLFFBQUYsQ0FBVyxPQUFYLEVBQW9CLEtBQUssSUFBTCxDQUE3QjtBQUZPLFNBQVgsQ0FWbUIsQ0FBaEIsQ0FBUCxDQUZZO0tBQVY7Q0FkSjs7QUFvQ04sa0JBQUUsS0FBRixDQUFRLFNBQVMsSUFBVCxFQUFlLEdBQXZCIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtIGZyb20gJ21pdGhyaWwnO1xuXG5jb25zdCBhcHAgPSB7XG5cbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9ICdNZWluZSBWYWx1ZSc7XG4gICAgICAgIGxldCBwcm9wID0gbS5wcm9wKCdNZWluIFByb3AnKTsgLy8gaHR0cDovL21pdGhyaWwuanMub3JnL21pdGhyaWwucHJvcC5odG1sXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRleHQ6ICdIYWxsbyBNYXJjISwgYXVjaCBrbGFyIG9kZXI/JyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIHByb3A6IHByb3BcbiAgICAgICAgfTtcbiAgICB9LFxuXG5cbiAgICB2aWV3OiAoY3RybCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBtKCcubGVhcm5pbmduJywgW1xuXG4gICAgICAgICAgICBtKCdzcGFuJywgY3RybC52YWx1ZSksXG4gICAgICAgICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogY3RybC52YWx1ZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1Rlc3QgSW5wdXQnLFxuICAgICAgICAgICAgICAgIG9uaW5wdXQ6IG0ud2l0aEF0dHIoJ3ZhbHVlJywgKHYpID0+IHsgY3RybC52YWx1ZSA9IHY7IGNvbnNvbGUubG9nKHYpOyB9KVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIG0oJ3NwYW4nLCBjdHJsLnByb3AoKSksXG4gICAgICAgICAgICBtKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogY3RybC5wcm9wKCksXG4gICAgICAgICAgICAgICAgb25pbnB1dDogbS53aXRoQXR0cigndmFsdWUnLCBjdHJsLnByb3ApIC8vIGh0dHA6Ly9taXRocmlsLmpzLm9yZy9taXRocmlsLndpdGhBdHRyLmh0bWxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgXSk7XG4gICAgfVxufTtcblxuXG5tLm1vdW50KGRvY3VtZW50LmJvZHksIGFwcCk7XG4iXX0=
