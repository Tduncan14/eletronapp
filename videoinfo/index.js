const electron = require('electron');


const {app, BrowserWindow} = electron;


// event listening / event programming
app.on('ready', ()=>{

    new BrowserWindow({})

})