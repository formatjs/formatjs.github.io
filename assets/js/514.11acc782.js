"use strict";
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 5514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  calculateResultScores: () => (/* binding */ calculateResultScores),
  create: () => (/* binding */ components_create),
  createIndex: () => (/* binding */ createIndex),
  getSearchableProperties: () => (/* binding */ getSearchableProperties),
  getSearchablePropertiesWithTypes: () => (/* binding */ getSearchablePropertiesWithTypes),
  insert: () => (/* binding */ components_insert),
  insertDocumentScoreParameters: () => (/* binding */ insertDocumentScoreParameters),
  insertTokenScoreParameters: () => (/* binding */ insertTokenScoreParameters),
  load: () => (/* binding */ load),
  remove: () => (/* binding */ components_remove),
  removeDocumentScoreParameters: () => (/* binding */ removeDocumentScoreParameters),
  removeTokenScoreParameters: () => (/* binding */ removeTokenScoreParameters),
  save: () => (/* binding */ save),
  search: () => (/* binding */ search),
  searchByWhereClause: () => (/* binding */ searchByWhereClause)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/errors.js
var errors = __webpack_require__(1801);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/utils.js
var utils = __webpack_require__(2758);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/trees/avl.js

function rotateLeft(node) {
    const right = node.r;
    node.r = right.l;
    right.l = node;
    node.h = Math.max(getHeight(node.l), getHeight(node.r)) + 1;
    right.h = Math.max(getHeight(right.l), getHeight(right.r)) + 1;
    return right;
}
function rotateRight(node) {
    const left = node.l;
    node.l = left.r;
    left.r = node;
    node.h = Math.max(getHeight(node.l), getHeight(node.r)) + 1;
    left.h = Math.max(getHeight(left.l), getHeight(left.r)) + 1;
    return left;
}
function contains(node, key) {
    return !!find(node, key);
}
function getSize(root) {
    let size = 0;
    const queue = [];
    if (root !== null) {
        queue.push(root.root);
    }
    while(queue.length > 0){
        const node = queue.shift();
        size++;
        if (node.l !== null) {
            queue.push(node.l);
        }
        if (node.r !== null) {
            queue.push(node.r);
        }
    }
    return size;
}
function isBalanced(root) {
    if (root === null) return true;
    const stack = [
        root.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (node != null) {
            const leftHeight = getHeight(node.l);
            const rightHeight = getHeight(node.r);
            const heightDiff = leftHeight - rightHeight;
            if (Math.abs(heightDiff) > 1) {
                return false;
            }
            if (node.l !== null) {
                stack.push(node.l);
            }
            if (node.r !== null) {
                stack.push(node.r);
            }
        }
    }
    return true;
}
function rangeSearch(node, min, max) {
    const result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        if (min < node.k) {
            traverse(node.l);
        }
        if (node.k >= min && node.k <= max) {
            (0,utils/* safeArrayPush */.hT)(result, node.v);
        }
        if (max > node.k) {
            traverse(node.r);
        }
    }
    traverse(node.root);
    return result;
}
function greaterThan(node, key, inclusive = false) {
    const result = [];
    if (node === null) return result;
    const stack = [
        node.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (!node) {
            continue;
        }
        if (inclusive && node.k >= key) {
            (0,utils/* safeArrayPush */.hT)(result, node.v);
        }
        if (!inclusive && node.k > key) {
            (0,utils/* safeArrayPush */.hT)(result, node.v);
        }
        stack.push(node.r);
        stack.push(node.l);
    }
    return result;
}
function lessThan(node, key, inclusive = false) {
    const result = [];
    if (node === null) return result;
    const stack = [
        node.root
    ];
    while(stack.length > 0){
        const node = stack.pop();
        if (!node) {
            continue;
        }
        if (inclusive && node.k <= key) {
            (0,utils/* safeArrayPush */.hT)(result, node.v);
        }
        if (!inclusive && node.k < key) {
            (0,utils/* safeArrayPush */.hT)(result, node.v);
        }
        stack.push(node.r);
        stack.push(node.l);
    }
    return result;
}
function getNodeByKey(node, key) {
    while(node !== null){
        if (key < node.k) {
            node = node.l;
        } else if (key > node.k) {
            node = node.r;
        } else {
            return node;
        }
    }
    return null;
}
function create(key, value) {
    return {
        root: {
            k: key,
            v: value,
            l: null,
            r: null,
            h: 0
        }
    };
}
function insert(rootNode, key, newValue) {
    function insertNode(node, key, newValue) {
        if (node === null) {
            return {
                k: key,
                v: newValue,
                l: null,
                r: null,
                h: 0
            };
        }
        if (key < node.k) {
            node.l = insertNode(node.l, key, newValue);
        } else if (key > node.k) {
            node.r = insertNode(node.r, key, newValue);
        } else {
            for (const value of newValue){
                node.v.push(value);
            }
            return node;
        }
        node.h = 1 + Math.max(getHeight(node.l), getHeight(node.r));
        const balanceFactor = getHeight(node.l) - getHeight(node.r);
        if (balanceFactor > 1 && key < node.l.k) {
            return rotateRight(node);
        }
        if (balanceFactor < -1 && key > node.r.k) {
            return rotateLeft(node);
        }
        if (balanceFactor > 1 && key > node.l.k) {
            node.l = rotateLeft(node.l);
            return rotateRight(node);
        }
        if (balanceFactor < -1 && key < node.r.k) {
            node.r = rotateRight(node.r);
            return rotateLeft(node);
        }
        return node;
    }
    rootNode.root = insertNode(rootNode.root, key, newValue);
}
function getHeight(node) {
    return node !== null ? node.h : -1;
}
function find(root, key) {
    const node = getNodeByKey(root.root, key);
    if (node === null) {
        return null;
    }
    return node.v;
}
function remove(rootNode, key) {
    if (rootNode === null || rootNode.root === null) {
        return;
    }
    let node = rootNode.root;
    let parentNode = null;
    while(node != null && node.k !== key){
        parentNode = node;
        if (key < node.k) {
            node = node.l;
        } else {
            node = node.r;
        }
    }
    if (node === null) {
        return;
    }
    const deleteNode = ()=>{
        if (node.l === null && node.r === null) {
            if (parentNode === null) {
                rootNode.root = null;
            } else {
                if (parentNode.l === node) {
                    parentNode.l = null;
                } else {
                    parentNode.r = null;
                }
            }
        } else if (node.l != null && node.r != null) {
            let minValueNode = node.r;
            let minValueParent = node;
            while(minValueNode.l != null){
                minValueParent = minValueNode;
                minValueNode = minValueNode.l;
            }
            node.k = minValueNode.k;
            if (minValueParent === node) {
                minValueParent.r = minValueNode.r;
            } else {
                minValueParent.l = minValueNode.r;
            }
        } else {
            const childNode = node.l != null ? node.l : node.r;
            if (parentNode === null) {
                rootNode.root = childNode;
            } else {
                if (parentNode.l === node) {
                    parentNode.l = childNode;
                } else {
                    parentNode.r = childNode;
                }
            }
        }
    };
    deleteNode();
}
function removeDocument(root, id, key) {
    const node = getNodeByKey(root.root, key);
    if (!node) {
        return;
    }
    if (node.v.length === 1) {
        remove(root, key);
        return;
    }
    node.v.splice(node.v.indexOf(id), 1);
}

