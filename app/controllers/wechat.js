/**
 * 微信业务 控制层
 */

var wechat = require('../../wechat/g');
var reply = require('../../wx/reply');
var wx = require('../../wx/index');

exports.hear = function *(next){
    this.middle = wechat(wx.config.wechat, reply.reply);
    yield this.middle(next)
}
