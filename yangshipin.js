/******************************
🧚🏻‍♂️项目名称：央视频 
🧚🏻‍♂️脚本作者：ios151
🧚🏻‍♂️特别说明：公益项目请勿盗用
🧚🏻‍♂️软件版本: 20240801最新版本
🧚🏻‍♂️注意事项：仅供学习 请勿传播售卖
***************************

[rewrite_local]

^http:\/\/(liveinfo|bkliveinfo|playvv)\.ysp\.cctv\.cn\/(playvinfo\?.+|.*) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js

# 解锁[电视]内会员 如果登录提示错误的话 手动屏蔽下面这条
&guid=[\w-]+&app_version=[\d\.]+&spadseg=\d&userid=(\d*)? url 302 &guid=f066be2cdf1c4f4893eb818de454313a&app_version=3.0.0.23522&spadseg=3&userid=234090757

#^https:\/\/liveinfo\.ysp\.cctv\.cn\/ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
#^https:\/\/m\.yangshipin\.cn\/static\/\w/\w+\/index\.html$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
# > 央视频 去广告
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/.+\.json url reject-dict


[mitm]
hostname = *.ysp.cctv.cn, cdn.cmgadx.com

*******************************/
var iｉl='jsjiami.com.v7';const i1iliI=iii1II;function iii1II(_0x46a8bf,_0x27a2e6){const _0x2eadc4=Iii11l();return iii1II=function(_0x56fe41,_0x5ae54e){_0x56fe41=_0x56fe41-0x1e4;let _0x3612eb=_0x2eadc4[_0x56fe41];if(iii1II['gHtsOx']===undefined){var _0x194e56=function(_0x204371){const _0x866865='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x133927='',_0x15efea='';for(let _0x17c4d8=0x0,_0x3c4cd0,_0x50790d,_0x14aac2=0x0;_0x50790d=_0x204371['charAt'](_0x14aac2++);~_0x50790d&&(_0x3c4cd0=_0x17c4d8%0x4?_0x3c4cd0*0x40+_0x50790d:_0x50790d,_0x17c4d8++%0x4)?_0x133927+=String['fromCharCode'](0xff&_0x3c4cd0>>(-0x2*_0x17c4d8&0x6)):0x0){_0x50790d=_0x866865['indexOf'](_0x50790d);}for(let _0x512063=0x0,_0x24db84=_0x133927['length'];_0x512063<_0x24db84;_0x512063++){_0x15efea+='%'+('00'+_0x133927['charCodeAt'](_0x512063)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x15efea);};iii1II['OxFfyb']=_0x194e56,_0x46a8bf=arguments,iii1II['gHtsOx']=!![];}const _0x459b43=_0x2eadc4[0x0],_0x1649f1=_0x56fe41+_0x459b43,_0x4ca180=_0x46a8bf[_0x1649f1];return!_0x4ca180?(_0x3612eb=iii1II['OxFfyb'](_0x3612eb),_0x46a8bf[_0x1649f1]=_0x3612eb):_0x3612eb=_0x4ca180,_0x3612eb;},iii1II(_0x46a8bf,_0x27a2e6);}function Iii11l(){const I1iIii=(function(){return[iｉl,'ryGLjnYsCjTpSiPaOJKmSwil.KNconmq.gKvKV7b==','mtC4odK0mJfkA3PmzM0','AgvHzgvYCW','x3zPzgvVx3fXx3zLCNnPB249ms4Wo192AwrLB19XCv92zxjZAw9UpteUmdTFDMLKzw9FCxfFDMvYC2LVBJ0XlJa7x3zPzgvVx3fXx3zLCNnPB249ms4Wo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nPzgvdB2rLpsHUDwXSktTZAwrLq29Kzt0OBNvSBcK7C2LKzunVzgu9kg51BgWPo3nPzgvdB2rLpsHUDwXSktTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTYzwzYzxnOvg9Rzw49rtyWruzdm0u0nJKWnKqXrdGZney1rJa0otbgrtC5mee7CMvMCMvZAfrVA2vUpuu2mevgqZnfndy5mdzemuq4mZrgnuyWndKWrKu3otbbo3jLzNjLC2HuB2TLBJ1fnJbfrKmZrtq2ota2rdfeodm0rJvgmdq5mezfnZKWqtTYzwzYzxnOvg9Rzw49rtyWruzdm0u0nJKWnKqXrdGZney1rJa0otbgrtC5mee7B3bLBKLKpuu0mtiZqtyZqJiWquzeqtbboey5nJK2mKiYodzcrdDfo29Wzw5jzd1fndeYm0e2m0iYmefgreeWqtHgoty5nJjcmJG2qKq3rtTVCgvUswq9rtqXmJnbnJncmJbbrKrbmee4rJK2otyYqJi4nKjen0u7B3bLBKLKpuu0mtiZqtyZqJiWquzeqtbboey5nJK2mKiYodzcrdDfo3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vZC2LVBJ14nerTsgXzx0HuyJDooe5gDenovJvmmvb5zLfrmgLKBfC0EJbLDNDjuMvJo3z1C2vZC2LVBJ14nerTsgXzx0HuyJDooe5gDenovJvmmvb5zLfrmgLKBfC0EJbLDNDjuMvJo3z1C2vZC2LVBJ14nerTsgXzx0HuyJDooe5gDenovJvmmvb5zLfrmgLKBfC0EJbLDNDjuMvJo3z1C2vZC2LVBJ14nerTsgXzx0HuyJDooe5gDenovJvmmvb5zLfrmgLKBfC0EJbLDNDjuMvJo3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5','mtaYnZG4s05ouMDZ'].concat((function(){return['nJy2ndG3uLLkExvx','mtrzq0fiwfu','mZqYmZeYrLfTt0zX','mJa2otuYEez0tffW','mtC1B3bdwhrH','ntu2mtu5mg1LBMjnza'].concat((function(){return['odvICwPNufG','q29VA2LL','ndvxwePXAgW','mtjNuMnfsKG','otCZodzPsgXuCfq'];}()));}()));}());Iii11l=function(){return I1iIii;};return Iii11l();};(function(II11Ii,II11Il,IlI11,iIIIIl,II1Il,lilIlI,iIIIIi){return II11Ii=II11Ii>>0x9,lilIlI='hs',iIIIIi='hs',function(iii1I1,II1Ii,i1ii,I1iIl1,i1il){const i1l1lI=iii1II;I1iIl1='tfi',lilIlI=I1iIl1+lilIlI,i1il='up',iIIIIi+=i1il,lilIlI=i1ii(lilIlI),iIIIIi=i1ii(iIIIIi),i1ii=0x0;const lI1Il1=iii1I1();while(!![]&&--iIIIIl+II1Ii){try{I1iIl1=-parseInt(i1l1lI(0x1e4))/0x1+-parseInt(i1l1lI(0x1e5))/0x2*(parseInt(i1l1lI(0x1e7))/0x3)+-parseInt(i1l1lI(0x1f2))/0x4*(parseInt(i1l1lI(0x1ea))/0x5)+parseInt(i1l1lI(0x1ee))/0x6*(-parseInt(i1l1lI(0x1e8))/0x7)+parseInt(i1l1lI(0x1e6))/0x8*(parseInt(i1l1lI(0x1ec))/0x9)+parseInt(i1l1lI(0x1e9))/0xa+parseInt(i1l1lI(0x1ef))/0xb*(parseInt(i1l1lI(0x1ed))/0xc);}catch(lilIi1){I1iIl1=i1ii;}finally{i1il=lI1Il1[lilIlI]();if(II11Ii<=iIIIIl)i1ii?II1Il?I1iIl1=i1il:II1Il=i1il:i1ii=i1il;else{if(i1ii==II1Il['replace'](/[KnLCNqSJpPOGbVwyTrgYl=]/g,'')){if(I1iIl1===II1Ii){lI1Il1['un'+lilIlI](i1il);break;}lI1Il1[iIIIIi](i1il);}}}}}(IlI11,II11Il,function(IiilII,IliI1I,lI1Iii,i1li,li1II,IliI11,i1ll){return IliI1I='\x73\x70\x6c\x69\x74',IiilII=arguments[0x0],IiilII=IiilII[IliI1I](''),lI1Iii='\x72\x65\x76\x65\x72\x73\x65',IiilII=IiilII[lI1Iii]('\x76'),i1li='\x6a\x6f\x69\x6e',(0x17bf69,IiilII[i1li](''));});}(0x19400,0x62bc0,Iii11l,0xcc),Iii11l)&&(iｉl=0x227c);let headers=$request[i1iliI(0x1f0)];headers[i1iliI(0x1eb)]=i1iliI(0x1f1),$done({'headers':headers});var version_ = 'jsjiami.com.v7';
