(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{3491:function(i,e,o){"use strict";var a,r,n,t,s,b,w=o(6006);w&&"object"==typeof w&&"default"in w&&w.default;var d=o(3050),l=new d,u=l.getBrowser(),c=l.getCPU(),m=l.getDevice(),p=l.getEngine(),f=l.getOS(),h=l.getUA(),g={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},v={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},x={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},k=function(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return i||e},y=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},S=function(i){var e=y();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)},_=function(i){return i.type===g.Browser},T=function(i){return i.name===v.Edge},C=function(i){return"string"==typeof i&&-1!==i.indexOf("Edg/")},E=function(){return S("iPad")};m.type,g.SmartTv,m.type,g.Console,m.type,g.Wearable,m.type,g.Embedded,u.name===v.MobileSafari||E(),u.name,v.Chromium;var A=(a=m.type,a===g.Mobile||a===g.Tablet||E());m.type,g.Mobile,m.type===g.Tablet||E(),_(m),_(m),f.name,x.Android,f.name,x.WindowsPhone,f.name===x.IOS||E(),u.name,v.Chrome,u.name,v.Firefox,r=u.name,r===v.Safari||v.MobileSafari,u.name,v.Opera,n=u.name,n===v.InternetExplorer||v.Ie,k(f.version),k(f.name),k(u.version),k(u.major),k(u.name),k(m.vendor),k(m.model),k(p.name),k(p.version),k(h),T(u)||C(h),u.name,v.Yandex,k(m.type,"browser"),t=y(),t&&(/iPad|iPhone|iPod/.test(t.platform)||"MacIntel"===t.platform&&t.maxTouchPoints>1)&&window.MSStream,E(),S("iPhone"),S("iPod"),s=y(),b=s&&s.userAgent&&s.userAgent.toLowerCase(),"string"==typeof b&&/electron/.test(b),C(h),T(u)&&C(h),f.name,x.Windows,f.name,x.MAC_OS,u.name,v.MIUI,u.name,v.SamsungBrowser,e.tq=A},3050:function(i,e,o){var a;!function(r,n){"use strict";var t="function",s="undefined",b="object",w="string",d="major",l="model",u="name",c="type",m="vendor",p="version",f="architecture",h="console",g="mobile",v="tablet",x="smarttv",k="wearable",y="embedded",S="Amazon",_="Apple",T="ASUS",C="BlackBerry",E="Browser",A="Chrome",M="Firefox",O="Google",q="Huawei",N="Microsoft",P="Motorola",z="Opera",I="Samsung",U="Sharp",B="Sony",j="Xiaomi",W="Zebra",R="Facebook",D="Chromium OS",V="Mac OS",F=function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o},L=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},G=function(i,e){return typeof i===w&&-1!==H(e).indexOf(H(i))},H=function(i){return i.toLowerCase()},Z=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,350)},Y=function(i,e){for(var o,a,r,s,w,d,l=0;l<e.length&&!w;){var u=e[l],c=e[l+1];for(o=a=0;o<u.length&&!w&&u[o];)if(w=u[o++].exec(i))for(r=0;r<c.length;r++)d=w[++a],typeof(s=c[r])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,d):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=d?d.replace(s[1],s[2]):n:this[s[0]]=d?s[1].call(this,d,s[2]):n:4===s.length&&(this[s[0]]=d?s[3].call(this,d.replace(s[1],s[2])):n):this[s]=d||n;l+=2}},$=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(G(e[o][a],i))return"?"===o?n:o}else if(G(e[o],i))return"?"===o?n:o;return i},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,p],[/opios[\/ ]+([\w\.]+)/i],[p,[u,z+" Mini"]],[/\bopr\/([\w\.]+)/i],[p,[u,z]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[u,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[p,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+E],p],[/\bfocus\/([\w\.]+)/i],[p,[u,M+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[u,z+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[u,z+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[u,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[p,[u,M]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+E]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+E],p],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,R],p],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[u,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,A+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[u,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[p,$,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[u,M+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[u,p],[/(cobalt)\/([\w\.]+)/i],[u,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,H]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows (ce|mobile); ppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[f,/ower/,"",H]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[m,I],[c,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[m,I],[c,g]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[m,_],[c,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[m,_],[c,v]],[/(macintosh);/i],[l,[m,_]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[m,U],[c,g]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[m,q],[c,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[m,q],[c,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[m,j],[c,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[m,j],[c,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[m,"OPPO"],[c,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[m,"Vivo"],[c,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[l,[m,"Realme"],[c,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[m,P],[c,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[m,P],[c,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[m,"LG"],[c,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[m,"LG"],[c,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[m,"Lenovo"],[c,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[m,"Nokia"],[c,g]],[/(pixel c)\b/i],[l,[m,O],[c,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[m,O],[c,g]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[m,B],[c,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[m,B],[c,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[m,"OnePlus"],[c,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[m,S],[c,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[m,S],[c,g]],[/(playbook);[-\w\),; ]+(rim)/i],[l,m,[c,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[m,C],[c,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[m,T],[c,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[m,T],[c,g]],[/(nexus 9)/i],[l,[m,"HTC"],[c,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[l,/_/g," "],[c,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[m,"Acer"],[c,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[m,"Meizu"],[c,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,l,[c,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,l,[c,v]],[/(surface duo)/i],[l,[m,N],[c,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[m,"Fairphone"],[c,g]],[/(u304aa)/i],[l,[m,"AT&T"],[c,g]],[/\bsie-(\w*)/i],[l,[m,"Siemens"],[c,g]],[/\b(rct\w+) b/i],[l,[m,"RCA"],[c,v]],[/\b(venue[\d ]{2,7}) b/i],[l,[m,"Dell"],[c,v]],[/\b(q(?:mv|ta)\w+) b/i],[l,[m,"Verizon"],[c,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[m,"Barnes & Noble"],[c,v]],[/\b(tm\d{3}\w+) b/i],[l,[m,"NuVision"],[c,v]],[/\b(k88) b/i],[l,[m,"ZTE"],[c,v]],[/\b(nx\d{3}j) b/i],[l,[m,"ZTE"],[c,g]],[/\b(gen\d{3}) b.+49h/i],[l,[m,"Swiss"],[c,g]],[/\b(zur\d{3}) b/i],[l,[m,"Swiss"],[c,v]],[/\b((zeki)?tb.*\b) b/i],[l,[m,"Zeki"],[c,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],l,[c,v]],[/\b(ns-?\w{0,9}) b/i],[l,[m,"Insignia"],[c,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[m,"NextBook"],[c,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],l,[c,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],l,[c,g]],[/\b(ph-1) /i],[l,[m,"Essential"],[c,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[m,"Envizen"],[c,v]],[/\b(trio[-\w\. ]+) b/i],[l,[m,"MachSpeed"],[c,v]],[/\btu_(1491) b/i],[l,[m,"Rotor"],[c,v]],[/(shield[\w ]+) b/i],[l,[m,"Nvidia"],[c,v]],[/(sprint) (\w+)/i],[m,l,[c,g]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[m,N],[c,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[m,W],[c,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[m,W],[c,g]],[/smart-tv.+(samsung)/i],[m,[c,x]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[m,I],[c,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[c,x]],[/(apple) ?tv/i],[m,[l,_+" TV"],[c,x]],[/crkey/i],[[l,A+"cast"],[m,O],[c,x]],[/droid.+aft(\w)( bui|\))/i],[l,[m,S],[c,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[m,U],[c,x]],[/(bravia[\w ]+)( bui|\))/i],[l,[m,B],[c,x]],[/(mitv-\w{5}) bui/i],[l,[m,j],[c,x]],[/Hbbtv.*(technisat) (.*);/i],[m,l,[c,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,Z],[l,Z],[c,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[c,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,l,[c,h]],[/droid.+; (shield) bui/i],[l,[m,"Nvidia"],[c,h]],[/(playstation [345portablevi]+)/i],[l,[m,B],[c,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[m,N],[c,h]],[/((pebble))app/i],[m,l,[c,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[m,_],[c,k]],[/droid.+; (glass) \d/i],[l,[m,O],[c,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[m,W],[c,k]],[/(quest( 2| pro)?)/i],[l,[m,R],[c,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[c,y]],[/(aeobc)\b/i],[l,[m,S],[c,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[l,[c,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[c,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[c,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[c,g]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[p,$,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[p,$,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,V],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,p],[/\(bb(10);/i],[p,[u,C]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[u,M+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[u,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,D],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,p],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,p]]},Q=function(i,e){if(typeof i===b&&(e=i,i=n),!(this instanceof Q))return new Q(i,e).getResult();var o=typeof r!==s&&r.navigator?r.navigator:n,a=i||(o&&o.userAgent?o.userAgent:""),h=o&&o.userAgentData?o.userAgentData:n,x=e?F(K,e):K,k=o&&o.userAgent==a;return this.getBrowser=function(){var i,e={};return e[u]=n,e[p]=n,Y.call(e,a,x.browser),e[d]=typeof(i=e[p])===w?i.replace(/[^\d\.]/g,"").split(".")[0]:n,k&&o&&o.brave&&typeof o.brave.isBrave==t&&(e[u]="Brave"),e},this.getCPU=function(){var i={};return i[f]=n,Y.call(i,a,x.cpu),i},this.getDevice=function(){var i={};return i[m]=n,i[l]=n,i[c]=n,Y.call(i,a,x.device),k&&!i[c]&&h&&h.mobile&&(i[c]=g),k&&"Macintosh"==i[l]&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(i[l]="iPad",i[c]=v),i},this.getEngine=function(){var i={};return i[u]=n,i[p]=n,Y.call(i,a,x.engine),i},this.getOS=function(){var i={};return i[u]=n,i[p]=n,Y.call(i,a,x.os),k&&!i[u]&&h&&"Unknown"!=h.platform&&(i[u]=h.platform.replace(/chrome os/i,D).replace(/macos/i,V)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return a},this.setUA=function(i){return a=typeof i===w&&i.length>350?Z(i,350):i,this},this.setUA(a),this};Q.VERSION="1.0.35",Q.BROWSER=L([u,p,d]),Q.CPU=L([f]),Q.DEVICE=L([l,m,c,h,g,x,v,k,y]),Q.ENGINE=Q.OS=L([u,p]),typeof e!==s?(i.exports&&(e=i.exports=Q),e.UAParser=Q):o.amdO?(a=(function(){return Q}).call(e,o,e,i),n!==a&&(i.exports=a)):typeof r!==s&&(r.UAParser=Q);var J=typeof r!==s&&(r.jQuery||r.Zepto);if(J&&!J.ua){var ii=new Q;J.ua=ii.getResult(),J.ua.get=function(){return ii.getUA()},J.ua.set=function(i){ii.setUA(i);var e=ii.getResult();for(var o in e)J.ua[o]=e[o]}}}("object"==typeof window?window:this)}}]);