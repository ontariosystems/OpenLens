const fs = require('fs');
const packagePath = './lens/open-lens/package.json';

var packagejson = require(packagePath);

packagejson.build.publish = [{
    url: "https://github.com/ontariosystems/OpenLens/releases/download/Latest",
    provider: "generic"
}];

// This updates the naming of the artifact to not contain spaces vs the default 'OpenLens Setup ${version}.${ext}'
packagejson.build.win.artifactName = "OpenLens-${version}.${ext}";

fs.writeFileSync(packagePath, JSON.stringify(packagejson, null, 2));
