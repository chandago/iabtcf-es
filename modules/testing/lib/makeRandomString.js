"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var makeRandomInt_1=require("./makeRandomInt");function makeRandomString(e,n,a){void 0===n&&(n=0),void 0===a&&(a=127);for(var r="",o=0;o<e;o++)r+=String.fromCharCode(makeRandomInt_1.makeRandomInt(n,a));return r}exports.makeRandomString=makeRandomString;