//# sourceMappingURL=avl.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/trees/flat.js

function flat_create() {
    return {
        numberToDocumentId: new Map()
    };
}
function flat_insert(root, key, value) {
    if (root.numberToDocumentId.has(key)) {
        root.numberToDocumentId.get(key).push(value);
        return root;
    }
    root.numberToDocumentId.set(key, [
        value
    ]);
    return root;
}
function flat_find(root, key) {
    return root.numberToDocumentId.get(key) ?? null;
}
function flat_remove(root, key) {
    if (root != null) {
        root.numberToDocumentId.delete(key);
    }
    return root;
}
function flat_removeDocument(root, id, key) {
    var _root_numberToDocumentId_get, _root_numberToDocumentId_get1;
    root === null || root === void 0 ? void 0 : root.numberToDocumentId.set(key, ((_root_numberToDocumentId_get = root === null || root === void 0 ? void 0 : root.numberToDocumentId.get(key)) === null || _root_numberToDocumentId_get === void 0 ? void 0 : _root_numberToDocumentId_get.filter((v)=>v !== id)) ?? []);
    if (((_root_numberToDocumentId_get1 = root === null || root === void 0 ? void 0 : root.numberToDocumentId.get(key)) === null || _root_numberToDocumentId_get1 === void 0 ? void 0 : _root_numberToDocumentId_get1.length) === 0) {
        root === null || root === void 0 ? void 0 : root.numberToDocumentId.delete(key);
    }
}
function flat_contains(node, key) {
    return !(flat_find(node, key) == null);
}
function flat_getSize(root) {
    let size = 0;
    for (const [, value] of (root === null || root === void 0 ? void 0 : root.numberToDocumentId) ?? []){
        size += value.length;
    }
    return size;
}
function filter(root, operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
        throw new Error('Invalid operation');
    }
    const operationType = operationKeys[0];
    switch(operationType){
        case 'eq':
            {
                const value = operation[operationType];
                return root.numberToDocumentId.get(value) ?? [];
            }
        case 'in':
            {
                const value = operation[operationType];
                const result = [];
                for (const v of value){
                    const ids = root.numberToDocumentId.get(v);
                    if (ids != null) {
                        (0,utils/* safeArrayPush */.hT)(result, ids);
                    }
                }
                return result;
            }
        case 'nin':
            {
                const value = operation[operationType];
                const result = [];
                const keys = root.numberToDocumentId.keys();
                for (const key of keys){
                    if (value.includes(key)) {
                        continue;
                    }
                    const ids = root.numberToDocumentId.get(key);
                    if (ids != null) {
                        (0,utils/* safeArrayPush */.hT)(result, ids);
                    }
                }
                return result;
            }
    }
    throw new Error('Invalid operation');
}
function filterArr(root, operation) {
    const operationKeys = Object.keys(operation);
    if (operationKeys.length !== 1) {
        throw new Error('Invalid operation');
    }
    const operationType = operationKeys[0];
    switch(operationType){
        case 'containsAll':
            {
                const values = operation[operationType];
                const ids = values.map((value)=>root.numberToDocumentId.get(value) ?? []);
                return (0,utils/* intersect */.wf)(ids);
            }
    }
    throw new Error('Invalid operation');
}

//# sourceMappingURL=flat.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/levenshtein.js
var levenshtein = __webpack_require__(5182);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/trees/radix.js


