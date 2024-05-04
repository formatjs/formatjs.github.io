"use strict";
exports.id = 408;
exports.ids = [408];
exports.modules = {

/***/ 3408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   count: () => (/* binding */ count),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   createDocumentsStore: () => (/* binding */ createDocumentsStore),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getAll: () => (/* binding */ getAll),
/* harmony export */   getMultiple: () => (/* binding */ getMultiple),
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4033);

async function create(_, sharedInternalDocumentStore) {
    return {
        sharedInternalDocumentStore,
        docs: {},
        count: 0
    };
}
async function get(store, id) {
    const internalId = (0,_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(store.sharedInternalDocumentStore, id);
    return store.docs[internalId];
}
async function getMultiple(store, ids) {
    const idsLength = ids.length;
    const found = Array.from({
        length: idsLength
    });
    for(let i = 0; i < idsLength; i++){
        const internalId = (0,_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(store.sharedInternalDocumentStore, ids[i]);
        found[i] = store.docs[internalId];
    }
    return found;
}
async function getAll(store) {
    return store.docs;
}
async function store(store, id, doc) {
    const internalId = (0,_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(store.sharedInternalDocumentStore, id);
    if (typeof store.docs[internalId] !== 'undefined') {
        return false;
    }
    store.docs[internalId] = doc;
    store.count++;
    return true;
}
async function remove(store, id) {
    const internalId = (0,_internal_document_id_store_js__WEBPACK_IMPORTED_MODULE_0__/* .getInternalDocumentId */ .HM)(store.sharedInternalDocumentStore, id);
    if (typeof store.docs[internalId] === 'undefined') {
        return false;
    }
    delete store.docs[internalId];
    store.count--;
    return true;
}
async function count(store) {
    return store.count;
}
async function load(sharedInternalDocumentStore, raw) {
    const rawDocument = raw;
    return {
        docs: rawDocument.docs,
        count: rawDocument.count,
        sharedInternalDocumentStore
    };
}
async function save(store) {
    return {
        docs: store.docs,
        count: store.count
    };
}
async function createDocumentsStore() {
    return {
        create,
        get,
        getMultiple,
        getAll,
        store,
        remove,
        count,
        load,
        save
    };
}

//# sourceMappingURL=documents-store.js.map

/***/ })

};
;