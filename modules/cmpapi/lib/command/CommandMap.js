"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var PingCommand_1=require("./PingCommand"),GetTCDataCommand_1=require("./GetTCDataCommand"),GetInAppTCDataCommand_1=require("./GetInAppTCDataCommand"),GetVendorListCommand_1=require("./GetVendorListCommand"),AddEventListenerCommand_1=require("./AddEventListenerCommand"),RemoveEventListenerCommand_1=require("./RemoveEventListenerCommand"),TCFCommands_1=require("./TCFCommands"),CommandMap=function(){function m(){}var n,e,C,a,d,o;return n=TCFCommands_1.TCFCommands.PING,e=TCFCommands_1.TCFCommands.GET_TC_DATA,C=TCFCommands_1.TCFCommands.GET_IN_APP_TC_DATA,a=TCFCommands_1.TCFCommands.GET_VENDOR_LIST,d=TCFCommands_1.TCFCommands.ADD_EVENT_LISTENER,o=TCFCommands_1.TCFCommands.REMOVE_EVENT_LISTENER,m[n]=PingCommand_1.PingCommand,m[e]=GetTCDataCommand_1.GetTCDataCommand,m[C]=GetInAppTCDataCommand_1.GetInAppTCDataCommand,m[a]=GetVendorListCommand_1.GetVendorListCommand,m[d]=AddEventListenerCommand_1.AddEventListenerCommand,m[o]=RemoveEventListenerCommand_1.RemoveEventListenerCommand,m}();exports.CommandMap=CommandMap;