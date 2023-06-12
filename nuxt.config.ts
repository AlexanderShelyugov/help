import {
    createResolver,
} from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
    ],

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'en',
            },
        },
    },

    runtimeConfig: {
        logsnag: {
            project: '',
            token: '',
        },

        public: {
            algolia: {
                appId: '',
                indexName: '',
                siteKey: '',
            },
        },
    },

    $production: {
        routeRules: {
            '/**': { static: true },
        },
    },

    algolia: {
        // categories for indexing
        // set ALGOLIA_SECRET_KEY to environment variables before build
        categories: [
            { path: '/astra/getting-started', category: 'Astra > Getting Started' },
            { path: '/astra/admin-guide', category: 'Astra > Admin Guide' },
            { path: '/astra/receiving', category: 'Astra > Receiving' },
            { path: '/astra/processing', category: 'Astra > Processing' },
            { path: '/astra/monitoring', category: 'Astra > Monitoring' },
            { path: '/astra/delivery', category: 'Astra > Delivery' },

            { path: '/alta/getting-started', category: 'Alta > Getting Started' },
            { path: '/alta/admin-guide', category: 'Alta > Admin Guide' },
            { path: '/alta/ott-settings', category: 'Alta > OTT Settings' },

            { path: '/misc/tools-and-utilities', category: 'Tools & Utilities' },
            { path: '/misc/terms-and-conditions', category: 'Terms & Conditions' },
            { path: '/misc/troubleshooting', category: 'Troubleshooting' },
        ],
    },
})