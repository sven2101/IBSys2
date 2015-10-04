module.exports = {
    path: {
        index : {
          src: 'src/index.html',
          dst:  'build'
        },
        assets: {
            x2js: {
                src: 'src/assets/js/**',
                dst: 'build/assets/js'
            }
        },
        proxy: 'http://localhost:8080'
    }
};