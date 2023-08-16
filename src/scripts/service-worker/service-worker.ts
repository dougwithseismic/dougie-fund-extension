import MonetizeThis from 'monetize-this'

const monetizeThis = new MonetizeThis({
    apiKey: '@dougwithseismic',
    options: {
        mode: 'manual',
        enabled: true
    }
})

monetizeThis.enabled(true)