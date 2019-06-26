export interface GVLMap<T> {
  [id: string]: T;
}

export interface GVLMapItem {
  id: number;
  name: string;
}

export interface Feature extends GVLMapItem {
  description: string;
  descriptionLegal: string;
};

export interface Purpose extends GVLMapItem {
  description: string;
  descriptionLegal: string;
  /*
   * default=true  false means CMPs should never afford users the means to
   * provide an opt-in consent choice
   */
  consentable? : boolean;
  /**
   * default=true  false means CMPs should never afford users the means to
   * exercise a right to object
   */
  rightToObject?: boolean;
};

export interface Stack extends GVLMapItem {
  purposes: number[];
  specialPurposes: number[];
  description: string;
}

export interface GVLBase {
  gvlSpecificationVersion: number;
  vendorListVersion: number;
  tcfPolicyVersion: number;
  lastUpdated: string | Date;
  purposes: GVLMap<Purpose>;
  specialPurposes: GVLMap<Purpose>;
  features: GVLMap<Feature>;
  specialFeatures: GVLMap<Feature>;
  stacks: GVLMap<Stack>;
}