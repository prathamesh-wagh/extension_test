var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltf738cc52904b76c6')
// .setHost('localhost')
// .setPort(8000)
.setHost("54c383fd.ngrok.io")
.setProtocol("http")
// .setPort(80)
.setMasterKey('blte09616313f4eaf7a')

var extensionSDK = app.Extension({
	secret_key     : 'bltf738cc52904b76c6',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


