"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var Cloneable_1=require("./Cloneable"),errors_1=require("./errors"),GVL_1=require("./GVL"),model_1=require("./model"),TCModel=function(e){function t(t){var n=e.call(this)||this;return n.isServiceSpecific_=!1,n.supportOOB_=!0,n.useNonStandardStacks_=!1,n.purposeOneTreatment_=!1,n.publisherCountryCode_="AA",n.version_=2,n.consentScreen_=0,n.policyVersion_=2,n.consentLanguage_="EN",n.cmpId_=0,n.cmpVersion_=0,n.vendorListVersion_=0,n.numCustomPurposes_=0,n.specialFeatureOptins=new model_1.Vector,n.purposeConsents=new model_1.Vector,n.purposeLegitimateInterests=new model_1.Vector,n.publisherConsents=new model_1.Vector,n.publisherLegitimateInterests=new model_1.Vector,n.publisherCustomConsents=new model_1.Vector,n.publisherCustomLegitimateInterests=new model_1.Vector,n.vendorConsents=new model_1.Vector,n.vendorLegitimateInterests=new model_1.Vector,n.vendorsDisclosed=new model_1.Vector,n.vendorsAllowed=new model_1.Vector,n.publisherRestrictions=new model_1.PurposeRestrictionVector,t&&(n.gvl=t),n.created=new Date,n.updated(),n}return __extends(t,e),Object.defineProperty(t.prototype,"gvl",{get:function(){return this.gvl_},set:function(e){GVL_1.GVL.isInstanceOf(e)||(e=new GVL_1.GVL(e)),this.gvl_=e,this.publisherRestrictions.gvl=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cmpId",{get:function(){return this.cmpId_},set:function(e){if(!(Number.isInteger(+e)&&e>1))throw new errors_1.TCModelError("cmpId",e);this.cmpId_=+e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cmpVersion",{get:function(){return this.cmpVersion_},set:function(e){if(!(Number.isInteger(+e)&&e>-1))throw new errors_1.TCModelError("cmpVersion",e);this.cmpVersion_=+e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"consentScreen",{get:function(){return this.consentScreen_},set:function(e){if(!(Number.isInteger(+e)&&e>-1))throw new errors_1.TCModelError("consentScreen",e);this.consentScreen_=+e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"consentLanguage",{get:function(){return this.consentLanguage_},set:function(e){this.consentLanguage_=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"publisherCountryCode",{get:function(){return this.publisherCountryCode_},set:function(e){if(!/^([A-z]){2}$/.test(e))throw new errors_1.TCModelError("publisherCountryCode",e);this.publisherCountryCode_=e.toUpperCase()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vendorListVersion",{get:function(){return this.gvl?this.gvl.vendorListVersion:this.vendorListVersion_},set:function(e){if(this.vendorListVersion_=parseInt(e,10),this.vendorListVersion_<0)throw new errors_1.TCModelError("vendorListVersion",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"policyVersion",{get:function(){return this.gvl?this.gvl.tcfPolicyVersion:this.policyVersion_},set:function(e){if(this.policyVersion_=parseInt(e,10),this.policyVersion_<0)throw new errors_1.TCModelError("policyVersion",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this.version_},set:function(e){this.version_=parseInt(e,10)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isServiceSpecific",{get:function(){return this.isServiceSpecific_},set:function(e){this.isServiceSpecific_=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"useNonStandardStacks",{get:function(){return this.useNonStandardStacks_},set:function(e){this.useNonStandardStacks_=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"supportOOB",{get:function(){return this.supportOOB_},set:function(e){this.supportOOB_=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"purposeOneTreatment",{get:function(){return this.purposeOneTreatment_},set:function(e){this.purposeOneTreatment_=e},enumerable:!0,configurable:!0}),t.prototype.setAllVendorConsents=function(){this.vendorConsents.set(this.gvl.vendors)},t.prototype.unsetAllVendorConsents=function(){this.vendorConsents.empty()},t.prototype.setAllVendorsDisclosed=function(){this.vendorsDisclosed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsDisclosed=function(){this.vendorsDisclosed.empty()},t.prototype.setAllVendorsAllowed=function(){this.vendorsAllowed.set(this.gvl.vendors)},t.prototype.unsetAllVendorsAllowed=function(){this.vendorsAllowed.empty()},t.prototype.setAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.set(this.gvl.vendors)},t.prototype.unsetAllVendorLegitimateInterests=function(){this.vendorLegitimateInterests.empty()},t.prototype.setAllPurposeConsents=function(){this.purposeConsents.set(this.gvl.purposes)},t.prototype.unsetAllPurposeConsents=function(){this.purposeConsents.empty()},t.prototype.setAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.set(this.gvl.purposes)},t.prototype.unsetAllPurposeLegitimateInterests=function(){this.purposeLegitimateInterests.empty()},t.prototype.setAllSpecialFeatureOptins=function(){this.specialFeatureOptins.set(this.gvl.specialFeatures)},t.prototype.unsetAllSpecialFeatureOptins=function(){this.specialFeatureOptins.empty()},t.prototype.setAll=function(){this.setAllVendorConsents(),this.setAllPurposeLegitimateInterests(),this.setAllSpecialFeatureOptins(),this.setAllPurposeConsents(),this.setAllVendorLegitimateInterests()},t.prototype.unsetAll=function(){this.unsetAllVendorConsents(),this.unsetAllPurposeLegitimateInterests(),this.unsetAllSpecialFeatureOptins(),this.unsetAllPurposeConsents(),this.unsetAllVendorLegitimateInterests()},Object.defineProperty(t.prototype,"numCustomPurposes",{get:function(){var e=this.numCustomPurposes_;if("object"==typeof this.customPurposes){var t=Object.keys(this.customPurposes).sort((function(e,t){return+e-+t}));e=parseInt(t.pop(),10)}return e},set:function(e){if(this.numCustomPurposes_=parseInt(e,10),this.numCustomPurposes_<0)throw new errors_1.TCModelError("numCustomPurposes",e)},enumerable:!0,configurable:!0}),t.prototype.updated=function(){this.lastUpdated=new Date},t.consentLanguages=GVL_1.GVL.consentLanguages,t}(Cloneable_1.Cloneable);exports.TCModel=TCModel;