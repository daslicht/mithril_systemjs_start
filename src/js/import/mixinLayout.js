"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var mixinLayout = function mixinLayout(layout, nav, body) {
    return function () {
        return layout(nav(), body());
    };
};

exports.default = mixinLayout;
/*

const component = {
  controller: (opts = {}) => {
    return {};
  },
  view: (ctrl, opts = {}) => {
    return m('.component');
  }
};

export default component;


var layout = function(nav, body) {
    return m(".layout", [
        m("header", nav),
        m("main", body)
    ]);
};

}function(layout, nav, body) {
    return function() {
        return layout(nav(), body());
    };
};*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbXBvcnQvbWl4aW5MYXlvdXQuZXM2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLGNBQWMsU0FBZCxXQUFjLENBQVUsTUFBVixFQUFrQixHQUFsQixFQUF1QixJQUF2QixFQUE2QjtBQUM3QyxXQUFPLFlBQU07QUFDVCxlQUFPLE9BQVEsS0FBUixFQUFlLE1BQWYsQ0FBUCxDQURTO0tBQU4sQ0FEc0M7Q0FBN0I7O2tCQU1MIiwiZmlsZSI6InVuZGVmaW5lZCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBtaXhpbkxheW91dCA9IGZ1bmN0aW9uIChsYXlvdXQsIG5hdiwgYm9keSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXlvdXQoIG5hdigpLCBib2R5KCkgKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWl4aW5MYXlvdXQ7XG4vKlxuXG5jb25zdCBjb21wb25lbnQgPSB7XG4gIGNvbnRyb2xsZXI6IChvcHRzID0ge30pID0+IHtcbiAgICByZXR1cm4ge307XG4gIH0sXG4gIHZpZXc6IChjdHJsLCBvcHRzID0ge30pID0+IHtcbiAgICByZXR1cm4gbSgnLmNvbXBvbmVudCcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQ7XG5cblxudmFyIGxheW91dCA9IGZ1bmN0aW9uKG5hdiwgYm9keSkge1xuICAgIHJldHVybiBtKFwiLmxheW91dFwiLCBbXG4gICAgICAgIG0oXCJoZWFkZXJcIiwgbmF2KSxcbiAgICAgICAgbShcIm1haW5cIiwgYm9keSlcbiAgICBdKTtcbn07XG5cbn1mdW5jdGlvbihsYXlvdXQsIG5hdiwgYm9keSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxheW91dChuYXYoKSwgYm9keSgpKTtcbiAgICB9O1xufTsqL1xuIl19
