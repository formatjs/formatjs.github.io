"use strict";
exports.id = 853;
exports.ids = [853];
exports.modules = {

/***/ 2853:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createTokenizer: () => (/* binding */ createTokenizer),
  normalizeToken: () => (/* binding */ normalizeToken)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/errors.js
var errors = __webpack_require__(1801);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/tokenizer/diacritics.js
const DIACRITICS_CHARCODE_START = 192;
const DIACRITICS_CHARCODE_END = 383;
const CHARCODE_REPLACE_MAPPING = [
    65,
    65,
    65,
    65,
    65,
    65,
    65,
    67,
    69,
    69,
    69,
    69,
    73,
    73,
    73,
    73,
    69,
    78,
    79,
    79,
    79,
    79,
    79,
    null,
    79,
    85,
    85,
    85,
    85,
    89,
    80,
    115,
    97,
    97,
    97,
    97,
    97,
    97,
    97,
    99,
    101,
    101,
    101,
    101,
    105,
    105,
    105,
    105,
    101,
    110,
    111,
    111,
    111,
    111,
    111,
    null,
    111,
    117,
    117,
    117,
    117,
    121,
    112,
    121,
    65,
    97,
    65,
    97,
    65,
    97,
    67,
    99,
    67,
    99,
    67,
    99,
    67,
    99,
    68,
    100,
    68,
    100,
    69,
    101,
    69,
    101,
    69,
    101,
    69,
    101,
    69,
    101,
    71,
    103,
    71,
    103,
    71,
    103,
    71,
    103,
    72,
    104,
    72,
    104,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    73,
    105,
    74,
    106,
    75,
    107,
    107,
    76,
    108,
    76,
    108,
    76,
    108,
    76,
    108,
    76,
    108,
    78,
    110,
    78,
    110,
    78,
    110,
    110,
    78,
    110,
    79,
    111,
    79,
    111,
    79,
    111,
    79,
    111,
    82,
    114,
    82,
    114,
    82,
    114,
    83,
    115,
    83,
    115,
    83,
    115,
    83,
    115,
    84,
    116,
    84,
    116,
    84,
    116,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    85,
    117,
    87,
    119,
    89,
    121,
    89,
    90,
    122,
    90,
    122,
    90,
    122,
    115
];
function replaceChar(charCode) {
    if (charCode < DIACRITICS_CHARCODE_START || charCode > DIACRITICS_CHARCODE_END) return charCode;
    /* c8 ignore next  */ return CHARCODE_REPLACE_MAPPING[charCode - DIACRITICS_CHARCODE_START] || charCode;
}
function replaceDiacritics(str) {
    const stringCharCode = [];
    for(let idx = 0; idx < str.length; idx++){
        stringCharCode[idx] = replaceChar(str.charCodeAt(idx));
    }
    return String.fromCharCode(...stringCharCode);
}

//# sourceMappingURL=diacritics.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/tokenizer/languages.js
var languages = __webpack_require__(3883);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/tokenizer/english-stemmer.js
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const step2List = {
    ational: 'ate',
    tional: 'tion',
    enci: 'ence',
    anci: 'ance',
    izer: 'ize',
    bli: 'ble',
    alli: 'al',
    entli: 'ent',
    eli: 'e',
    ousli: 'ous',
    ization: 'ize',
    ation: 'ate',
    ator: 'ate',
    alism: 'al',
    iveness: 'ive',
    fulness: 'ful',
    ousness: 'ous',
    aliti: 'al',
    iviti: 'ive',
    biliti: 'ble',
    logi: 'log'
};
const step3List = {
    icate: 'ic',
    ative: '',
    alize: 'al',
    iciti: 'ic',
    ical: 'ic',
    ful: '',
    ness: ''
};
// Consonant
const c = '[^aeiou]';
// Vowel
const v = '[aeiouy]';
// Consonant sequence
const C = c + '[^aeiouy]*';
// Vowel sequence
const V = v + '[aeiou]*';
// [C]VC... is m>0
const mgr0 = '^(' + C + ')?' + V + C;
// [C]VC[V] is m=1
const meq1 = '^(' + C + ')?' + V + C + '(' + V + ')?$';
// [C]VCVC... is m>1
const mgr1 = '^(' + C + ')?' + V + C + V + C;
// vowel in stem
const s_v = '^(' + C + ')?' + v;
function english_stemmer_stemmer(w) {
    let stem;
    let suffix;
    let re;
    let re2;
    let re3;
    let re4;
    if (w.length < 3) {
        return w;
    }
    const firstch = w.substring(0, 1);
    if (firstch == 'y') {
        w = firstch.toUpperCase() + w.substring(1);
    }
    re = /^(.+?)(ss|i)es$/;
    re2 = /^(.+?)([^s])s$/;
    if (re.test(w)) {
        w = w.replace(re, '$1$2');
    } else if (re2.test(w)) {
        w = w.replace(re2, '$1$2');
    }
    re = /^(.+?)eed$/;
    re2 = /^(.+?)(ed|ing)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        re = new RegExp(mgr0);
        if (re.test(fp[1])) {
            re = /.$/;
            w = w.replace(re, '');
        }
    } else if (re2.test(w)) {
        const fp = re2.exec(w);
        stem = fp[1];
        re2 = new RegExp(s_v);
        if (re2.test(stem)) {
            w = stem;
            re2 = /(at|bl|iz)$/;
            re3 = new RegExp('([^aeiouylsz])\\1$');
            re4 = new RegExp('^' + C + v + '[^aeiouwxy]$');
            if (re2.test(w)) {
                w = w + 'e';
            } else if (re3.test(w)) {
                re = /.$/;
                w = w.replace(re, '');
            } else if (re4.test(w)) {
                w = w + 'e';
            }
        }
    }
    re = /^(.+?)y$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(s_v);
        if (stem && re.test(stem)) {
            w = stem + 'i';
        }
    }
    re = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        suffix = fp === null || fp === void 0 ? void 0 : fp[2];
        re = new RegExp(mgr0);
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step2List[suffix];
        }
    }
    re = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        suffix = fp === null || fp === void 0 ? void 0 : fp[2];
        re = new RegExp(mgr0);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (stem && re.test(stem)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w = stem + step3List[suffix];
        }
    }
    re = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
    re2 = /^(.+?)(s|t)(ion)$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(mgr1);
        if (stem && re.test(stem)) {
            w = stem;
        }
    } else if (re2.test(w)) {
        const fp = re2.exec(w);
        stem = (fp === null || fp === void 0 ? void 0 : fp[1]) ?? '' + (fp === null || fp === void 0 ? void 0 : fp[2]) ?? '';
        re2 = new RegExp(mgr1);
        if (re2.test(stem)) {
            w = stem;
        }
    }
    re = /^(.+?)e$/;
    if (re.test(w)) {
        const fp = re.exec(w);
        stem = fp === null || fp === void 0 ? void 0 : fp[1];
        re = new RegExp(mgr1);
        re2 = new RegExp(meq1);
        re3 = new RegExp('^' + C + v + '[^aeiouwxy]$');
        if (stem && (re.test(stem) || re2.test(stem) && !re3.test(stem))) {
            w = stem;
        }
    }
    re = /ll$/;
    re2 = new RegExp(mgr1);
    if (re.test(w) && re2.test(w)) {
        re = /.$/;
        w = w.replace(re, '');
    }
    if (firstch == 'y') {
        w = firstch.toLowerCase() + w.substring(1);
    }
    return w;
}

