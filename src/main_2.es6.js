import m from 'mithril';

const app = {

    controller: () => {
        let value = 'Meine Value';
        let prop = m.prop('Mein Prop'); // http://mithril.js.org/mithril.prop.html

        return {
            text: 'Hallo Marc!, auch klar oder?',
            value: value,
            prop: prop
        };
    },


    view: (ctrl) => {

        return m('.learningn', [

            m('span', ctrl.value),
            m('input', {
                value: ctrl.value,
                placeholder: 'Test Input',
                oninput: m.withAttr('value', (v) => { ctrl.value = v; console.log(v); })
            }),

            m('span', ctrl.prop()),
            m('input', {
                value: ctrl.prop(),
                oninput: m.withAttr('value', ctrl.prop) // http://mithril.js.org/mithril.withAttr.html
            })

        ]);
    }
};


m.mount(document.body, app);
