import m from 'mithril';

const app = {
  // controller (optional)
  // Ein controller wird 1x pro Instanz aufgerufen und nicht jedes Mal neu gerendert wie der View. Also Daten oder ähnliches sollten im Controller oder komplett extern von "app" gespeichert werden.
  controller: () => {
    let value = 'Meine Value';
    let prop = m.prop('Mein Prop'); // http://mithril.js.org/mithril.prop.html
    
    return {
      text: 'Hallo Marc!, auch klar oder?',
      value: value,
      prop: prop
    };
  },
  
  // view (notwendig)
  // ein view wird immer wieder neu gerendert, also je nach window.requestAnimation.
  // erste Parameter ist dein controller, der hier oben definiert ist.
  view: (ctrl) => {
    
    
    // m(ELEMENT, INHALT)
    // return m('h1', 'Text');
    // oder:
    // m(ELEMENT, OPTIONEN, INHALT)
    // OPTIONEN ist immer ein Objekt.
    // OPTIONEN sind nachher deine HTML Attribute
    // <h1 style="background: red;">...
    // INHALT kann auch ein Array sein.
    //return m('h1', {
    //  style: 'background: red;'
    //}, ctrl.text);
    
    // Inputs..
    // Wir haben hier eine extra Methode..
    // genannt m.withAttr('value', function(value))
    return m('.learningn', [
      // Alte Version
      m('span', ctrl.value),
      m('input', {
        value: ctrl.value,
        placeholder: 'Test Input',
        // Event bei Eingabe:
        // jsbin Bug.. man muss oben Rechts leider auf "run with js" klicken damit der das anständig ausführt
        oninput: m.withAttr('value', (v) => { ctrl.value = v; console.log(v); })
      }),
      
      // ----
      
      // Shorthand
      m('span', ctrl.prop()), // <---- m.prop ist eine Getter/Setter Funktion
      m('input', {
        value: ctrl.prop(),
        // Shorthand in Verbindung mit m.prop()
        oninput: m.withAttr('value', ctrl.prop) // http://mithril.js.org/mithril.withAttr.html
      })
      
     ]);
  }
};

// Mit m.mount mountest Du Mithril auf ein Element, ich nehme hier einfach den Body.
m.mount(document.body, app); // http://mithril.js.org/mithril.mount.html