"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var Command=function(){function t(t,i,s){this.callback=t,this.param=i,this.listenerId=s,this.isValid()?this.success():this.fail()}return t.prototype.isValid=function(){return!0},t.prototype.fail=function(){(0,this.callback)(null,!1)},t}();exports.Command=Command;