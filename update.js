const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = [{
    owner: "ontariosystem",
    repo: "OpenLens",
    provider: "github"
}];

// This updates the naming of the artifact to not contain spaces vs the default 'OpenLens Setup ${version}.${ext}'
packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";

fs.writeFileSync('package.json', JSON.stringify(packagejson));