//# sourceMappingURL=english-stemmer.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/tokenizer/index.js




function normalizeToken(prop, token) {
    var _this_stopWords;
    const key = `${this.language}:${prop}:${token}`;
    if (this.normalizationCache.has(key)) {
        return this.normalizationCache.get(key);
    }
    // Remove stopwords if enabled
    if ((_this_stopWords = this.stopWords) === null || _this_stopWords === void 0 ? void 0 : _this_stopWords.includes(token)) {
        this.normalizationCache.set(key, '');
        return '';
    }
    // Apply stemming if enabled
    if (this.stemmer && !this.stemmerSkipProperties.has(prop)) {
        token = this.stemmer(token);
    }
    token = replaceDiacritics(token);
    this.normalizationCache.set(key, token);
    return token;
}
/* c8 ignore next 10 */ function trim(text) {
    while(text[text.length - 1] === ''){
        text.pop();
    }
    while(text[0] === ''){
        text.shift();
    }
    return text;
}
function tokenize(input, language, prop) {
    if (language && language !== this.language) {
        throw (0,errors/* createError */.T)('LANGUAGE_NOT_SUPPORTED', language);
    }
    /* c8 ignore next 3 */ if (typeof input !== 'string') {
        return [
            input
        ];
    }
    let tokens;
    if (prop && this.tokenizeSkipProperties.has(prop)) {
        tokens = [
            this.normalizeToken.bind(this, prop ?? '')(input)
        ];
    } else {
        const splitRule = languages/* SPLITTERS */.zr[this.language];
        tokens = input.toLowerCase().split(splitRule).map(this.normalizeToken.bind(this, prop ?? '')).filter(Boolean);
    }
    const trimTokens = trim(tokens);
    if (!this.allowDuplicates) {
        return Array.from(new Set(trimTokens));
    }
    return trimTokens;
}
async function createTokenizer(config = {}) {
    if (!config.language) {
        config.language = 'english';
    } else if (!languages/* SUPPORTED_LANGUAGES */.E7.includes(config.language)) {
        throw (0,errors/* createError */.T)('LANGUAGE_NOT_SUPPORTED', config.language);
    }
    // Handle stemming - It is disabled by default
    let stemmer;
    if (config.stemming || config.stemmer && !('stemming' in config)) {
        if (config.stemmer) {
            if (typeof config.stemmer !== 'function') {
                throw (0,errors/* createError */.T)('INVALID_STEMMER_FUNCTION_TYPE');
            }
            stemmer = config.stemmer;
        } else {
            if (config.language === 'english') {
                stemmer = english_stemmer_stemmer;
            } else {
                throw (0,errors/* createError */.T)('MISSING_STEMMER', config.language);
            }
        }
    }
    // Handle stopwords
    let stopWords;
    if (config.stopWords !== false) {
        stopWords = [];
        if (Array.isArray(config.stopWords)) {
            stopWords = config.stopWords;
        } else if (typeof config.stopWords === 'function') {
            stopWords = await config.stopWords(stopWords);
        } else if (config.stopWords) {
            throw (0,errors/* createError */.T)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
        }
        // Make sure stopWords is just an array of strings
        if (!Array.isArray(stopWords)) {
            throw (0,errors/* createError */.T)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
        }
        for (const s of stopWords){
            if (typeof s !== 'string') {
                throw (0,errors/* createError */.T)('CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY');
            }
        }
    }
    // Create the tokenizer
    const tokenizer = {
        tokenize,
        language: config.language,
        stemmer,
        stemmerSkipProperties: new Set(config.stemmerSkipProperties ? [
            config.stemmerSkipProperties
        ].flat() : []),
        tokenizeSkipProperties: new Set(config.tokenizeSkipProperties ? [
            config.tokenizeSkipProperties
        ].flat() : []),
        stopWords,
        allowDuplicates: Boolean(config.allowDuplicates),
        normalizeToken,
        normalizationCache: new Map()
    };
    tokenizer.tokenize = tokenize.bind(tokenizer);
    tokenizer.normalizeToken = normalizeToken;
    return tokenizer;
}

//# sourceMappingURL=index.js.map

/***/ })

};
;