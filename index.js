const yaml = require("js-yaml");
const fs = require ("fs");

const defDir = "./yaml"
result = []
for (let file of fs.readdirSync(defDir)){
    let body = yaml.load(fs.readFileSync(defDir+'/'+file, "utf8"));
    body["名称"] = file.slice(0, -5);
    result.push(body);
}

console.log(result);