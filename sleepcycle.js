/*
sleep cycle 6.23.42
登陆 购买取消 退后台 重新打开即可

[rewrite_local]
https://ch.sleepcycle.com/(useraccountstats|api/v1/subscription/get$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/sleepcycle.js

[MITM]
hostname = ch.sleepcycle.com

*/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxef4a2=["\x2F\x75\x73\x65\x72\x61\x63\x63\x6F\x75\x6E\x74\x73\x74\x61\x74\x73","\x2F\x61\x70\x69\x2F\x76\x31\x2F\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x2F\x67\x65\x74","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x75\x72\x6C","\x6F\x6B","\x6F\x6E\x6C\x69\x6E\x65\x62\x61\x63\x6B\x75\x70\x5F\x68\x5F\x31\x79","\x32\x30\x30\x30\x30\x30\x30\x31\x38\x38\x30\x39\x32\x36\x36\x36","\x31","\x30","\x56\x54\x6F\x31\x4E\x6A\x59\x34\x4E\x6A\x41\x77\x4D\x7A\x63\x33\x4F\x54\x41\x78\x4D\x44\x55\x32","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x6F\x6E\x6C\x69\x6E\x65\x2D\x62\x61\x63\x6B\x75\x70","\x70\x72\x65\x6D\x69\x75\x6D","\x73\x6D\x61\x72\x74\x2D\x61\x6C\x61\x72\x6D","\x73\x6C\x65\x65\x70\x2D\x61\x69\x64","\x61\x6E\x61\x6C\x79\x73\x69\x73","\x73\x6E\x6F\x72\x65","\x73\x6C\x65\x65\x70\x2D\x6E\x6F\x74\x65\x73","\x70\x72\x65\x6D\x69\x75\x6D\x2D\x73\x6F\x75\x6E\x64\x73","\x75\x73\x65\x72\x2D\x73\x6F\x75\x6E\x64\x73","\x77\x61\x6B\x65\x2D\x75\x70\x2D\x6D\x6F\x6F\x64","\x68\x65\x61\x72\x74\x2D\x72\x61\x74\x65","\x77\x65\x61\x74\x68\x65\x72","\x68\x65\x61\x6C\x74\x68\x2D\x6B\x69\x74","\x67\x6F\x6F\x67\x6C\x65\x2D\x66\x69\x74","\x73\x74\x61\x74\x69\x73\x74\x69\x63\x73","\x70\x68\x69\x6C\x69\x70\x73\x2D\x68\x75\x65","\x68\x6F\x6D\x65\x2D\x6B\x69\x74","\x77\x65\x65\x6B\x6C\x79\x2D\x72\x65\x70\x6F\x72\x74","\x61\x75\x74\x6F\x2D\x73\x6C\x65\x65\x70\x2D\x74\x72\x61\x63\x6B\x69\x6E\x67","\x73\x6C\x65\x65\x70\x2D\x74\x72\x61\x69\x6E\x69\x6E\x67","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const path1=__Oxef4a2[0x0];const path2=__Oxef4a2[0x1];let obj=JSON[__Oxef4a2[0x3]]($response[__Oxef4a2[0x2]]);if($request[__Oxef4a2[0x5]][__Oxef4a2[0x4]](path1)!=  -1){obj= {"\x73\x74\x61\x74\x75\x73":__Oxef4a2[0x6],"\x72\x65\x63\x65\x69\x70\x74":{"\x72\x65\x6E\x65\x77\x61\x6C\x5F\x73\x74\x61\x74\x65":false,"\x72\x65\x6E\x65\x77\x61\x6C\x5F\x69\x6E\x66\x6F":[{"\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64":__Oxef4a2[0x7],"\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x5F\x69\x64":__Oxef4a2[0x8],"\x65\x78\x70\x69\x72\x61\x74\x69\x6F\x6E\x5F\x69\x6E\x74\x65\x6E\x74":__Oxef4a2[0x9],"\x61\x75\x74\x6F\x5F\x72\x65\x6E\x65\x77\x5F\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64":__Oxef4a2[0x7],"\x61\x75\x74\x6F\x5F\x72\x65\x6E\x65\x77\x5F\x73\x74\x61\x74\x75\x73":__Oxef4a2[0xa],"\x69\x73\x5F\x69\x6E\x5F\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x72\x65\x74\x72\x79\x5F\x70\x65\x72\x69\x6F\x64":__Oxef4a2[0xa]}],"\x65\x73\x74\x69\x6D\x61\x74\x65\x64\x5F\x72\x65\x6E\x65\x77\x61\x6C":1666931474,"\x76\x61\x6C\x69\x64":true,"\x69\x6E\x5F\x62\x69\x6C\x6C\x69\x6E\x67\x5F\x72\x65\x74\x72\x79":false,"\x74\x69\x6D\x65\x73\x74\x61\x6D\x70":1666974908,"\x65\x78\x70\x69\x72\x65\x73":3668313874},"\x63\x72\x65\x61\x74\x65\x64":1666925570,"\x75\x69\x64":__Oxef4a2[0xb],"\x73\x65\x73\x73\x69\x6F\x6E\x73":{"\x73\x74\x61\x74\x75\x73":__Oxef4a2[0x6],"\x63\x72\x65\x61\x74\x65\x64":1666928567,"\x6D\x6F\x64\x69\x66\x69\x65\x64":1666928567,"\x73\x65\x73\x73\x69\x6F\x6E\x73":0}}};if($request[__Oxef4a2[0x5]][__Oxef4a2[0x4]](path2)!=  -1){obj[__Oxef4a2[0xc]]= {"\x70\x72\x6F\x64\x75\x63\x74\x5F\x69\x64":__Oxef4a2[0x7],"\x74\x72\x61\x6E\x73\x61\x63\x74\x69\x6F\x6E\x5F\x69\x64":__Oxef4a2[0x8],"\x63\x61\x6D\x70\x61\x69\x67\x6E":null,"\x66\x65\x61\x74\x75\x72\x65\x73\x5F\x72\x69\x63\x68":[{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0xd],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0xf],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x10],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x11],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x12],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x13],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x14],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x15],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x16],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x17],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x18],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x19],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1a],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1b],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1c],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1d],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1e],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x1f],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274},{"\x73\x6F\x75\x72\x63\x65":__Oxef4a2[0xc],"\x6E\x61\x6D\x65":__Oxef4a2[0x20],"\x73\x6F\x75\x72\x63\x65\x5F\x76\x61\x6C\x75\x65":__Oxef4a2[0xe],"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274}],"\x63\x61\x6D\x70\x61\x69\x67\x6E\x73":[],"\x70\x61\x63\x6B\x61\x67\x65\x5F\x69\x64":__Oxef4a2[0xe],"\x66\x65\x61\x74\x75\x72\x65\x73":[__Oxef4a2[0xd],__Oxef4a2[0xf],__Oxef4a2[0x10],__Oxef4a2[0x11],__Oxef4a2[0x12],__Oxef4a2[0x13],__Oxef4a2[0x14],__Oxef4a2[0x15],__Oxef4a2[0x16],__Oxef4a2[0x17],__Oxef4a2[0x18],__Oxef4a2[0x19],__Oxef4a2[0x1a],__Oxef4a2[0x1b],__Oxef4a2[0x1c],__Oxef4a2[0x1d],__Oxef4a2[0x1e],__Oxef4a2[0x1f],__Oxef4a2[0x20]],"\x74\x72\x69\x61\x6C":null,"\x65\x78\x70\x69\x72\x65\x5F\x64\x61\x74\x65":3666924274}};$done({body:JSON[__Oxef4a2[0x21]](obj)});;;(function(_0x96fcx4,_0x96fcx5,_0x96fcx6,_0x96fcx7,_0x96fcx8,_0x96fcx9){_0x96fcx9= __Oxef4a2[0x22];_0x96fcx7= function(_0x96fcxa){if( typeof alert!== _0x96fcx9){alert(_0x96fcxa)};if( typeof console!== _0x96fcx9){console[__Oxef4a2[0x23]](_0x96fcxa)}};_0x96fcx6= function(_0x96fcxb,_0x96fcx4){return _0x96fcxb+ _0x96fcx4};_0x96fcx8= _0x96fcx6(__Oxef4a2[0x24],_0x96fcx6(_0x96fcx6(__Oxef4a2[0x25],__Oxef4a2[0x26]),__Oxef4a2[0x27]));try{_0x96fcx4= __encode;if(!( typeof _0x96fcx4!== _0x96fcx9&& _0x96fcx4=== _0x96fcx6(__Oxef4a2[0x28],__Oxef4a2[0x29]))){_0x96fcx7(_0x96fcx8)}}catch(e){_0x96fcx7(_0x96fcx8)}})({})