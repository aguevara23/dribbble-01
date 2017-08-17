module.exports = {
 entry: {
   App: __dirname + "/app/assets/scripts/App.js",
   Vendor: __dirname + "/app/assets/scripts/Vendor.js"
 },
 output: {
   path: __dirname + "/app/temp/scripts",
   filename: "[name].js"
 },
 module: {
   loaders: [
     {
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       },
       test: /\.js$/,
       exclude: /node_modules/
     }
   ]
 }
}
