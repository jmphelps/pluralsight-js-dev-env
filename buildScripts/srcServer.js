import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
var _dirname = "D:/Development/pluralsight-js-dev-env/";


/*eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(_dirname, 'src/index.html'));
});

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
