(function(t){function i(i){for(var a,n,r=i[0],o=i[1],c=i[2],d=0,f=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&f.push(s[n][0]),s[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(i);while(f.length)f.shift()();return l.push.apply(l,c||[]),e()}function e(){for(var t,i=0;i<l.length;i++){for(var e=l[i],a=!0,r=1;r<e.length;r++){var o=e[r];0!==s[o]&&(a=!1)}a&&(l.splice(i--,1),t=n(n.s=e[0]))}return t}var a={},s={app:0},l=[];function n(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=a,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)n.d(e,a,function(i){return t[i]}.bind(null,a));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var u=o;l.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},1786:function(t,i,e){},"2eba":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"x"},[t.showAvatar?e("div",{staticClass:"comment-avatar"},[e("avatar",{attrs:{avatar:t.avatar}})],1):t._e(),e("div",{staticClass:"comment",style:{width:t.commentWidth}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:t.minRows,maxRows:t.maxRows},placeholder:t.placeholder},on:{focus:function(i){return t.showButton(0)}},model:{value:t.textareaMap[0],callback:function(i){t.$set(t.textareaMap,0,i)},expression:"textareaMap[0]"}}),t.buttonMap[0]?e("div",{staticClass:"hbl-owo"},[e("div",{staticClass:"emoj publish",class:t.pBodyMap[0]?"OwO":"OwO OwO-open",style:{width:t.emojiWidth}},[e("div",{staticClass:"OwO-logo",on:{click:function(i){return t.pBodyStatus(0)}}},[e("span",[t._v("Emoji表情")])]),e("div",{staticClass:"OwO-body"},[e("ul",{staticClass:"OwO-items OwO-items-show"},t._l(t.OwOlist,(function(i,a){return e("li",{key:"oitem"+a,staticClass:"OwO-item",on:{click:function(e){return t.choseEmoji(0,i.title)}}},[e("img",{attrs:{src:t.publicPath+"/images/face/"+i.url,alt:""}})])})),0)])]),e("div",{staticClass:"publish publish-btn"},[e("button",{staticClass:"btn",on:{click:function(i){return t.doSend()}}},[t._v("发送")]),e("button",{staticClass:"btn btn-cancel",on:{click:function(i){return t.cancel(0)}}},[t._v("取消")])])]):t._e()],1),e("div",{staticClass:"comm"},[e("div",{staticClass:"com-rep com-title"},[t._v(" 精彩评论 "),e("span",{staticClass:"com-span"},[t._v("("+t._s(t.commentNum)+")")])])]),t._l(t.commentList,(function(i,a){return e("div",{key:a,staticClass:"hbl-child"},[e("div",{staticClass:"reply"}),e("div",{staticClass:"content"},[e("div",{staticClass:"comment-f"},[e("avatar",{attrs:{avatar:i.commentUser.avatar?i.commentUser.avatar:t.avatar}})],1),e("div",{staticClass:"comment-f"},[e("div",[e("div",{staticClass:"nickname author"},[t._v(" "+t._s(i.commentUser.nickName)+" ")]),i.commentUser.id===t.authorId?e("div",{staticClass:"icon author"},[t._v(" "+t._s(t.label)+" ")]):t._e(),e("div",{staticClass:"date"},[t._v(" "+t._s(i.createDate)+" ")])])]),e("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(t.analyzeEmoji(i.content))}},[t._v(" "+t._s(t.analyzeEmoji(i.content))+" ")]),e("div",{staticClass:"reply-content reply-fa"},[e("div",{staticClass:"reply-font",on:{click:function(e){return t.doReply(i.id)}}},[e("div",[e("img",{staticClass:"icon-reply",attrs:{src:t.publicPath+"/images/icons/reply.png"}}),e("font",{staticClass:"icon-reply icon-hf"},[t._v("回复")])],1)]),t.replyMap[i.id]?e("div",{staticClass:"comment",style:{width:t.commentWidth},attrs:{showAvatar:t.showAvatar}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:t.minRows,maxRows:t.maxRows},placeholder:t.placeholder},on:{focus:function(e){return t.showButton(i.id)}},model:{value:t.textareaMap[i.id],callback:function(e){t.$set(t.textareaMap,i.id,e)},expression:"textareaMap[item.id]"}}),t.buttonMap[i.id]?e("div",{staticClass:"hbl-owo"},[e("div",{staticClass:"emoj publish",class:t.pBodyMap[i.id]?"OwO":"OwO OwO-open",style:{width:t.emojiWidth}},[e("div",{staticClass:"OwO-logo",on:{click:function(e){return t.pBodyStatus(i.id)}}},[e("span",[t._v("Emoji表情")])]),e("div",{staticClass:"OwO-body"},[e("ul",{staticClass:"OwO-items OwO-items-show"},t._l(t.OwOlist,(function(a,s){return e("li",{key:"oitem"+s,staticClass:"OwO-item",on:{click:function(e){return t.choseEmoji(i.id,a.title)}}},[e("img",{attrs:{src:t.publicPath+"/images/face/"+a.url,alt:""}})])})),0)])]),e("div",{staticClass:"publish publish-btn"},[e("button",{staticClass:"btn",on:{click:function(e){return t.doChidSend(i.id,i.commentUser.id,i.id)}}},[t._v(" 发送 ")]),e("button",{staticClass:"btn btn-cancel",on:{click:function(e){return t.cancel(i.id)}}},[t._v(" 取消 ")])])]):t._e()],1):t._e()]),e("i",{staticClass:"el-icon-delete sid-btn"})]),t._l(i.childrenList,(function(a,s){return e("div",{key:s,staticClass:"children"},[e("div",{staticClass:"reply"}),e("div",{staticClass:"content"},[e("i",{staticClass:"el-icon-delete sid-btn"}),e("div",{staticClass:"comment-f"},[e("avatar",{attrs:{avatar:a.commentUser.avatar?a.commentUser.avatar:t.avatar}})],1),e("div",{staticClass:"comment-f"},[e("div",[e("div",{staticClass:"nickname author"},[t._v(" "+t._s(a.commentUser.nickName)+" ")]),a.commentUser.id===t.authorId?e("div",{staticClass:"icon author"},[t._v(" "+t._s(t.label)+" ")]):t._e(),e("div",{staticClass:"date"},[t._v(" "+t._s(a.createDate)+" ")])])]),e("div",{staticClass:"reply-content"},[e("div",{staticClass:"cc cc-to"},[e("a",{attrs:{href:"#"}},[t._v("@"+t._s(a.targetUser.nickName))])]),e("div",{staticClass:"cc",domProps:{innerHTML:t._s(t.analyzeEmoji(a.content))}},[t._v(" "+t._s(t.analyzeEmoji(a.content))+" ")])]),e("div",{staticClass:"reply-content reply-fa"},[e("div",{staticClass:"reply-font",on:{click:function(i){return t.doReply(a.id)}}},[e("div",[e("img",{staticClass:"icon-reply",attrs:{src:t.publicPath+"/images/icons/reply.png"}}),e("font",{staticClass:"icon-reply icon-hf"},[t._v("回复")])],1)]),t.replyMap[a.id]?e("div",{staticClass:"comment",style:{width:t.commentWidth},attrs:{showAvatar:t.showAvatar}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:t.minRows,maxRows:t.maxRows},placeholder:t.placeholder},on:{focus:function(i){return t.showButton(a.id)}},model:{value:t.textareaMap[a.id],callback:function(i){t.$set(t.textareaMap,a.id,i)},expression:"textareaMap[ritem.id]"}}),t.buttonMap[a.id]?e("div",{staticClass:"hbl-owo"},[e("div",{staticClass:"emoj publish",class:t.pBodyMap[a.id]?"OwO":"OwO OwO-open",style:{width:t.emojiWidth}},[e("div",{staticClass:"OwO-logo",on:{click:function(i){return t.pBodyStatus(a.id)}}},[e("span",[t._v("Emoji表情")])]),e("div",{staticClass:"OwO-body"},[e("ul",{staticClass:"OwO-items OwO-items-show"},t._l(t.OwOlist,(function(i,s){return e("li",{key:"oitem"+s,staticClass:"OwO-item",on:{click:function(e){return t.choseEmoji(a.id,i.title)}}},[e("img",{attrs:{src:t.publicPath+"/images/face/"+i.url,alt:""}})])})),0)])]),e("div",{staticClass:"publish publish-btn"},[e("button",{staticClass:"btn",on:{click:function(e){return t.doChidSend(a.id,a.commentUser.id,i.id)}}},[t._v(" 发送 ")]),e("button",{staticClass:"btn btn-cancel",on:{click:function(i){return t.cancel(a.id)}}},[t._v(" 取消 ")])])]):t._e()],1):t._e()])])])}))],2)}))],2)},l=[],n=(e("a9e3"),e("ac1f"),e("466d"),e("5319"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"user"},[e("div",{staticClass:"user-img"},[e("img",{attrs:{src:t.avatar?t.avatar:t.publicPath+"/images/tmp/person.jpeg"}})])])}),r=[],o={props:{avatar:{type:String,default:""}},data:function(){return{comment:"",publicPath:""}}},c=o,u=(e("85e3"),e("2877")),d=Object(u["a"])(c,n,r,!1,null,"5f54e23a",null),f=d.exports,p={props:{emojiWidth:{type:String,default:"560px"},showAvatar:{type:Boolean,default:!0},avatar:{type:String,default:""},placeholder:{type:String,default:"在此输入评论内容..."},minRows:{type:Number,default:4},maxRows:{type:Number,default:8},commentNum:{type:Number,default:2},authorId:{type:Number,default:1},label:{type:String,default:"作者"},commentList:{type:Array,default:function(){return[{id:1,commentUser:{id:1,nickName:"罗帷",avatar:""},content:"很少有小姐姐喜欢看历史吧",createDate:"2019-9-23 17:36:02",childrenList:[{id:2,commentUser:{id:2,nickName:"坏菠萝",avatar:""},targetUser:{id:1,nickName:"罗帷"},content:"女拳警告！",createDate:"2019-9-23 17:45:26"}]}]}},commentWidth:{type:String,default:"80%"}},data:function(){return{publicPath:"",replyMap:[],buttonMap:[],pBodyMap:[],textareaMap:[],OwOlist:[{title:"微笑",url:"weixiao.gif"},{title:"嘻嘻",url:"xixi.gif"},{title:"哈哈",url:"haha.gif"},{title:"可爱",url:"keai.gif"},{title:"可怜",url:"kelian.gif"},{title:"挖鼻",url:"wabi.gif"},{title:"吃惊",url:"chijing.gif"},{title:"害羞",url:"haixiu.gif"},{title:"挤眼",url:"jiyan.gif"},{title:"闭嘴",url:"bizui.gif"},{title:"鄙视",url:"bishi.gif"},{title:"爱你",url:"aini.gif"},{title:"泪",url:"lei.gif"},{title:"偷笑",url:"touxiao.gif"},{title:"亲亲",url:"qinqin.gif"},{title:"生病",url:"shengbing.gif"},{title:"太开心",url:"taikaixin.gif"},{title:"白眼",url:"baiyan.gif"},{title:"右哼哼",url:"youhengheng.gif"},{title:"左哼哼",url:"zuohengheng.gif"},{title:"嘘",url:"xu.gif"},{title:"衰",url:"shuai.gif"},{title:"吐",url:"tu.gif"},{title:"哈欠",url:"haqian.gif"},{title:"抱抱",url:"baobao.gif"},{title:"怒",url:"nu.gif"},{title:"疑问",url:"yiwen.gif"},{title:"馋嘴",url:"chanzui.gif"},{title:"拜拜",url:"baibai.gif"},{title:"思考",url:"sikao.gif"},{title:"汗",url:"han.gif"},{title:"困",url:"kun.gif"},{title:"睡",url:"shui.gif"},{title:"钱",url:"qian.gif"},{title:"失望",url:"shiwang.gif"},{title:"酷",url:"ku.gif"},{title:"色",url:"se.gif"},{title:"哼",url:"heng.gif"},{title:"鼓掌",url:"guzhang.gif"},{title:"晕",url:"yun.gif"},{title:"悲伤",url:"beishang.gif"},{title:"抓狂",url:"zhuakuang.gif"},{title:"黑线",url:"heixian.gif"},{title:"阴险",url:"yinxian.gif"},{title:"怒骂",url:"numa.gif"},{title:"互粉",url:"hufen.gif"},{title:"书呆子",url:"shudaizi.gif"},{title:"愤怒",url:"fennu.gif"},{title:"感冒",url:"ganmao.gif"},{title:"心",url:"xin.gif"},{title:"伤心",url:"shangxin.gif"},{title:"猪",url:"zhu.gif"},{title:"熊猫",url:"xiongmao.gif"},{title:"兔子",url:"tuzi.gif"},{title:"喔克",url:"ok.gif"},{title:"耶",url:"ye.gif"},{title:"棒棒",url:"good.gif"},{title:"不",url:"no.gif"},{title:"赞",url:"zan.gif"},{title:"来",url:"lai.gif"},{title:"弱",url:"ruo.gif"},{title:"草泥马",url:"caonima.gif"},{title:"神马",url:"shenma.gif"},{title:"囧",url:"jiong.gif"},{title:"浮云",url:"fuyun.gif"},{title:"给力",url:"geili.gif"},{title:"围观",url:"weiguan.gif"},{title:"威武",url:"weiwu.gif"},{title:"话筒",url:"huatong.gif"},{title:"蜡烛",url:"lazhu.gif"},{title:"蛋糕",url:"dangao.gif"},{title:"发红包",url:"fahongbao.gif"}]}},components:{avatar:f},methods:{showButton:function(t){this.$set(this.buttonMap,t,!0),this.pBodyStatus(t)},cancel:function(t){this.$set(this.buttonMap,t,!1),0!==t&&this.$set(this.replyMap,t,!1)},doSend:function(){this.$emit("doSend",this.textareaMap[0]),this.$set(this.textareaMap,0,"")},doChidSend:function(t,i,e){this.$emit("doChidSend",this.textareaMap[t],i,e),this.$set(this.textareaMap,t,"")},choseEmoji:function(t,i){var e="";this.textareaMap[t]||this.$set(this.textareaMap,t,""),e=this.textareaMap[t]+="["+i+"]",this.$set(this.textareaMap,t,e)},analyzeEmoji:function(t){var i=/\[[\u4e00-\u9fa5]+\]/g,e=/\[[\u4e00-\u9fa5]+\]/,a=t.match(i),s=t;if(a)for(var l=0;l<a.length;l++){for(var n=0;n<this.OwOlist.length;n++)if("["+this.OwOlist[n].title+"]"==a[l]){var r=this.OwOlist[n].url;break}var o=publicPath+"/images/face/"+r,c="<img src='"+o+"'/>";s=s.replace(e,c)}return s},doReply:function(t){this.$set(this.replyMap,t,!0),console.log(this.replyMap[t])},pBodyStatus:function(t){this.$set(this.pBodyMap,t,!this.pBodyMap[t])}}},m=p,h=(e("5705"),Object(u["a"])(m,s,l,!1,null,"74e83efe",null)),g=h.exports,v=(e("10cb"),e("450d"),e("f3ad")),b=e.n(v);a["default"].use(b.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(g)}}).$mount("#app")},5705:function(t,i,e){"use strict";var a=e("1786"),s=e.n(a);s.a},"85e3":function(t,i,e){"use strict";var a=e("2eba"),s=e.n(a);s.a}});
//# sourceMappingURL=app.9c715862.js.map