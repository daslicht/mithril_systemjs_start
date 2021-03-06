'use strict';

// argv[2]: state (run once or watch)
// argv[3]: which dir to watch
// argv[4]: which dir to ignore
/*
Invoked to run once:
"transpile-es6": "node scripts/watch-es6.js once src/"


Invoked to watch:
"watch-es6": "node scripts/watch-es6.js watch src/"
https://github.com/ArthurClemens/transpile-watch
 */

// var watch = require('transpile-watch');
// watch ({
//     persistent: !(process.argv[2] === 'once'),
//     what: process.argv[3],
//     ignore: (process.argv[4] && process.argv[4] !== 'null') ? process.argv[4] : null,
//     extension: 'es6.js',
//     createOutPath: function(inPath) {
//         return inPath.replace(/es6.js$/, 'js');
//     },
//     transform: function(inPath, outPath) {
//         return [
//             'babel', inPath, '>', outPath,
//             '&&',
//             'uglifyjs', '-o', outPath, outPath
//         ].join(' ');
//     }
// });

var watch = require('transpile-watch');
watch ({
    persistent: !(process.argv[2] === 'once'),
    what: process.argv[3],
    ignore: (process.argv[4] && process.argv[4] !== 'null') ? process.argv[4] : null,
    extension: 'es6.js',
    createOutPath: function(inPath) {
        var outpath = inPath.replace(/es6.js$/, 'js');
        outpath = outpath.replace(/src/, 'src/js');
        console.log('outpath: ', outpath);
        //return inPath.replace(/es6.js$/, 'js');
        return outpath;
    },
    transform: function(inPath, outPath) {
        return [
            'babel', '--presets es2015 --source-maps inline', inPath, '>', outPath,
            /*'&&',
            'uglifyjs', '--screw-ie8 -c -m sort -r \'require,exports\' -o', outPath, outPath*/
        ].join(' ');
    }
});
