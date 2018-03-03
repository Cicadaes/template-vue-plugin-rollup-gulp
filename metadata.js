module.exports = {
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Plugin name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Plugin description',
            default: 'A Vue.js Plugin',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        version: {
            type: 'string',
            required: false,
            message: 'Plugin version',
            default: '1.0.0',
        },
        autoInstall: {
            type: 'list',
            message:
                'Should we run `npm install` for you after the project has been created? (recommended)',
            choices: [
                {
                    name: 'Yes, use NPM',
                    value: 'npm',
                    short: 'npm',
                },
                {
                    name: 'Yes, use Yarn',
                    value: 'yarn',
                    short: 'yarn',
                },
                {
                    name: 'No, I will handle that myself',
                    value: false,
                    short: 'no',
                },
            ],
        }
    },
}