class Node {
    constructor(key, subWord, end){
        this.k = key;
        this.s = subWord;
        this.e = end;
    }
    // Node children
    c = {};
    // Node documents
    d = [];
    // Node word
    w = '';
    toJSON() {
        return {
            w: this.w,
            s: this.s,
            c: this.c,
            d: this.d,
            e: this.e
        };
    }
}
function updateParent(node, parent) {
    node.w = parent.w + node.s;
}
function addDocument(node, docID) {
    node.d.push(docID);
}
function radix_removeDocument(node, docID) {
    const index = node.d.indexOf(docID);
    /* c8 ignore next 3 */ if (index === -1) {
        return false;
    }
    node.d.splice(index, 1);
    return true;
}
function findAllWords(node, output, term, exact, tolerance) {
    if (node.e) {
        const { w , d: docIDs  } = node;
        if (exact && w !== term) {
            return {};
        }
        // always check in own property to prevent access to inherited properties
        // fix https://github.com/OramaSearch/orama/issues/137
        if ((0,utils/* getOwnProperty */.eg)(output, w) == null) {
            if (tolerance) {
                // computing the absolute difference of letters between the term and the word
                const difference = Math.abs(term.length - w.length);
                // if the tolerance is set, check whether the edit distance is within tolerance.
                // In that case, we don't need to add the word to the output
                if (difference <= tolerance && (0,levenshtein/* syncBoundedLevenshtein */.j9)(term, w, tolerance).isBounded) {
                    output[w] = [];
                }
            } else {
                // prevent default tolerance not set
                output[w] = [];
            }
        }
        // check if _output[w] exists and then add the doc to it
        // always check in own property to prevent access to inherited properties
        // fix https://github.com/OramaSearch/orama/issues/137
        if ((0,utils/* getOwnProperty */.eg)(output, w) != null && docIDs.length > 0) {
            const docs = new Set(output[w]);
            const docIDsLength = docIDs.length;
            for(let i = 0; i < docIDsLength; i++){
                docs.add(docIDs[i]);
            }
            output[w] = Array.from(docs);
        }
    }
    // recursively search the children
    for (const character of Object.keys(node.c)){
        findAllWords(node.c[character], output, term, exact, tolerance);
    }
    return output;
}
function getCommonPrefix(a, b) {
    let commonPrefix = '';
    const len = Math.min(a.length, b.length);
    for(let i = 0; i < len; i++){
        if (a[i] !== b[i]) {
            return commonPrefix;
        }
        commonPrefix += a[i];
    }
    return commonPrefix;
}
function radix_create(end = false, subWord = '', key = '') {
    return new Node(key, subWord, end);
}
function radix_insert(root, word, docId) {
    const wordLength = word.length;
    for(let i = 0; i < wordLength; i++){
        const currentCharacter = word[i];
        const wordAtIndex = word.substring(i);
        const rootChildCurrentChar = root.c[currentCharacter];
        if (rootChildCurrentChar) {
            const edgeLabel = rootChildCurrentChar.s;
            const edgeLabelLength = edgeLabel.length;
            const commonPrefix = getCommonPrefix(edgeLabel, wordAtIndex);
            const commonPrefixLength = commonPrefix.length;
            // the wordAtIndex matches exactly with an existing child node
            if (edgeLabel === wordAtIndex) {
                addDocument(rootChildCurrentChar, docId);
                rootChildCurrentChar.e = true;
                return;
            }
            const edgeLabelAtCommonPrefix = edgeLabel[commonPrefixLength];
            // the wordAtIndex is completely contained in the child node subword
            if (commonPrefixLength < edgeLabelLength && commonPrefixLength === wordAtIndex.length) {
                const newNode = radix_create(true, wordAtIndex, currentCharacter) // Create a new node with end set to true
                ;
                newNode.c[edgeLabelAtCommonPrefix] = rootChildCurrentChar;
                const newNodeChild = newNode.c[edgeLabelAtCommonPrefix];
                newNodeChild.s = edgeLabel.substring(commonPrefixLength);
                newNodeChild.k = edgeLabelAtCommonPrefix;
                root.c[currentCharacter] = newNode;
                updateParent(newNode, root);
                updateParent(newNodeChild, newNode);
                addDocument(newNode, docId);
                return;
            }
            // the wordAtIndex is partially contained in the child node subword
            if (commonPrefixLength < edgeLabelLength && commonPrefixLength < wordAtIndex.length) {
                const inbetweenNode = radix_create(false, commonPrefix, currentCharacter);
                inbetweenNode.c[edgeLabelAtCommonPrefix] = rootChildCurrentChar;
                root.c[currentCharacter] = inbetweenNode;
                const inbetweenNodeChild = inbetweenNode.c[edgeLabelAtCommonPrefix];
                inbetweenNodeChild.s = edgeLabel.substring(commonPrefixLength);
                inbetweenNodeChild.k = edgeLabelAtCommonPrefix;
                const wordAtCommonPrefix = wordAtIndex[commonPrefixLength];
                const newNode = radix_create(true, word.substring(i + commonPrefixLength), wordAtCommonPrefix);
                addDocument(newNode, docId);
                inbetweenNode.c[wordAtCommonPrefix] = newNode;
                updateParent(inbetweenNode, root);
                updateParent(newNode, inbetweenNode);
                updateParent(inbetweenNodeChild, inbetweenNode);
                return;
            }
            // skip to the next divergent character
            i += edgeLabelLength - 1;
            // navigate in the child node
            root = rootChildCurrentChar;
        } else {
            // if the node for the current character doesn't exist create new node
            const newNode = radix_create(true, wordAtIndex, currentCharacter);
            addDocument(newNode, docId);
            root.c[currentCharacter] = newNode;
            updateParent(newNode, root);
            return;
        }
    }
}
function _findLevenshtein(node, term, index, tolerance, originalTolerance, output) {
    if (tolerance < 0) {
        return;
    }
    if (node.w.startsWith(term)) {
        findAllWords(node, output, term, false, 0);
        return;
    }
    if (node.e) {
        const { w , d: docIDs  } = node;
        if (w) {
            if ((0,levenshtein/* syncBoundedLevenshtein */.j9)(term, w, originalTolerance).isBounded) {
                output[w] = [];
            }
            if ((0,utils/* getOwnProperty */.eg)(output, w) != null && docIDs.length > 0) {
                const docs = new Set(output[w]);
                const docIDsLength = docIDs.length;
                for(let i = 0; i < docIDsLength; i++){
                    docs.add(docIDs[i]);
                }
                output[w] = Array.from(docs);
            }
        }
    }
    if (index >= term.length) {
        return;
    }
    // Match current character without consuming tolerance
    if (term[index] in node.c) {
        _findLevenshtein(node.c[term[index]], term, index + 1, tolerance, originalTolerance, output);
    }
    // If tolerance is still available, consider other branches:
    // 1. Deletion (skip the current term character)
    _findLevenshtein(node, term, index + 1, tolerance - 1, originalTolerance, output);
    // 2. Insertion (skip the current tree node character)
    for(const character in node.c){
        _findLevenshtein(node.c[character], term, index, tolerance - 1, originalTolerance, output);
    }
    // 3. Substitution (skip both current term character and tree node character)
    for(const character in node.c){
        if (character !== term[index]) {
            _findLevenshtein(node.c[character], term, index + 1, tolerance - 1, originalTolerance, output);
        }
    }
}
function radix_find(root, { term , exact , tolerance  }) {
    // Find the closest node to the term
    // Use `if` condition because tolerance `0` is supposed to match only prefix.
    // (allows infinite insertions at end, which is against normal levenshtein logic).
    // (new _findLevenshtein only handles not exact and tolerance>0 condition)
    if (tolerance && !exact) {
        const output = {};
        tolerance = tolerance || 0;
        _findLevenshtein(root, term, 0, tolerance || 0, tolerance, output);
        return output;
    } else {
        const termLength = term.length;
        for(let i = 0; i < termLength; i++){
            const character = term[i];
            if (character in root.c) {
                const rootChildCurrentChar = root.c[character];
                const edgeLabel = rootChildCurrentChar.s;
                const termSubstring = term.substring(i);
                // find the common prefix between two words ex: prime and primate = prim
                const commonPrefix = getCommonPrefix(edgeLabel, termSubstring);
                const commonPrefixLength = commonPrefix.length;
                // if the common prefix length is equal to edgeLabel length (the node subword) it means they are a match
                // if the common prefix is equal to the term means it is contained in the node
                if (commonPrefixLength !== edgeLabel.length && commonPrefixLength !== termSubstring.length) {
                    // if tolerance is set we take the current node as the closest
                    if (tolerance) break;
                    return {};
                }
                // skip the subword length and check the next divergent character
                i += rootChildCurrentChar.s.length - 1;
                // navigate into the child node
                root = rootChildCurrentChar;
            } else {
                return {};
            }
        }
        const output = {};
        // found the closest node we recursively search through children
        findAllWords(root, output, term, exact, tolerance);
        return output;
    }
}
function radix_contains(root, term) {
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        if (character in root.c) {
            const rootChildrenChar = root.c[character];
            const edgeLabel = rootChildrenChar.s;
            const termSubstring = term.substring(i);
            const commonPrefix = getCommonPrefix(edgeLabel, termSubstring);
            const commonPrefixLength = commonPrefix.length;
            if (commonPrefixLength !== edgeLabel.length && commonPrefixLength !== termSubstring.length) {
                return false;
            }
            i += rootChildrenChar.s.length - 1;
            root = rootChildrenChar;
        } else {
            return false;
        }
    }
    return true;
}
function removeWord(root, term) {
    if (!term) {
        return false;
    }
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        const parent = root;
        if (character in root.c) {
            i += root.c[character].s.length - 1;
            root = root.c[character];
            if (Object.keys(root.c).length === 0) {
                delete parent.c[root.k];
                return true;
            }
        } else {
            return false;
        }
    }
    return false;
}
function removeDocumentByWord(root, term, docID, exact = true) {
    if (!term) {
        return true;
    }
    const termLength = term.length;
    for(let i = 0; i < termLength; i++){
        const character = term[i];
        if (character in root.c) {
            const rootChildCurrentChar = root.c[character];
            i += rootChildCurrentChar.s.length - 1;
            root = rootChildCurrentChar;
            if (exact && root.w !== term) {
            // Do nothing if the exact condition is not met.
            } else {
                radix_removeDocument(root, docID);
            }
        } else {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=radix.js.map
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/trees/bkd.js
const K = 2 // 2D points
;
const EARTH_RADIUS = 6371e3 // Earth radius in meters
;
function bkd_create() {
    return {
        root: null
    };
}
function bkd_insert(tree, point, docIDs) {
    const newNode = {
        point,
        docIDs
    };
    if (tree.root == null) {
        tree.root = newNode;
        return;
    }
    let node = tree.root;
    let depth = 0;
    while(node !== null){
        // Check if the current node's point matches the new point
        if (node.point.lon === point.lon && node.point.lat === point.lat) {
            // Merge the new docIDs with the existing ones and remove duplicates
            const newDocIDs = node.docIDs ?? [];
            node.docIDs = Array.from(new Set([
                ...newDocIDs,
                ...docIDs || []
            ]));
            return;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                if (node.left == null) {
                    node.left = newNode;
                    return;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = newNode;
                    return;
                }
                node = node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                if (node.left == null) {
                    node.left = newNode;
                    return;
                }
                node = node.left;
            } else {
                if (node.right == null) {
                    node.right = newNode;
                    return;
                }
                node = node.right;
            }
        }
        depth++;
    }
}
function bkd_contains(tree, point) {
    let node = tree.root;
    let depth = 0;
    while(node != null){
        if ((node === null || node === void 0 ? void 0 : node.point.lon) === point.lon && node.point.lat === point.lat) {
            return true;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node === null || node === void 0 ? void 0 : node.left;
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node === null || node === void 0 ? void 0 : node.left;
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
            }
        }
        depth++;
    }
    return false;
}
// @todo: this is very inefficient. Fix this later.
function removeDocByID(tree, point, docID) {
    let node = tree.root;
    let depth = 0;
    let parentNode = null;
    let direction = null;
    while(node !== null){
        if ((node === null || node === void 0 ? void 0 : node.point.lon) === point.lon && node.point.lat === point.lat) {
            var _node_docIDs;
            const index = (_node_docIDs = node.docIDs) === null || _node_docIDs === void 0 ? void 0 : _node_docIDs.indexOf(docID);
            if (index !== undefined && index > -1) {
                var // Remove the docID from the array
                _node_docIDs1;
                (_node_docIDs1 = node.docIDs) === null || _node_docIDs1 === void 0 ? void 0 : _node_docIDs1.splice(index, 1);
                if (node.docIDs == null || node.docIDs.length === 0) {
                    // If the node doesn't have any more docIDs, remove the node
                    if (parentNode != null) {
                        if (direction === 'left') {
                            parentNode.left = node.left !== null ? node.left : node.right;
                        } else if (direction === 'right') {
                            parentNode.right = node.right !== null ? node.right : node.left;
                        }
                    } else {
                        // If the node to be removed is the root
                        tree.root = node.left !== null ? node.left : node.right;
                    }
                }
                return;
            }
        }
        const axis = depth % K;
        parentNode = node;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node === null || node === void 0 ? void 0 : node.left;
                direction = 'left';
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
                direction = 'right';
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node === null || node === void 0 ? void 0 : node.left;
                direction = 'left';
            } else {
                node = node === null || node === void 0 ? void 0 : node.right;
                direction = 'right';
            }
        }
        depth++;
    }
}
function getDocIDsByCoordinates(tree, point) {
    let node = tree.root;
    let depth = 0;
    while(node !== null){
        if (node.point.lon === point.lon && node.point.lat === point.lat) {
            // prettier-ignore
            return node.docIDs ?? null;
        }
        const axis = depth % K;
        // Compare by longitude
        if (axis === 0) {
            if (point.lon < node.point.lon) {
                node = node.left;
            } else {
                node = node.right;
            }
        // Compare by latitude
        } else {
            if (point.lat < node.point.lat) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
        depth++;
    }
    return null;
}
function searchByRadius(node, center, radius, inclusive = true, sort = 'asc', highPrecision = false) {
    const distanceFn = highPrecision ? vincentyDistance : haversineDistance;
    const stack = [
        {
            node,
            depth: 0
        }
    ];
    const result = [];
    while(stack.length > 0){
        const { node , depth  } = stack.pop();
        if (node === null) continue;
        const dist = distanceFn(center, node.point);
        if (inclusive ? dist <= radius : dist > radius) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        }
        if (node.left != null) {
            stack.push({
                node: node.left,
                depth: depth + 1
            });
        }
        if (node.right != null) {
            stack.push({
                node: node.right,
                depth: depth + 1
            });
        }
    }
    if (sort) {
        result.sort((a, b)=>{
            const distA = distanceFn(center, a.point);
            const distB = distanceFn(center, b.point);
            return sort.toLowerCase() === 'asc' ? distA - distB : distB - distA;
        });
    }
    return result;
}
function searchByPolygon(root, polygon, inclusive = true, sort = null, highPrecision = false) {
    const stack = [
        {
            node: root,
            depth: 0
        }
    ];
    const result = [];
    while(stack.length > 0){
        const task = stack.pop();
        if (task == null || task.node == null) continue;
        const { node , depth  } = task;
        const nextDepth = depth + 1;
        if (node.left != null) {
            stack.push({
                node: node.left,
                depth: nextDepth
            });
        }
        if (node.right != null) {
            stack.push({
                node: node.right,
                depth: nextDepth
            });
        }
        const isInsidePolygon = isPointInPolygon(polygon, node.point);
        if (isInsidePolygon && inclusive) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        } else if (!isInsidePolygon && !inclusive) {
            result.push({
                point: node.point,
                docIDs: node.docIDs ?? []
            });
        }
    }
    const centroid = calculatePolygonCentroid(polygon);
    if (sort) {
        const sortFn = highPrecision ? vincentyDistance : haversineDistance;
        result.sort((a, b)=>{
            const distA = sortFn(centroid, a.point);
            const distB = sortFn(centroid, b.point);
            return sort.toLowerCase() === 'asc' ? distA - distB : distB - distA;
        });
    }
    return result;
}
function calculatePolygonCentroid(polygon) {
    let totalArea = 0;
    let centroidX = 0;
    let centroidY = 0;
    const polygonLength = polygon.length;
    for(let i = 0, j = polygonLength - 1; i < polygonLength; j = i++){
        const xi = polygon[i].lon;
        const yi = polygon[i].lat;
        const xj = polygon[j].lon;
        const yj = polygon[j].lat;
        const areaSegment = xi * yj - xj * yi;
        totalArea += areaSegment;
        centroidX += (xi + xj) * areaSegment;
        centroidY += (yi + yj) * areaSegment;
    }
    totalArea /= 2;
    const centroidCoordinate = 6 * totalArea;
    centroidX /= centroidCoordinate;
    centroidY /= centroidCoordinate;
    return {
        lon: centroidX,
        lat: centroidY
    };
}
function isPointInPolygon(polygon, point) {
    let isInside = false;
    const x = point.lon;
    const y = point.lat;
    const polygonLength = polygon.length;
    for(let i = 0, j = polygonLength - 1; i < polygonLength; j = i++){
        const xi = polygon[i].lon;
        const yi = polygon[i].lat;
        const xj = polygon[j].lon;
        const yj = polygon[j].lat;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) isInside = !isInside;
    }
    return isInside;
}
function haversineDistance(coord1, coord2) {
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLat = (coord2.lat - coord1.lat) * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
}
function vincentyDistance(coord1, coord2) {
    // Constants for WGS 84 ellipsoidal Earth model (https://epsg.org/ellipsoid_7030/WGS-84.html)
    // Semi-major axis of the Earth in meters
    const a = 6378137;
    // Flattening of the ellipsoid
    const f = 1 / 298.257223563;
    // Semi-minor axis
    const b = (1 - f) * a;
    // Convert degrees to radians for calculations
    const P = Math.PI / 180;
    const lat1 = coord1.lat * P;
    const lat2 = coord2.lat * P;
    const deltaLon = (coord2.lon - coord1.lon) * P;
    // Reduced latitudes - account for flattening by transforming from geodetic to auxiliary latitude
    const U1 = Math.atan((1 - f) * Math.tan(lat1));
    const U2 = Math.atan((1 - f) * Math.tan(lat2));
    const sinU1 = Math.sin(U1);
    const cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2);
    const cosU2 = Math.cos(U2);
    // Initial approximation for the longitude difference between the two points
    let lambda = deltaLon;
    let prevLambda;
    // Limit the iterations to ensure we don't get stuck in an infinite loop
    let iterationLimit = 1000;
    let sinAlpha;
    let cos2Alpha;
    let sinSigma;
    let cosSigma;
    let sigma;
    // Refine the value of lambda (longitude difference)
    do {
        const sinLambda = Math.sin(lambda);
        const cosLambda = Math.cos(lambda);
        // Compute the trigonometric values required for Vincenty formulae
        sinSigma = Math.sqrt(cosU2 * sinLambda * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = Math.atan2(sinSigma, cosSigma);
        // Angular separation between the two points and the equator
        sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
        cos2Alpha = 1 - sinAlpha * sinAlpha;
        const cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cos2Alpha;
        // Compensation factor for the Earth's shape
        const C = f / 16 * cos2Alpha * (4 + f * (4 - 3 * cos2Alpha));
        // Store previous lambda to check for convergence
        prevLambda = lambda;
        // Refine the estimate of lambda using the Vincenty formula
        lambda = deltaLon + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
    }while (Math.abs(lambda - prevLambda) > 1e-12 && --iterationLimit > 0)
    // Compute factors that depend on the shape of the Earth and angular distances
    const u2 = cos2Alpha * (a * a - b * b) / (b * b);
    const A = 1 + u2 / 16384 * (4096 + u2 * (-768 + u2 * (320 - 175 * u2)));
    const B = u2 / 1024 * (256 + u2 * (-128 + u2 * (74 - 47 * u2)));
    // Compute the correction factor for the ellipsoidal shape of the Earth
    const deltaSigma = B * sinSigma * (cosSigma - 2 * sinU1 * sinU2 / cos2Alpha + B / 4 * (cosSigma * (-1 + 2 * sinSigma * sinSigma) - B / 6 * sigma * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * sigma * sigma)));
    // Final calculation of distance using Vincenty formula
    const s = b * A * (sigma - deltaSigma);
    return s;
}

