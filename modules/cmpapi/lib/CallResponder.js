"use strict";var __read=this&&this.__read||function(o,e){var a="function"==typeof Symbol&&o[Symbol.iterator];if(!a)return o;var n,t,i=a.call(o),s=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(o){t={error:o}}finally{try{n&&!n.done&&(a=i.return)&&a.call(i)}finally{if(t)throw t.error}}return s},__spread=this&&this.__spread||function(){for(var o=[],e=0;e<arguments.length;e++)o=o.concat(__read(arguments[e]));return o};Object.defineProperty(exports,"__esModule",{value:!0});var CommandMap_1=require("./command/CommandMap"),CmpApiModel_1=require("./CmpApiModel"),TCFCommands_1=require("./command/TCFCommands"),DisabledCommand_1=require("./command/DisabledCommand"),SupportedVersions_1=require("./SupportedVersions"),CallResponder=function(){function o(o){this.API_FUNCTION_NAME="__tcfapi",o&&(this.customCommands={},this.populateCustomCommands(o));try{this.callQueue=window[this.API_FUNCTION_NAME]()}catch(o){this.callQueue=[]}finally{window[this.API_FUNCTION_NAME]=this.apiCall.bind(this)}this.purgeQueuedCalls()}return o.prototype.apiCall=function(o,e,a){for(var n,t=[],i=3;i<arguments.length;i++)t[i-3]=arguments[i];if("string"!=typeof o)a(null,!1);else if(SupportedVersions_1.SupportedVersions.has(e)){if("function"!=typeof a)throw new Error("invalid callback function");CmpApiModel_1.CmpApiModel.disabled?new DisabledCommand_1.DisabledCommand(a):this.isKnownCommand(o)?o===TCFCommands_1.TCFCommands.PING?new CommandMap_1.CommandMap[o](a,t[0]):this.customCommands&&this.customCommands[o]?(n=this.customCommands)[o].apply(n,__spread([a],t)):void 0===CmpApiModel_1.CmpApiModel.tcModel?this.callQueue.push(__spread([o,e,a],t)):new CommandMap_1.CommandMap[o](a,t[0]):a(null,!1)}else a(null,!1)},o.prototype.purgeQueuedCalls=function(){var o=this.apiCall.bind(this),e=this.callQueue;this.callQueue=[],e.forEach((function(e){o.apply(void 0,__spread(e))}))},o.prototype.populateCustomCommands=function(o){var e=this;Object.keys(o||{}).forEach((function(a){Object.values(TCFCommands_1.TCFCommands).includes(a)?e.customCommands[a]=function(){for(var e,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return o[a](new((e=CommandMap_1.CommandMap[a]).bind.apply(e,__spread([void 0],n))))}:e.customCommands[a]=o[a]}))},o.prototype.isKnownCommand=function(o){return void 0!==this.customCommands&&void 0!==this.customCommands[o]||void 0!==CommandMap_1.CommandMap[o]},o}();exports.CallResponder=CallResponder;