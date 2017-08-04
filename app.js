var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt7d2f7f91303a2094')
// .setHost('localhost')
// .setPort(8000)
.setHost("54c383fd.ngrok.io")
.setProtocol("http")
// .setPort(80)
.setMasterKey('bltf2f96329cf04677f')

var extensionSDK = app.Extension({
	secret_key     : 'blt42824770f2b28c08',
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)


