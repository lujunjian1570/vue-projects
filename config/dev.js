/**
 * Created by LuJunJian on 2020/6/10
 *
 */
let projectName = process.argv[2]
console.log(process.argv);
let fs = require('fs')

fs.writeFileSync('./config/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync;
exec('npm run serve', {stdio: 'inherit'});

