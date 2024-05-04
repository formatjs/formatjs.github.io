"use strict";
exports.id = 524;
exports.ids = [524,167,260];
exports.modules = {

/***/ 3776:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ trackInsertion),
  _: () => (/* binding */ trackRemoval)
});

;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/types.js
const kInsertions = Symbol('orama.insertions');
const kRemovals = Symbol('orama.removals');

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/sync-blocking-checker.js
var _globalThis_process;

// Web platforms don't have process. React-Native doesn't have process.emitWarning.
const warn = ((_globalThis_process = globalThis.process) === null || _globalThis_process === void 0 ? void 0 : _globalThis_process.emitWarning) ?? function emitWarning(message, options) {
    console.warn(`[WARNING] [${options.code}] ${message}`);
};
function trackInsertion(orama) {
    if (typeof orama[kInsertions] !== 'number') {
        queueMicrotask(()=>{
            orama[kInsertions] = undefined;
        });
        orama[kInsertions] = 0;
    }
    if (orama[kInsertions] > 1000) {
        warn("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.", {
            code: 'ORAMA0001'
        });
        orama[kInsertions] = -1;
    } else if (orama[kInsertions] >= 0) {
        orama[kInsertions]++;
    }
}
function trackRemoval(orama) {
    if (typeof orama[kRemovals] !== 'number') {
        queueMicrotask(()=>{
            orama[kRemovals] = undefined;
        });
        orama[kRemovals] = 0;
    }
    if (orama[kRemovals] > 1000) {
        warn("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.", {
            code: 'ORAMA0002'
        });
        orama[kRemovals] = -1;
    } else if (orama[kRemovals] >= 0) {
        orama[kRemovals]++;
    }
}

//# sourceMappingURL=sync-blocking-checker.js.map

/***/ }),

/***/ 2167:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   innerInsertMultiple: () => (/* binding */ innerInsertMultiple),
/* harmony export */   insert: () => (/* binding */ insert),
/* harmony export */   insertMultiple: () => (/* binding */ insertMultiple)
/* harmony export */ });
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4442);
/* harmony import */ var _components_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6456);
/* harmony import */ var _components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3776);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1801);




