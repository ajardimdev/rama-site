const withImages = require('next-images')
module.exports = withImages({
    esModule: true,
    images: {
        domains: ['rama-cms.herokuapp.com', 'ramablob.blob.core.windows.net'],
        deviceSizes: [640, 750, 828, 1080, 1920, 2048, 3840]
    }
})
