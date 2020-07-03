/**
<<<<<<< HEAD
 * Created by LuJunJian on 2020/6/10
=======
 * Created by LuJunJian on 2020/4/28
>>>>>>> 251d9ddf19c74ceee44695f5a60359a33308bef7
 *
 */
let projectName = process.argv[2]
console.log(process.argv);
let fs = require('fs')

fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync;
exec('npm run serve', {stdio: 'inherit'});

