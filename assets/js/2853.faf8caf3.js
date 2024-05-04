"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2853],{2853:(e,t,i)=>{i.r(t),i.d(t,{createTokenizer:()=>z,normalizeToken:()=>S});var s=i(1801);const n=192,o=383,l=[65,65,65,65,65,65,65,67,69,69,69,69,73,73,73,73,69,78,79,79,79,79,79,null,79,85,85,85,85,89,80,115,97,97,97,97,97,97,97,99,101,101,101,101,105,105,105,105,101,110,111,111,111,111,111,null,111,117,117,117,117,121,112,121,65,97,65,97,65,97,67,99,67,99,67,99,67,99,68,100,68,100,69,101,69,101,69,101,69,101,69,101,71,103,71,103,71,103,71,103,72,104,72,104,73,105,73,105,73,105,73,105,73,105,73,105,74,106,75,107,107,76,108,76,108,76,108,76,108,76,108,78,110,78,110,78,110,110,78,110,79,111,79,111,79,111,79,111,82,114,82,114,82,114,83,115,83,115,83,115,83,115,84,116,84,116,84,116,85,117,85,117,85,117,85,117,85,117,85,117,87,119,89,121,89,90,122,90,122,90,122,115];var a=i(3883);const r={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},c={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",p="[^aeiou][^aeiouy]*",f=u+"[aeiou]*",g="^("+p+")?"+f+p,m="^("+p+")?"+f+p+"("+f+")?$",h="^("+p+")?"+f+p+f+p,w="^("+p+")?"+u;function T(e){let t,i,s,n,o,l;if(e.length<3)return e;const a=e.substring(0,1);if("y"==a&&(e=a.toUpperCase()+e.substring(1)),s=/^(.+?)(ss|i)es$/,n=/^(.+?)([^s])s$/,s.test(e)?e=e.replace(s,"$1$2"):n.test(e)&&(e=e.replace(n,"$1$2")),s=/^(.+?)eed$/,n=/^(.+?)(ed|ing)$/,s.test(e)){const t=s.exec(e);s=new RegExp(g),s.test(t[1])&&(s=/.$/,e=e.replace(s,""))}else if(n.test(e)){t=n.exec(e)[1],n=new RegExp(w),n.test(t)&&(e=t,n=/(at|bl|iz)$/,o=new RegExp("([^aeiouylsz])\\1$"),l=new RegExp("^"+p+u+"[^aeiouwxy]$"),n.test(e)?e+="e":o.test(e)?(s=/.$/,e=e.replace(s,"")):l.test(e)&&(e+="e"))}if(s=/^(.+?)y$/,s.test(e)){const i=s.exec(e);t=null==i?void 0:i[1],s=new RegExp(w),t&&s.test(t)&&(e=t+"i")}if(s=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,s.test(e)){const n=s.exec(e);t=null==n?void 0:n[1],i=null==n?void 0:n[2],s=new RegExp(g),t&&s.test(t)&&(e=t+r[i])}if(s=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,s.test(e)){const n=s.exec(e);t=null==n?void 0:n[1],i=null==n?void 0:n[2],s=new RegExp(g),t&&s.test(t)&&(e=t+c[i])}if(s=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,n=/^(.+?)(s|t)(ion)$/,s.test(e)){const i=s.exec(e);t=null==i?void 0:i[1],s=new RegExp(h),t&&s.test(t)&&(e=t)}else if(n.test(e)){const i=n.exec(e);t=(null==i?void 0:i[1])??""+(null==i?void 0:i[2])??"",n=new RegExp(h),n.test(t)&&(e=t)}if(s=/^(.+?)e$/,s.test(e)){const i=s.exec(e);t=null==i?void 0:i[1],s=new RegExp(h),n=new RegExp(m),o=new RegExp("^"+p+u+"[^aeiouwxy]$"),t&&(s.test(t)||n.test(t)&&!o.test(t))&&(e=t)}return s=/ll$/,n=new RegExp(h),s.test(e)&&n.test(e)&&(s=/.$/,e=e.replace(s,"")),"y"==a&&(e=a.toLowerCase()+e.substring(1)),e}function S(e,t){var i;const s=`${this.language}:${e}:${t}`;return this.normalizationCache.has(s)?this.normalizationCache.get(s):(null===(i=this.stopWords)||void 0===i?void 0:i.includes(t))?(this.normalizationCache.set(s,""),""):(this.stemmer&&!this.stemmerSkipProperties.has(e)&&(t=this.stemmer(t)),t=function(e){const t=[];for(let s=0;s<e.length;s++)t[s]=(i=e.charCodeAt(s))<n||i>o?i:l[i-n]||i;var i;return String.fromCharCode(...t)}(t),this.normalizationCache.set(s,t),t)}function d(e,t,i){if(t&&t!==this.language)throw(0,s.T)("LANGUAGE_NOT_SUPPORTED",t);if("string"!=typeof e)return[e];let n;if(i&&this.tokenizeSkipProperties.has(i))n=[this.normalizeToken.bind(this,i??"")(e)];else{const t=a.zr[this.language];n=e.toLowerCase().split(t).map(this.normalizeToken.bind(this,i??"")).filter(Boolean)}const o=function(e){for(;""===e[e.length-1];)e.pop();for(;""===e[0];)e.shift();return e}(n);return this.allowDuplicates?o:Array.from(new Set(o))}async function z(e={}){if(e.language){if(!a.E7.includes(e.language))throw(0,s.T)("LANGUAGE_NOT_SUPPORTED",e.language)}else e.language="english";let t,i;if(e.stemming||e.stemmer&&!("stemming"in e))if(e.stemmer){if("function"!=typeof e.stemmer)throw(0,s.T)("INVALID_STEMMER_FUNCTION_TYPE");t=e.stemmer}else{if("english"!==e.language)throw(0,s.T)("MISSING_STEMMER",e.language);t=T}if(!1!==e.stopWords){if(i=[],Array.isArray(e.stopWords))i=e.stopWords;else if("function"==typeof e.stopWords)i=await e.stopWords(i);else if(e.stopWords)throw(0,s.T)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");if(!Array.isArray(i))throw(0,s.T)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");for(const e of i)if("string"!=typeof e)throw(0,s.T)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY")}const n={tokenize:d,language:e.language,stemmer:t,stemmerSkipProperties:new Set(e.stemmerSkipProperties?[e.stemmerSkipProperties].flat():[]),tokenizeSkipProperties:new Set(e.tokenizeSkipProperties?[e.tokenizeSkipProperties].flat():[]),stopWords:i,allowDuplicates:Boolean(e.allowDuplicates),normalizeToken:S,normalizationCache:new Map};return n.tokenize=d.bind(n),n.normalizeToken=S,n}}}]);