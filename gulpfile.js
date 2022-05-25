const gulp = require('gulp');
const electron = require('electron-connect').server.create();

gulp.task('watch:electron', function () {
    electron.start();
    gulp.watch(['./src/pages/vue/**/*.{js,vue}'], function (done){
        const exec = require('child_process').exec;
        const cmdStr = 'npm run webpack';
        exec(cmdStr, (err, stdout, stderr) => {
            if (err){
                console.log(err);
                console.warn(new Date(),'Webpack命令执行失败');
            } else {
                console.log(stdout);
                console.warn(new Date(),'Webpack命令执行成功');
            }
            done();
        });
    });
    gulp.watch(['./src/main.js', './src/main/*.js'], function (done){
        electron.restart();
        done();
    });
    gulp.watch(['./src/pages/**/*.{html,js,css,vue}', './src/preload.js'], function (done){
        electron.reload();
        done();
    });
});