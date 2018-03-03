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
        }
    },
}