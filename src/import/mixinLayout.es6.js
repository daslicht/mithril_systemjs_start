

const mixinLayout = function (layout, nav, body) {
    return () => {
        return layout( nav(), body() );
    };
};

export default mixinLayout;
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
