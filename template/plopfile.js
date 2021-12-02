const fs = require('fs');

module.exports = (plop) => {
    plop.setActionType('registerCustomElement', function (answers, config, plop) {
        let array = fs.readFileSync('src/index.js').toString().split("\n");
        let newArray = [];
        let endOfImport = false;

        let name = answers.name;
        name.replace(/\W/g, ' ')

        const words = name.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        const properCase = words.join("");
        const dashCase = name.replace(/ /g, '-');

        for(let i in array) {
            if(!endOfImport && !array[i].includes("import")) {
                newArray.push(`import { ${properCase}Element } from './main/elements/${properCase}Element.js';`);
                endOfImport = true;
            }

            newArray.push(array[i]);
        }
        newArray.push(`customElements.define('${dashCase}-element', ${properCase}Element);`);
        
        fs.writeFileSync("src/index.js", newArray.join("\n"), {encoding: 'utf8', flag: 'w'});

        return 'src/index.js updated with new Custom Element';
	});

    plop.setGenerator('customElement', {
        description: 'Create a new Custom Element',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Custom Element name'
        }],
        actions: [{
            type: 'add',
            path: 'src/main/components/{{properCase name}}Component.js',
            templateFile: 'plop-templates/CustomComponent.js.hbs'
        }, {
            type: 'add',
            path: 'src/main/elements/{{properCase name}}Element.js',
            templateFile: 'plop-templates/CustomElement.js.hbs'
        }, {
            type: 'add',
            path: 'src/test/components/{{properCase name}}Component.test.js',
            templateFile: 'plop-templates/CustomComponent.test.js.hbs'
        }, {
            type: 'add',
            path: 'src/test/elements/{{properCase name}}Element.test.js',
            templateFile: 'plop-templates/CustomElement.test.js.hbs'
        }, {
            type: 'registerCustomElement'
        }]
    });
};