
import nav from '/src/js/import/navigation';
import layout from '/src/js/import/layout';
import mixinLayout from '/src/js/import/layout';


// const body = () => {
//     return [ m('h1', 'Info') ];
// };

const home = {

    view: mixinLayout(layout, nav, {})

};


export default home;