async function insert(orama, doc, language, skipHooks) {
    const errorProperty = await orama.validateSchema(doc, orama.schema);
    if (errorProperty) {
        throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .T)('SCHEMA_VALIDATION_FAILURE', errorProperty);
    }
    return innerInsert(orama, doc, language, skipHooks);
}
const ENUM_TYPE = new Set([
    'enum',
    'enum[]'
]);
const STRING_NUMBER_TYPE = new Set([
    'string',
    'number'
]);
async function innerInsert(orama, doc, language, skipHooks) {
    const { index , docs  } = orama.data;
    const id = await orama.getDocumentIndexId(doc);
    if (typeof id !== 'string') {
        throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .T)('DOCUMENT_ID_MUST_BE_STRING', typeof id);
    }
    if (!await orama.documentsStore.store(docs, id, doc)) {
        throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .T)('DOCUMENT_ALREADY_EXISTS', id);
    }
    const docsCount = await orama.documentsStore.count(docs);
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .rf)(orama.beforeInsert, orama, id, doc);
    }
    const indexableProperties = await orama.index.getSearchableProperties(index);
    const indexablePropertiesWithTypes = await orama.index.getSearchablePropertiesWithTypes(index);
    const indexableValues = await orama.getDocumentProperties(doc, indexableProperties);
    for (const [key, value] of Object.entries(indexableValues)){
        if (typeof value === 'undefined') {
            continue;
        }
        const actualType = typeof value;
        const expectedType = indexablePropertiesWithTypes[key];
        if ((0,_components_js__WEBPACK_IMPORTED_MODULE_2__.isGeoPointType)(expectedType) && typeof value === 'object' && typeof value.lon === 'number' && typeof value.lat === 'number') {
            continue;
        }
        if ((0,_components_js__WEBPACK_IMPORTED_MODULE_2__.isVectorType)(expectedType) && Array.isArray(value)) {
            continue;
        }
        if ((0,_components_js__WEBPACK_IMPORTED_MODULE_2__.isArrayType)(expectedType) && Array.isArray(value)) {
            continue;
        }
        if (ENUM_TYPE.has(expectedType) && STRING_NUMBER_TYPE.has(actualType)) {
            continue;
        }
        if (actualType !== expectedType) {
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .T)('INVALID_DOCUMENT_PROPERTY', key, expectedType, actualType);
        }
    }
    for (const prop of indexableProperties){
        var _orama_index, _orama_index_beforeInsert, _orama_index1, _orama_index_afterInsert;
        const value = indexableValues[prop];
        if (typeof value === 'undefined') {
            continue;
        }
        const expectedType = indexablePropertiesWithTypes[prop];
        await ((_orama_index_beforeInsert = (_orama_index = orama.index).beforeInsert) === null || _orama_index_beforeInsert === void 0 ? void 0 : _orama_index_beforeInsert.call(_orama_index, orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount));
        await orama.index.insert(orama.index, orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount);
        await ((_orama_index_afterInsert = (_orama_index1 = orama.index).afterInsert) === null || _orama_index_afterInsert === void 0 ? void 0 : _orama_index_afterInsert.call(_orama_index1, orama.data.index, prop, id, value, expectedType, language, orama.tokenizer, docsCount));
    }
    const sortableProperties = await orama.sorter.getSortableProperties(orama.data.sorting);
    const sortablePropertiesWithTypes = await orama.sorter.getSortablePropertiesWithTypes(orama.data.sorting);
    const sortableValues = await orama.getDocumentProperties(doc, sortableProperties);
    for (const prop of sortableProperties){
        const value = sortableValues[prop];
        if (typeof value === 'undefined') {
            continue;
        }
        const expectedType = sortablePropertiesWithTypes[prop];
        await orama.sorter.insert(orama.data.sorting, prop, id, value, expectedType, language);
    }
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .rf)(orama.afterInsert, orama, id, doc);
    }
    (0,_components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_3__/* .trackInsertion */ .v)(orama);
    return id;
}
async function insertMultiple(orama, docs, batchSize, language, skipHooks, timeout) {
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .ZI)(orama.beforeInsertMultiple, orama, docs);
    }
    // Validate all documents before the insertion
    const docsLength = docs.length;
    const oramaSchema = orama.schema;
    for(let i = 0; i < docsLength; i++){
        const errorProperty = await orama.validateSchema(docs[i], oramaSchema);
        if (errorProperty) {
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .T)('SCHEMA_VALIDATION_FAILURE', errorProperty);
        }
    }
    return innerInsertMultiple(orama, docs, batchSize, language, skipHooks, timeout);
}
async function innerInsertMultiple(orama, docs, batchSize, language, skipHooks, timeout) {
    if (!batchSize) {
        batchSize = 1000;
    }
    timeout ??= 0;
    const ids = [];
    await new Promise((resolve, reject)=>{
        let i = 0;
        async function _insertMultiple() {
            const batch = docs.slice(i * batchSize, ++i * batchSize);
            if (!batch.length) {
                return resolve();
            }
            for (const doc of batch){
                try {
                    const id = await insert(orama, doc, language, skipHooks);
                    ids.push(id);
                } catch (err) {
                    reject(err);
                }
            }
            setTimeout(_insertMultiple, timeout);
        }
        setTimeout(_insertMultiple, timeout);
    });
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .ZI)(orama.afterInsertMultiple, orama, docs);
    }
    return ids;
}

//# sourceMappingURL=insert.js.map

/***/ }),

/***/ 4260:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeMultiple: () => (/* binding */ removeMultiple)
/* harmony export */ });
/* harmony import */ var _components_hooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6456);
/* harmony import */ var _components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4033);
/* harmony import */ var _components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3776);



