import { Fields } from '../../model';
import { BooleanEncoder } from './BooleanEncoder';
import { DateEncoder } from './DateEncoder';
import { FixedVectorEncoder } from './FixedVectorEncoder';
import { IntEncoder } from './IntEncoder';
import { LangEncoder } from './LangEncoder';
import { PurposeRestrictionVectorEncoder } from './PurposeRestrictionVectorEncoder';
import { VendorVectorEncoder } from './VendorVectorEncoder';
export declare class FieldEncoderMap {
    static readonly [Fields.version]: typeof IntEncoder;
    static readonly [Fields.created]: typeof DateEncoder;
    static readonly [Fields.lastUpdated]: typeof DateEncoder;
    static readonly [Fields.cmpId]: typeof IntEncoder;
    static readonly [Fields.cmpVersion]: typeof IntEncoder;
    static readonly [Fields.consentScreen]: typeof IntEncoder;
    static readonly [Fields.consentLanguage]: typeof LangEncoder;
    static readonly [Fields.vendorListVersion]: typeof IntEncoder;
    static readonly [Fields.policyVersion]: typeof IntEncoder;
    static readonly [Fields.isServiceSpecific]: typeof BooleanEncoder;
    static readonly [Fields.useNonStandardStacks]: typeof BooleanEncoder;
    static readonly [Fields.specialFeatureOptins]: typeof FixedVectorEncoder;
    static readonly [Fields.purposeConsents]: typeof FixedVectorEncoder;
    static readonly [Fields.purposeLegitimateInterests]: typeof FixedVectorEncoder;
    static readonly [Fields.purposeOneTreatment]: typeof BooleanEncoder;
    static readonly [Fields.publisherCountryCode]: typeof LangEncoder;
    static readonly [Fields.vendorConsents]: typeof VendorVectorEncoder;
    static readonly [Fields.vendorLegitimateInterests]: typeof VendorVectorEncoder;
    static readonly [Fields.publisherRestrictions]: typeof PurposeRestrictionVectorEncoder;
    static readonly segmentType: typeof IntEncoder;
    static readonly [Fields.vendorsDisclosed]: typeof VendorVectorEncoder;
    static readonly [Fields.vendorsAllowed]: typeof VendorVectorEncoder;
    static readonly [Fields.publisherConsents]: typeof FixedVectorEncoder;
    static readonly [Fields.publisherLegitimateInterests]: typeof FixedVectorEncoder;
    static readonly [Fields.numCustomPurposes]: typeof IntEncoder;
    static readonly [Fields.publisherCustomConsents]: typeof FixedVectorEncoder;
    static readonly [Fields.publisherCustomLegitimateInterests]: typeof FixedVectorEncoder;
}
