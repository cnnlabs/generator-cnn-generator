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
        /*
         * Assumptions:
         *
         * - This generator is called via cnn-base with composeWith.
         * - PACKAGE_NAME starts with `generator-`.
         * - GENERATOR_NAME can be derived from a proper PACKAGE_NAME.
         * - REPOSITORY_NAME is the same as the PACKAGE_NAME.
         *
         * None of these assumptions are currently enforced, so this can fall
         * apart very quickly.
         */
        copyFiles: function () {
            let packageJson = this.fs.readJSON(this.destinationPath('package.json'));

            this.fs.copy(
                this.templatePath('generators/'),
                this.destinationPath('generators/')
            );

            this.fs.copyTpl(
                this.templatePath('README.md'),
                this.destinationPath('README.md'),
                {
                    PACKAGE_NAME: packageJson.name,
                    GENERATOR_NAME: packageJson.name.match(/generator\-(.+)$/)[1],
                    REPOSITORY_NAME: packageJson.name
                }
            );
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