//# sourceMappingURL=bkd.js.map
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/algorithms.js
var algorithms = __webpack_require__(2970);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/cosine-similarity.js
var cosine_similarity = __webpack_require__(4526);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/defaults.js
var defaults = __webpack_require__(4442);
// EXTERNAL MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/internal-document-id-store.js
var internal_document_id_store = __webpack_require__(4033);
;// CONCATENATED MODULE: ../node_modules/.pnpm/@orama+orama@2.0.17/node_modules/@orama/orama/dist/components/index.js










async function insertDocumentScoreParameters(index, prop, id, tokens, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, id);
    index.avgFieldLength[prop] = ((index.avgFieldLength[prop] ?? 0) * (docsCount - 1) + tokens.length) / docsCount;
    index.fieldLengths[prop][internalId] = tokens.length;
    index.frequencies[prop][internalId] = {};
}
async function insertTokenScoreParameters(index, prop, id, tokens, token) {
    let tokenFrequency = 0;
    for (const t of tokens){
        if (t === token) {
            tokenFrequency++;
        }
    }
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, id);
    const tf = tokenFrequency / tokens.length;
    index.frequencies[prop][internalId][token] = tf;
    if (!(token in index.tokenOccurrences[prop])) {
        index.tokenOccurrences[prop][token] = 0;
    }
    // increase a token counter that may not yet exist
    index.tokenOccurrences[prop][token] = (index.tokenOccurrences[prop][token] ?? 0) + 1;
}
async function removeDocumentScoreParameters(index, prop, id, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, id);
    index.avgFieldLength[prop] = (index.avgFieldLength[prop] * docsCount - index.fieldLengths[prop][internalId]) / (docsCount - 1);
    index.fieldLengths[prop][internalId] = undefined;
    index.frequencies[prop][internalId] = undefined;
}
async function removeTokenScoreParameters(index, prop, token) {
    index.tokenOccurrences[prop][token]--;
}
async function calculateResultScores(context, index, prop, term, ids) {
    const documentIDs = Array.from(ids);
    // Exact fields for TF-IDF
    const avgFieldLength = index.avgFieldLength[prop];
    const fieldLengths = index.fieldLengths[prop];
    const oramaOccurrences = index.tokenOccurrences[prop];
    const oramaFrequencies = index.frequencies[prop];
    // oramaOccurrences[term] can be undefined, 0, string, or { [k: string]: number }
    const termOccurrences = typeof oramaOccurrences[term] === 'number' ? oramaOccurrences[term] ?? 0 : 0;
    const scoreList = [];
    // Calculate TF-IDF value for each term, in each document, for each index.
    const documentIDsLength = documentIDs.length;
    for(let k = 0; k < documentIDsLength; k++){
        var _oramaFrequencies_internalId;
        const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, documentIDs[k]);
        const tf = (oramaFrequencies === null || oramaFrequencies === void 0 ? void 0 : (_oramaFrequencies_internalId = oramaFrequencies[internalId]) === null || _oramaFrequencies_internalId === void 0 ? void 0 : _oramaFrequencies_internalId[term]) ?? 0;
        const bm25 = (0,algorithms/* BM25 */.D)(tf, termOccurrences, context.docsCount, fieldLengths[internalId], avgFieldLength, context.params.relevance);
        scoreList.push([
            internalId,
            bm25
        ]);
    }
    return scoreList;
}
async function components_create(orama, sharedInternalDocumentStore, schema, index, prefix = '') {
    if (!index) {
        index = {
            sharedInternalDocumentStore,
            indexes: {},
            vectorIndexes: {},
            searchableProperties: [],
            searchablePropertiesWithTypes: {},
            frequencies: {},
            tokenOccurrences: {},
            avgFieldLength: {},
            fieldLengths: {}
        };
    }
    for (const [prop, type] of Object.entries(schema)){
        const path = `${prefix}${prefix ? '.' : ''}${prop}`;
        if (typeof type === 'object' && !Array.isArray(type)) {
            // Nested
            components_create(orama, sharedInternalDocumentStore, type, index, path);
            continue;
        }
        if ((0,defaults.isVectorType)(type)) {
            index.searchableProperties.push(path);
            index.searchablePropertiesWithTypes[path] = type;
            index.vectorIndexes[path] = {
                size: (0,defaults.getVectorSize)(type),
                vectors: {}
            };
        } else {
            const isArray = /\[/.test(type);
            switch(type){
                case 'boolean':
                case 'boolean[]':
                    index.indexes[path] = {
                        type: 'Bool',
                        node: {
                            true: [],
                            false: []
                        },
                        isArray
                    };
                    break;
                case 'number':
                case 'number[]':
                    index.indexes[path] = {
                        type: 'AVL',
                        node: create(0, []),
                        isArray
                    };
                    break;
                case 'string':
                case 'string[]':
                    index.indexes[path] = {
                        type: 'Radix',
                        node: radix_create(),
                        isArray
                    };
                    index.avgFieldLength[path] = 0;
                    index.frequencies[path] = {};
                    index.tokenOccurrences[path] = {};
                    index.fieldLengths[path] = {};
                    break;
                case 'enum':
                case 'enum[]':
                    index.indexes[path] = {
                        type: 'Flat',
                        node: flat_create(),
                        isArray
                    };
                    break;
                case 'geopoint':
                    index.indexes[path] = {
                        type: 'BKD',
                        node: bkd_create(),
                        isArray
                    };
                    break;
                default:
                    throw (0,errors/* createError */.T)('INVALID_SCHEMA_TYPE', Array.isArray(type) ? 'array' : type, path);
            }
            index.searchableProperties.push(path);
            index.searchablePropertiesWithTypes[path] = type;
        }
    }
    return index;
}
function insertScalarBuilder(implementation, index, prop, id, language, tokenizer, docsCount) {
    return async (value)=>{
        const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, id);
        const { type , node  } = index.indexes[prop];
        switch(type){
            case 'Bool':
                {
                    node[value ? 'true' : 'false'].push(internalId);
                    break;
                }
            case 'AVL':
                {
                    insert(node, value, [
                        internalId
                    ]);
                    break;
                }
            case 'Radix':
                {
                    const tokens = await tokenizer.tokenize(value, language, prop);
                    await implementation.insertDocumentScoreParameters(index, prop, internalId, tokens, docsCount);
                    for (const token of tokens){
                        await implementation.insertTokenScoreParameters(index, prop, internalId, tokens, token);
                        radix_insert(node, token, internalId);
                    }
                    break;
                }
            case 'Flat':
                {
                    flat_insert(node, value, internalId);
                    break;
                }
            case 'BKD':
                {
                    bkd_insert(node, value, [
                        internalId
                    ]);
                    break;
                }
        }
    };
}
async function components_insert(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    if ((0,defaults.isVectorType)(schemaType)) {
        return insertVector(index, prop, value, id);
    }
    const insertScalar = insertScalarBuilder(implementation, index, prop, id, language, tokenizer, docsCount);
    if (!(0,defaults.isArrayType)(schemaType)) {
        return insertScalar(value);
    }
    const elements = value;
    const elementsLength = elements.length;
    for(let i = 0; i < elementsLength; i++){
        await insertScalar(elements[i]);
    }
}
function insertVector(index, prop, value, id) {
    if (!(value instanceof Float32Array)) {
        value = new Float32Array(value);
    }
    const size = index.vectorIndexes[prop].size;
    const magnitude = (0,cosine_similarity/* getMagnitude */.T)(value, size);
    index.vectorIndexes[prop].vectors[id] = [
        magnitude,
        value
    ];
}
async function removeScalar(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    const internalId = (0,internal_document_id_store/* getInternalDocumentId */.HM)(index.sharedInternalDocumentStore, id);
    if ((0,defaults.isVectorType)(schemaType)) {
        delete index.vectorIndexes[prop].vectors[id];
        return true;
    }
    const { type , node  } = index.indexes[prop];
    switch(type){
        case 'AVL':
            {
                removeDocument(node, internalId, value);
                return true;
            }
        case 'Bool':
            {
                const booleanKey = value ? 'true' : 'false';
                const position = node[booleanKey].indexOf(internalId);
                node[value ? 'true' : 'false'].splice(position, 1);
                return true;
            }
        case 'Radix':
            {
                const tokens = await tokenizer.tokenize(value, language, prop);
                await implementation.removeDocumentScoreParameters(index, prop, id, docsCount);
                for (const token of tokens){
                    await implementation.removeTokenScoreParameters(index, prop, token);
                    removeDocumentByWord(node, token, internalId);
                }
                return true;
            }
        case 'Flat':
            {
                flat_removeDocument(node, internalId, value);
                return true;
            }
        case 'BKD':
            {
                removeDocByID(node, value, internalId);
                return false;
            }
    }
}
async function components_remove(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount) {
    if (!(0,defaults.isArrayType)(schemaType)) {
        return removeScalar(implementation, index, prop, id, value, schemaType, language, tokenizer, docsCount);
    }
    const innerSchemaType = (0,defaults.getInnerType)(schemaType);
    const elements = value;
    const elementsLength = elements.length;
    for(let i = 0; i < elementsLength; i++){
        await removeScalar(implementation, index, prop, id, elements[i], innerSchemaType, language, tokenizer, docsCount);
    }
    return true;
}
async function search(context, index, prop, term) {
    if (!(prop in index.tokenOccurrences)) {
        return [];
    }
    const { node , type  } = index.indexes[prop];
    if (type !== 'Radix') {
        throw (0,errors/* createError */.T)('WRONG_SEARCH_PROPERTY_TYPE', prop);
    }
    const { exact , tolerance  } = context.params;
    const searchResult = radix_find(node, {
        term,
        exact,
        tolerance
    });
    const ids = new Set();
    for(const key in searchResult){
        //skip keys inherited from prototype
        const ownProperty = (0,utils/* getOwnProperty */.eg)(searchResult, key);
        if (!ownProperty) continue;
        for (const id of searchResult[key]){
            ids.add(id);
        }
    }
    return context.index.calculateResultScores(context, index, prop, term, Array.from(ids));
}
async function searchByWhereClause(context, index, filters) {
    const filterKeys = Object.keys(filters);
    const filtersMap = filterKeys.reduce((acc, key)=>({
            [key]: [],
            ...acc
        }), {});
    for (const param of filterKeys){
        const operation = filters[param];
        if (typeof index.indexes[param] === 'undefined') {
            throw (0,errors/* createError */.T)('UNKNOWN_FILTER_PROPERTY', param);
        }
        const { node , type , isArray  } = index.indexes[param];
        if (type === 'Bool') {
            const idx = node;
            const filteredIDs = idx[operation.toString()];
            (0,utils/* safeArrayPush */.hT)(filtersMap[param], filteredIDs);
            continue;
        }
        if (type === 'BKD') {
            let reqOperation;
            if ('radius' in operation) {
                reqOperation = 'radius';
            } else if ('polygon' in operation) {
                reqOperation = 'polygon';
            } else {
                throw new Error(`Invalid operation ${operation}`);
            }
            if (reqOperation === 'radius') {
                const { value , coordinates , unit ='m' , inside =true , highPrecision =false  } = operation[reqOperation];
                const distanceInMeters = (0,utils/* convertDistanceToMeters */.Mo)(value, unit);
                const ids = searchByRadius(node.root, coordinates, distanceInMeters, inside, undefined, highPrecision);
                // @todo: convert this into a for loop
                (0,utils/* safeArrayPush */.hT)(filtersMap[param], ids.map(({ docIDs  })=>docIDs).flat());
            } else {
                const { coordinates , inside =true , highPrecision =false  } = operation[reqOperation];
                const ids = searchByPolygon(node.root, coordinates, inside, undefined, highPrecision);
                // @todo: convert this into a for loop
                (0,utils/* safeArrayPush */.hT)(filtersMap[param], ids.map(({ docIDs  })=>docIDs).flat());
            }
            continue;
        }
        if (type === 'Radix' && (typeof operation === 'string' || Array.isArray(operation))) {
            for (const raw of [
                operation
            ].flat()){
                const term = await context.tokenizer.tokenize(raw, context.language, param);
                for (const t of term){
                    const filteredIDsResults = radix_find(node, {
                        term: t,
                        exact: true
                    });
                    (0,utils/* safeArrayPush */.hT)(filtersMap[param], Object.values(filteredIDsResults).flat());
                }
            }
            continue;
        }
        const operationKeys = Object.keys(operation);
        if (operationKeys.length > 1) {
            throw (0,errors/* createError */.T)('INVALID_FILTER_OPERATION', operationKeys.length);
        }
        if (type === 'Flat') {
            if (isArray) {
                (0,utils/* safeArrayPush */.hT)(filtersMap[param], filterArr(node, operation));
            } else {
                (0,utils/* safeArrayPush */.hT)(filtersMap[param], filter(node, operation));
            }
            continue;
        }
        if (type === 'AVL') {
            const operationOpt = operationKeys[0];
            const operationValue = operation[operationOpt];
            let filteredIDs = [];
            switch(operationOpt){
                case 'gt':
                    {
                        filteredIDs = greaterThan(node, operationValue, false);
                        break;
                    }
                case 'gte':
                    {
                        filteredIDs = greaterThan(node, operationValue, true);
                        break;
                    }
                case 'lt':
                    {
                        filteredIDs = lessThan(node, operationValue, false);
                        break;
                    }
                case 'lte':
                    {
                        filteredIDs = lessThan(node, operationValue, true);
                        break;
                    }
                case 'eq':
                    {
                        filteredIDs = find(node, operationValue) ?? [];
                        break;
                    }
                case 'between':
                    {
                        const [min, max] = operationValue;
                        filteredIDs = rangeSearch(node, min, max);
                        break;
                    }
            }
            (0,utils/* safeArrayPush */.hT)(filtersMap[param], filteredIDs);
        }
    }
    // AND operation: calculate the intersection between all the IDs in filterMap
    const result = (0,utils/* intersect */.wf)(Object.values(filtersMap));
    return result;
}
async function getSearchableProperties(index) {
    return index.searchableProperties;
}
async function getSearchablePropertiesWithTypes(index) {
    return index.searchablePropertiesWithTypes;
}
function loadRadixNode(node) {
    const convertedNode = radix_create(node.e, node.s, node.k);
    convertedNode.d = node.d;
    convertedNode.w = node.w;
    for (const childrenKey of Object.keys(node.c)){
        convertedNode.c[childrenKey] = loadRadixNode(node.c[childrenKey]);
    }
    return convertedNode;
}
function loadFlatNode(node) {
    return {
        numberToDocumentId: new Map(node)
    };
}
function saveFlatNode(node) {
    return Array.from(node.numberToDocumentId.entries());
}
async function load(sharedInternalDocumentStore, raw) {
    const { indexes: rawIndexes , vectorIndexes: rawVectorIndexes , searchableProperties , searchablePropertiesWithTypes , frequencies , tokenOccurrences , avgFieldLength , fieldLengths  } = raw;
    const indexes = {};
    const vectorIndexes = {};
    for (const prop of Object.keys(rawIndexes)){
        const { node , type , isArray  } = rawIndexes[prop];
        switch(type){
            case 'Radix':
                indexes[prop] = {
                    type: 'Radix',
                    node: loadRadixNode(node),
                    isArray
                };
                break;
            case 'Flat':
                indexes[prop] = {
                    type: 'Flat',
                    node: loadFlatNode(node),
                    isArray
                };
                break;
            default:
                indexes[prop] = rawIndexes[prop];
        }
    }
    for (const idx of Object.keys(rawVectorIndexes)){
        const vectors = rawVectorIndexes[idx].vectors;
        for(const vec in vectors){
            vectors[vec] = [
                vectors[vec][0],
                new Float32Array(vectors[vec][1])
            ];
        }
        vectorIndexes[idx] = {
            size: rawVectorIndexes[idx].size,
            vectors
        };
    }
    return {
        sharedInternalDocumentStore,
        indexes,
        vectorIndexes,
        searchableProperties,
        searchablePropertiesWithTypes,
        frequencies,
        tokenOccurrences,
        avgFieldLength,
        fieldLengths
    };
}
async function save(index) {
    const { indexes , vectorIndexes , searchableProperties , searchablePropertiesWithTypes , frequencies , tokenOccurrences , avgFieldLength , fieldLengths  } = index;
    const vectorIndexesAsArrays = {};
    for (const idx of Object.keys(vectorIndexes)){
        const vectors = vectorIndexes[idx].vectors;
        for(const vec in vectors){
            vectors[vec] = [
                vectors[vec][0],
                Array.from(vectors[vec][1])
            ];
        }
        vectorIndexesAsArrays[idx] = {
            size: vectorIndexes[idx].size,
            vectors
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const savedIndexes = {};
    for (const name of Object.keys(indexes)){
        const { type , node , isArray  } = indexes[name];
        if (type !== 'Flat') {
            savedIndexes[name] = indexes[name];
            continue;
        }
        savedIndexes[name] = {
            type: 'Flat',
            node: saveFlatNode(node),
            isArray
        };
    }
    return {
        indexes: savedIndexes,
        vectorIndexes: vectorIndexesAsArrays,
        searchableProperties,
        searchablePropertiesWithTypes,
        frequencies,
        tokenOccurrences,
        avgFieldLength,
        fieldLengths
    };
}
async function createIndex() {
    return {
        create: components_create,
        insert: components_insert,
        remove: components_remove,
        insertDocumentScoreParameters,
        insertTokenScoreParameters,
        removeDocumentScoreParameters,
        removeTokenScoreParameters,
        calculateResultScores,
        search,
        searchByWhereClause,
        getSearchableProperties,
        getSearchablePropertiesWithTypes,
        load,
        save
    };
}

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XQ: () => (/* binding */ boundedLevenshtein),
/* harmony export */   j9: () => (/* binding */ syncBoundedLevenshtein)
/* harmony export */ });
/* unused harmony export levenshtein */
/**
 * Inspired by:
 * https://github.com/Yomguithereal/talisman/blob/86ae55cbd040ff021d05e282e0e6c71f2dde21f8/src/metrics/levenshtein.js#L218-L340
 */ function _boundedLevenshtein(a, b, tolerance) {
    // the strings are the same
    if (a === b) {
        return 0;
    }
    // a should be the shortest string
    const swap = a;
    if (a.length > b.length) {
        a = b;
        b = swap;
    }
    let lenA = a.length;
    let lenB = b.length;
    // ignore common prefix
    let startIdx = 0;
    while(startIdx < lenA && a.charCodeAt(startIdx) === b.charCodeAt(startIdx)){
        startIdx++;
    }
    // if string A is subfix of B, we consider the distance 0
    // because we search for prefix!
    // fix https://github.com/oramasearch/orama/issues/544
    if (startIdx === lenA) {
        return 0;
    }
    // ignore common suffix
    // note: `~-` decreases by a unit in a bitwise fashion
    while(lenA > 0 && a.charCodeAt(~-lenA) === b.charCodeAt(~-lenB)){
        lenA--;
        lenB--;
    }
    // early return when the smallest string is empty
    if (!lenA) {
        return lenB > tolerance ? -1 : lenB;
    }
    lenA -= startIdx;
    lenB -= startIdx;
    // If both strings are smaller than the tolerance, we accept any distance
    // Probably the result distance is wrong, but we don't care:
    // It is always less then the tolerance!
    if (lenA <= tolerance && lenB <= tolerance) {
        return lenA > lenB ? lenA : lenB;
    }
    const delta = lenB - lenA;
    if (tolerance > lenB) {
        tolerance = lenB;
    } else if (delta > tolerance) {
        return -1;
    }
    let i = 0;
    const row = [];
    const characterCodeCache = [];
    while(i < tolerance){
        characterCodeCache[i] = b.charCodeAt(startIdx + i);
        row[i] = ++i;
    }
    while(i < lenB){
        characterCodeCache[i] = b.charCodeAt(startIdx + i);
        row[i++] = tolerance + 1;
    }
    const offset = tolerance - delta;
    const haveMax = tolerance < lenB;
    let jStart = 0;
    let jEnd = tolerance;
    let current = 0;
    let left = 0;
    let above = 0;
    let charA = 0;
    let j = 0;
    // Starting the nested loops
    for(i = 0; i < lenA; i++){
        left = i;
        current = i + 1;
        charA = a.charCodeAt(startIdx + i);
        jStart += i > offset ? 1 : 0;
        jEnd += jEnd < lenB ? 1 : 0;
        for(j = jStart; j < jEnd; j++){
            above = current;
            current = left;
            left = row[j];
            if (charA !== characterCodeCache[j]) {
                // insert current
                if (left < current) {
                    current = left;
                }
                // delete current
                if (above < current) {
                    current = above;
                }
                current++;
            }
            row[j] = current;
        }
        if (haveMax && row[i + delta] > tolerance) {
            return -1;
        }
    }
    return current <= tolerance ? current : -1;
}
/**
 * Computes the Levenshtein distance between two strings (a, b), returning early with -1 if the distance
 * is greater than the given tolerance.
 * It assumes that:
 * - tolerance >= ||a| - |b|| >= 0
 */ async function boundedLevenshtein(a, b, tolerance) {
    const distance = _boundedLevenshtein(a, b, tolerance);
    return {
        distance,
        isBounded: distance >= 0
    };
}
// This is only used internally, keep in sync with the previous one
function syncBoundedLevenshtein(a, b, tolerance) {
    const distance = _boundedLevenshtein(a, b, tolerance);
    return {
        distance,
        isBounded: distance >= 0
    };
}
function levenshtein(a, b) {
    /* c8 ignore next 3 */ if (!a.length) {
        return b.length;
    }
    /* c8 ignore next 3 */ if (!b.length) {
        return a.length;
    }
    const swap = a;
    if (a.length > b.length) {
        a = b;
        b = swap;
    }
    const row = Array.from({
        length: a.length + 1
    }, (_, i)=>i);
    let val = 0;
    for(let i = 1; i <= b.length; i++){
        let prev = i;
        for(let j = 1; j <= a.length; j++){
            if (b[i - 1] === a[j - 1]) {
                val = row[j - 1];
            } else {
                val = Math.min(row[j - 1] + 1, Math.min(prev + 1, row[j] + 1));
            }
            row[j - 1] = prev;
            prev = val;
        }
        row[a.length] = prev;
    }
    return row[a.length];
}

//# sourceMappingURL=levenshtein.js.map

/***/ })

};
;