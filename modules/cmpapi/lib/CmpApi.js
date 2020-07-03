"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var CmpApiModel_1=require("./CmpApiModel"),status_1=require("./status"),CallResponder_1=require("./CallResponder"),core_1=require("@iabtcf/core"),CmpApi=function(){function e(e,p,i,t){void 0===i&&(i=!1),this.throwIfInvalidInt(e,"cmpId",2),this.throwIfInvalidInt(p,"cmpVersion",0),CmpApiModel_1.CmpApiModel.cmpId=e,CmpApiModel_1.CmpApiModel.cmpVersion=p,this.isServiceSpecific=!!i,this.callResponder=new CallResponder_1.CallResponder(t)}return Object.defineProperty(e.prototype,"tcModel",{set:function(e){console.error("@iabtcf/cmpapi: As of v1.0.0-beta.21 setting tcModel via CmpApi.tcModel is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"),console.log("  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tcString",{set:function(e){console.error("@iabtcf/cmpapi: As of v1.0.0-beta.21 setting tcString via CmpApi.tcString is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"),console.log("  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"uiVisible",{set:function(e){console.error("@iabtcf/cmpapi: As of v1.0.0-beta.21 setting uiVisible via CmpApi.uiVisible is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"),console.log("  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples")},enumerable:!0,configurable:!0}),e.prototype.throwIfInvalidInt=function(e,p,i){if(!("number"==typeof e&&Number.isInteger(e)&&e>=i))throw new Error("Invalid "+p+": "+e)},e.prototype.update=function(e,p){if(void 0===p&&(p=!1),CmpApiModel_1.CmpApiModel.disabled)throw new Error("CmpApi Disabled");CmpApiModel_1.CmpApiModel.cmpStatus=status_1.CmpStatus.LOADED,p?(CmpApiModel_1.CmpApiModel.displayStatus=status_1.DisplayStatus.VISIBLE,CmpApiModel_1.CmpApiModel.eventStatus=status_1.EventStatus.CMP_UI_SHOWN):void 0===CmpApiModel_1.CmpApiModel.tcModel?(CmpApiModel_1.CmpApiModel.displayStatus=status_1.DisplayStatus.DISABLED,CmpApiModel_1.CmpApiModel.eventStatus=status_1.EventStatus.TC_LOADED):(CmpApiModel_1.CmpApiModel.displayStatus=status_1.DisplayStatus.HIDDEN,CmpApiModel_1.CmpApiModel.eventStatus=status_1.EventStatus.USER_ACTION_COMPLETE),null===e?(CmpApiModel_1.CmpApiModel.gdprApplies=!1,CmpApiModel_1.CmpApiModel.tcModel=null):(CmpApiModel_1.CmpApiModel.gdprApplies=!0,""===e?(CmpApiModel_1.CmpApiModel.tcModel=new core_1.TCModel,CmpApiModel_1.CmpApiModel.tcModel.cmpId=CmpApiModel_1.CmpApiModel.cmpId,CmpApiModel_1.CmpApiModel.tcModel.cmpVersion=CmpApiModel_1.CmpApiModel.cmpVersion):CmpApiModel_1.CmpApiModel.tcModel=core_1.TCString.decode(e),CmpApiModel_1.CmpApiModel.tcModel.isServiceSpecific=this.isServiceSpecific,CmpApiModel_1.CmpApiModel.tcString=e),CmpApiModel_1.CmpApiModel.eventQueue.exec(),this.callResponder.purgeQueuedCalls()},e.prototype.disable=function(){CmpApiModel_1.CmpApiModel.disabled=!0,CmpApiModel_1.CmpApiModel.cmpStatus=status_1.CmpStatus.ERROR},e}();exports.CmpApi=CmpApi;