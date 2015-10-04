module.exports = {
    path: {
        index: {
            src: 'src/index.html',
            dst: 'build'
        },
        componentViews: {
            src: 'src/app/components/**/*.html',
            dst: 'build/components'
        },
        assets: {
            x2js: {
                src: 'src/assets/js/**',
                dst: 'build/assets/js'
            }
        },
        angular: {
            src: [
                'src/app/app.module.js',
                'src/app/app.routes.js',
                'src/app/components/**/*.module.js',
                'src/app/components/app-services/*.js',
                'src/app/components/**/*.controller.js',
                'src/app/components/**/*.directive.js'
            ],
            dst: 'build/javaScript'
        },

        proxy: 'http://localhost:8080'
    }
};