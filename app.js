var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App1('blt196d1ea350e6398e')
.setHost("fd238959.ngrok.io")
.setProtocol("https")
.setMasterKey('bltd99abe8292a3b1bb')

var extensionSDK = app.Extension({
	secret_key     : 'blt2027aaf39aeb589c',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


