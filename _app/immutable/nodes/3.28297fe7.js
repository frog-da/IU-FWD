import{S as U,i as H,s as J,M as B,e as X,b as R,N as G,D as T,h as b,k as P,q as y,l as S,m as O,r as M,p as K,C as f,a as $,c as j,K as Z,n as Y,y as ee,z as te,A as ae,g as ne,d as re,B as ie}from"../chunks/index.316eca48.js";function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}function g(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){g(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||E(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var oe={};function ue(){return oe}function L(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function F(t,e){g(2,arguments);var a=d(t),n=d(e),r=a.getTime()-n.getTime();return r<0?-1:r>0?1:r}function se(t,e){g(2,arguments);var a=d(t),n=d(e),r=a.getFullYear()-n.getFullYear(),o=a.getMonth()-n.getMonth();return r*12+o}function le(t,e){return g(2,arguments),d(t).getTime()-d(e).getTime()}var q={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},ce="trunc";function de(t){return t?q[t]:q[ce]}function me(t){g(1,arguments);var e=d(t);return e.setHours(23,59,59,999),e}function fe(t){g(1,arguments);var e=d(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function he(t){g(1,arguments);var e=d(t);return me(e).getTime()===fe(e).getTime()}function ve(t,e){g(2,arguments);var a=d(t),n=d(e),r=F(a,n),o=Math.abs(se(a,n)),i;if(o<1)i=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-r*o);var l=F(a,n)===-r;he(d(t))&&o===1&&F(t,n)===1&&(l=!1),i=r*(o-Number(l))}return i===0?0:i}function ge(t,e,a){g(2,arguments);var n=le(t,e)/1e3;return de(a==null?void 0:a.roundingMethod)(n)}var pe={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},be=function(e,a,n){var r,o=pe[e];return typeof o=="string"?r=o:a===1?r=o.one:r=o.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const ye=be;function x(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth,n=t.formats[a]||t.formats[t.defaultWidth];return n}}var Me={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},we={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},De={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},_e={date:x({formats:Me,defaultWidth:"full"}),time:x({formats:we,defaultWidth:"full"}),dateTime:x({formats:De,defaultWidth:"full"})};const Pe=_e;var Se={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Te=function(e,a,n,r){return Se[e]};const ke=Te;function C(t){return function(e,a){var n=a!=null&&a.context?String(a.context):"standalone",r;if(n==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a!=null&&a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var l=t.defaultWidth,u=a!=null&&a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[l]}var s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}var We={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ne={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ce={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Ie={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Oe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Fe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Re=function(e,a){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},xe={ordinalNumber:Re,era:C({values:We,defaultWidth:"wide"}),quarter:C({values:Ne,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:C({values:Ce,defaultWidth:"wide"}),day:C({values:Ie,defaultWidth:"wide"}),dayPeriod:C({values:Oe,defaultWidth:"wide",formattingValues:Fe,defaultFormattingWidth:"wide"})};const Ae=xe;function I(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i=o[0],l=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?Xe(l,function(m){return m.test(i)}):Ee(l,function(m){return m.test(i)}),s;s=t.valueCallback?t.valueCallback(u):u,s=a.valueCallback?a.valueCallback(s):s;var h=e.slice(i.length);return{value:s,rest:h}}}function Ee(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function Xe(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}function $e(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var r=n[0],o=e.match(t.parsePattern);if(!o)return null;var i=t.valueCallback?t.valueCallback(o[0]):o[0];i=a.valueCallback?a.valueCallback(i):i;var l=e.slice(r.length);return{value:i,rest:l}}}var je=/^(\d+)(th|st|nd|rd)?/i,Ye=/\d+/i,Le={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},qe={any:[/^b/i,/^(a|c)/i]},Ve={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ze={any:[/1/i,/2/i,/3/i,/4/i]},Ue={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},He={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Je={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Qe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Be={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ge={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ke={ordinalNumber:$e({matchPattern:je,parsePattern:Ye,valueCallback:function(e){return parseInt(e,10)}}),era:I({matchPatterns:Le,defaultMatchWidth:"wide",parsePatterns:qe,defaultParseWidth:"any"}),quarter:I({matchPatterns:Ve,defaultMatchWidth:"wide",parsePatterns:ze,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:I({matchPatterns:Ue,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any"}),day:I({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),dayPeriod:I({matchPatterns:Be,defaultMatchWidth:"any",parsePatterns:Ge,defaultParseWidth:"any"})};const Ze=Ke;var et={code:"en-US",formatDistance:ye,formatLong:Pe,formatRelative:ke,localize:Ae,match:Ze,options:{weekStartsOn:0,firstWeekContainsDate:1}};const tt=et;function Q(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}function at(t){return Q({},t)}var V=1440,nt=2520,A=43200,rt=86400;function it(t,e,a){var n,r;g(2,arguments);var o=ue(),i=(n=(r=a==null?void 0:a.locale)!==null&&r!==void 0?r:o.locale)!==null&&n!==void 0?n:tt;if(!i.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=F(t,e);if(isNaN(l))throw new RangeError("Invalid time value");var u=Q(at(a),{addSuffix:!!(a!=null&&a.addSuffix),comparison:l}),s,h;l>0?(s=d(e),h=d(t)):(s=d(t),h=d(e));var m=ge(h,s),k=(L(h)-L(s))/1e3,c=Math.round((m-k)/60),p;if(c<2)return a!=null&&a.includeSeconds?m<5?i.formatDistance("lessThanXSeconds",5,u):m<10?i.formatDistance("lessThanXSeconds",10,u):m<20?i.formatDistance("lessThanXSeconds",20,u):m<40?i.formatDistance("halfAMinute",0,u):m<60?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",1,u):c===0?i.formatDistance("lessThanXMinutes",1,u):i.formatDistance("xMinutes",c,u);if(c<45)return i.formatDistance("xMinutes",c,u);if(c<90)return i.formatDistance("aboutXHours",1,u);if(c<V){var W=Math.round(c/60);return i.formatDistance("aboutXHours",W,u)}else{if(c<nt)return i.formatDistance("xDays",1,u);if(c<A){var N=Math.round(c/V);return i.formatDistance("xDays",N,u)}else if(c<rt)return p=Math.round(c/A),i.formatDistance("aboutXMonths",p,u)}if(p=ve(h,s),p<12){var w=Math.round(c/A);return i.formatDistance("xMonths",w,u)}else{var v=p%12,D=Math.floor(p/12);return v<3?i.formatDistance("aboutXYears",D,u):v<9?i.formatDistance("overXYears",D,u):i.formatDistance("almostXYears",D+1,u)}}function ot(t,e){return g(1,arguments),it(t,Date.now(),e)}function ut(t){let e,a=t[3].message+"",n;return{c(){e=P("p"),n=y(a),this.h()},l(r){e=S(r,"P",{style:!0});var o=O(e);n=M(o,a),o.forEach(b),this.h()},h(){K(e,"color","red")},m(r,o){R(r,e,o),f(e,n)},p:T,d(r){r&&b(e)}}}function st(t){let e,a,n=t[2].title+"",r,o,i,l,u,s,h,m=z(t[2]).toLocaleDateString()+"",k,c,p=ot(z(t[2]))+"",W,N;return{c(){e=P("div"),a=P("h2"),r=y(n),o=$(),i=P("img"),u=$(),s=P("div"),h=y("Uploaded: "),k=y(m),c=y(" ("),W=y(p),N=y(`
			ago)`),this.h()},l(w){e=S(w,"DIV",{});var v=O(e);a=S(v,"H2",{});var D=O(a);r=M(D,n),D.forEach(b),o=j(v),i=S(v,"IMG",{src:!0,alt:!0}),u=j(v),s=S(v,"DIV",{});var _=O(s);h=M(_,"Uploaded: "),k=M(_,m),c=M(_," ("),W=M(_,p),N=M(_,`
			ago)`),_.forEach(b),v.forEach(b),this.h()},h(){Z(i.src,l=t[2].img)||Y(i,"src",l),Y(i,"alt",t[2].alt)},m(w,v){R(w,e,v),f(e,a),f(a,r),f(e,o),f(e,i),f(e,u),f(e,s),f(s,h),f(s,k),f(s,c),f(s,W),f(s,N)},p:T,d(w){w&&b(e)}}}function lt(t){let e,a;return{c(){e=P("p"),a=y("...loading")},l(n){e=S(n,"P",{});var r=O(e);a=M(r,"...loading"),r.forEach(b)},m(n,r){R(n,e,r),f(e,a)},p:T,d(n){n&&b(e)}}}function ct(t){let e,a={ctx:t,current:null,token:null,hasCatch:!0,pending:lt,then:st,catch:ut,value:2,error:3};return B(t[0](),a),{c(){e=X(),a.block.c()},l(n){e=X(),a.block.l(n)},m(n,r){R(n,e,r),a.block.m(n,a.anchor=r),a.mount=()=>e.parentNode,a.anchor=e},p(n,[r]){t=n,G(a,t,r)},i:T,o:T,d(n){n&&b(e),a.block.d(n),a.token=null,a=null}}}function z(t){return new Date(parseInt(t.year),parseInt(t.month)-1,parseInt(t.day))}function dt(t,e,a){let{email:n}=e;async function r(){document.getElementById("comic");const i=await(await fetch("https://fwd.innopolis.app/api/hw2?"+new URLSearchParams([["email",n]]).toString())).json(),l=new URLSearchParams([["num",i.toString()]]);return(await fetch("https://getxkcd.vercel.app/api/comic?"+l.toString())).json()}return t.$$set=o=>{"email"in o&&a(1,n=o.email)},[r,n]}class mt extends U{constructor(e){super(),H(this,e,dt,ct,J,{email:1})}}function ft(t){let e,a;return e=new mt({props:{email:"d.tomilovskaia@innopolis.university"}}),{c(){ee(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,r){ae(e,n,r),a=!0},p:T,i(n){a||(ne(e.$$.fragment,n),a=!0)},o(n){re(e.$$.fragment,n),a=!1},d(n){ie(e,n)}}}class vt extends U{constructor(e){super(),H(this,e,null,ft,J,{})}}export{vt as component};
