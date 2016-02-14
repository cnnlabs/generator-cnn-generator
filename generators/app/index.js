'use strict';

const generators = require('yeoman-generator');

/*
 * Running context order reference:
 *
 *     initializing
 *     prompting
 *     configuring
 *     default
 *     writing
 *     conflicts
 *     install
 *     end
 *
 * More details at http://yeoman.io/authoring/running-context.html
 */
module.exports = generators.Base.extend({
    writing: {
        copyFiles: function () {
            this.fs.copy(this.templatePath('generators/'), this.destinationPath('generators/'));
        }
    },

    conflicts: {
        modifyPackageJson: function () {
            let packageJson = this.fs.readJSON(this.destinationPath('package.json'));

            packageJson.main = 'generators/app/index.js';
            packageJson.files = ['generators/app'];
            packageJson.keywords.push('yeoman-generator');

            this.fs.writeJSON(this.destinationPath('package.json'), packageJson);
        }
    },

    install: {
        npmInstall: function () {
            this.npmInstall([
                'yeoman-generator'
            ], {
                save: true
            });
        }
    },

    end: {
        message: function () {
            this.log('cnn-generator completed');
        }
    }
});
