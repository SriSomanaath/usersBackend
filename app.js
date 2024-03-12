const fs = require("fs");
const YAML = require("js-yaml");

try {
    const raw = fs.readFileSync("data.yaml", "utf8");
    const data = YAML.load(raw);

    console.log(data);

    data['akangksha@bigvisionai.org'].FirstName = "Sreenath";

    const yaml = YAML.dump(data);
    fs.writeFileSync("data.yaml", yaml, "utf8", function (err) {
        if (err) throw err;
        console.log("Saved!");
    });
} catch (ex) {
    console.log(ex);
}
