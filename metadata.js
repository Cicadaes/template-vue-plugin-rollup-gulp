module.exports = {
    prompts: {
        name: {
            when: 'isNotTest',
            type: 'string',
            required: true,
            message: 'Plugin name',
        },
        description: {
            when: 'isNotTest',
            type: 'string',
            required: false,
            message: 'Plugin description',
            default: 'A Vue.js Plugin',
        },
        author: {
            when: 'isNotTest',
            type: 'string',
            message: 'Author',
        }
    },
}