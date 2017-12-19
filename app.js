var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('bltc4f7ed1f03053fe8')
.setHost("test-stag-api.built.io")
.setProtocol("https")
.setMasterKey('blt1247e1bd3347ffd1')

// fa4186133c07fceccae9ecd2f6d455d0a87c21c2 - access token
// blt963bac04e8d39dff - secret key
// blt_ext_test_app - extension key
// web hook url - https://test-stag-api.built.io/v1/extensions/blt_ext_default/redeploy?application_api_key=bltc4f7ed1f03053fe8

var extensionSDK = app.Extension({
	secret_key     : 'blt963bac04e8d39dff',
	extension_key  : 'blt_ext_test_app',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start(9000)