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
                src: 'src/assets/**/*',
                dst: 'build/assets'
            }
        },
        angular: {
            src: [
                'src/app/js/app.module.js',
                'src/app/js/app.routes.js',
                'src/app/js/model/*.js',
                'src/app/js/components/**/*.module.js',
                'src/app/js/components/appServices/*.js',
				'src/app/js/components/**/*.service.js',
                'src/app/js/components/**/*.controller.js',
                'src/app/js/components/**/*.directive.js'
            ],
            dst: 'build/javaScript'
        },
        typescript: {
            src:[
                'src/app/app.module.ts',
                'src/app/app.routes.ts',
                'src/app/model/*.ts',
                'src/app/components/appServices/*.ts',
                'src/app/components/**/*.module.ts',
				'src/app/components/**/*.service.ts',
                'src/app/components/**/*.controller.ts',
                'src/app/components/**/*.directive.ts'
            ],
            dst: 'src/app/js'
        },
        proxy: 'http://localhost:3789'
    }
};