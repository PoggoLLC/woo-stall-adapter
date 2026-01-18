export interface WooTaxRateType {
  id: number;
  country: string;
  state: string;
  postcode: string;
  city: string;
  rate: string;
  name: string;
  priority: number;
  compound: boolean;
  shipping: boolean;
  order: number;
  class: string;
  postcodes: string[];
  cities: string[];
  _links: {
    self: Array<{
      href: string;
      targetHints?: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
  };
}

export interface WooTaxClassType {
  slug: string;
  name: string;
  _links: {
    collection: Array<{
      href: string;
    }>;
  };
}