async function remove(orama, id, language, skipHooks) {
    let result = true;
    const { index , docs  } = orama.data;
    const doc = await orama.documentsStore.get(docs, id);
    if (!doc) {
        return false;
    }
    const docId = (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocumentIdFromInternalId */ .K7)(orama.internalDocumentIDStore, (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(orama.internalDocumentIDStore, id));
    const docsCount = await orama.documentsStore.count(docs);
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .rf)(orama.beforeRemove, orama, docId);
    }
    const indexableProperties = await orama.index.getSearchableProperties(index);
    const indexablePropertiesWithTypes = await orama.index.getSearchablePropertiesWithTypes(index);
    const values = await orama.getDocumentProperties(doc, indexableProperties);
    for (const prop of indexableProperties){
        var _orama_index, _orama_index_beforeRemove, _orama_index1, _orama_index_afterRemove;
        const value = values[prop];
        // The document doesn't contain the key
        if (typeof value === 'undefined') {
            continue;
        }
        const schemaType = indexablePropertiesWithTypes[prop];
        await ((_orama_index_beforeRemove = (_orama_index = orama.index).beforeRemove) === null || _orama_index_beforeRemove === void 0 ? void 0 : _orama_index_beforeRemove.call(_orama_index, orama.data.index, prop, docId, value, schemaType, language, orama.tokenizer, docsCount));
        if (!await orama.index.remove(orama.index, orama.data.index, prop, id, value, schemaType, language, orama.tokenizer, docsCount)) {
            result = false;
        }
        await ((_orama_index_afterRemove = (_orama_index1 = orama.index).afterRemove) === null || _orama_index_afterRemove === void 0 ? void 0 : _orama_index_afterRemove.call(_orama_index1, orama.data.index, prop, docId, value, schemaType, language, orama.tokenizer, docsCount));
    }
    const sortableProperties = await orama.sorter.getSortableProperties(orama.data.sorting);
    const sortableValues = await orama.getDocumentProperties(doc, sortableProperties);
    for (const prop of sortableProperties){
        // The document doesn't contain the key
        if (typeof sortableValues[prop] === 'undefined') {
            continue;
        }
        await orama.sorter.remove(orama.data.sorting, prop, id);
    }
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runSingleHook */ .rf)(orama.afterRemove, orama, docId);
    }
    await orama.documentsStore.remove(orama.data.docs, id);
    (0,_components_sync_blocking_checker_js__WEBPACK_IMPORTED_MODULE_2__/* .trackRemoval */ ._)(orama);
    return result;
}
async function removeMultiple(orama, ids, batchSize, language, skipHooks) {
    let result = 0;
    if (!batchSize) {
        batchSize = 1000;
    }
    const docIdsForHooks = skipHooks ? [] : ids.map((id)=>(0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getDocumentIdFromInternalId */ .K7)(orama.internalDocumentIDStore, (0,_components_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(orama.internalDocumentIDStore, id)));
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .ZI)(orama.beforeRemoveMultiple, orama, docIdsForHooks);
    }
    await new Promise((resolve, reject)=>{
        let i = 0;
        async function _insertMultiple() {
            const batch = ids.slice(i * batchSize, ++i * batchSize);
            if (!batch.length) {
                return resolve();
            }
            for (const doc of batch){
                try {
                    if (await remove(orama, doc, language, skipHooks)) {
                        result++;
                    }
                } catch (err) {
                    reject(err);
                }
            }
            setTimeout(_insertMultiple, 0);
        }
        setTimeout(_insertMultiple, 0);
    });
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_1__/* .runMultipleHook */ .ZI)(orama.afterRemoveMultiple, orama, docIdsForHooks);
    }
    return result;
}

//# sourceMappingURL=remove.js.map

/***/ }),

/***/ 1524:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   updateMultiple: () => (/* binding */ updateMultiple)
/* harmony export */ });
/* harmony import */ var _components_hooks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6456);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1801);
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4260);




async function update(orama, id, doc, language, skipHooks) {
    if (!skipHooks && orama.beforeUpdate) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_0__/* .runSingleHook */ .rf)(orama.beforeUpdate, orama, id);
    }
    await (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__.remove)(orama, id, language, skipHooks);
    const newId = await (0,_insert_js__WEBPACK_IMPORTED_MODULE_2__.insert)(orama, doc, language, skipHooks);
    if (!skipHooks && orama.afterUpdate) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_0__/* .runSingleHook */ .rf)(orama.afterUpdate, orama, newId);
    }
    return newId;
}
async function updateMultiple(orama, ids, docs, batchSize, language, skipHooks) {
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_0__/* .runMultipleHook */ .ZI)(orama.beforeUpdateMultiple, orama, ids);
    }
    // Validate all documents before the insertion
    const docsLength = docs.length;
    for(let i = 0; i < docsLength; i++){
        const errorProperty = await orama.validateSchema(docs[i], orama.schema);
        if (errorProperty) {
            throw (0,_errors_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .T)('SCHEMA_VALIDATION_FAILURE', errorProperty);
        }
    }
    await (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__.removeMultiple)(orama, ids, batchSize, language, skipHooks);
    const newIds = await (0,_insert_js__WEBPACK_IMPORTED_MODULE_2__.innerInsertMultiple)(orama, docs, batchSize, language, skipHooks);
    if (!skipHooks) {
        await (0,_components_hooks_js__WEBPACK_IMPORTED_MODULE_0__/* .runMultipleHook */ .ZI)(orama.afterUpdateMultiple, orama, newIds);
    }
    return newIds;
}

//# sourceMappingURL=update.js.map

/***/ })

};
;