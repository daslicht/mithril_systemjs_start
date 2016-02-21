const layout = function (nav, body) {
    return m('.layout', [
        m('header', nav),
        m('main', body)
    ]);
};
export default layout;
