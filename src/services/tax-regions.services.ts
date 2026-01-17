import { get_auth_key, get_error_message } from "@/lib/utils";
import type { ConnectorConfigType } from "@/types/auth";
import type { UnifiedTaxRegionType } from "@use-stall/types";

const list = async (props: {
  connector_config: ConnectorConfigType;
  query?: string;
}): Promise<UnifiedTaxRegionType[]> => {
  try {
    const { connector_config, query } = props;
    const key = get_auth_key(connector_config);
    const endpoint = `${connector_config.endpoint}/wp-json/wc/v3/taxes?${query}`;

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${key}`,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    console.log(data);

    return [];
  } catch (error: unknown) {
    const message = get_error_message(error);
    throw new Error(message);
  }
};

const retrieve = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
}): Promise<UnifiedTaxRegionType> => {
  try {
    const { connector_config, id } = props;
    const key = get_auth_key(connector_config);
    const endpoint = `${connector_config.endpoint}/wp-json/wc/v3/taxes?id=${id}`;

    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${key}`,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }
    return data as UnifiedTaxRegionType;
  } catch (error) {
    throw error;
  }
};

const create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxRegionType;
}): Promise<UnifiedTaxRegionType> => {
  try {
    const { connector_config, data: region } = props;
    const key = get_auth_key(connector_config);
    const endpoint = `${connector_config.endpoint}/wp-json/wc/v3/taxes`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${key}`,
      },
      body: JSON.stringify(region),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data as UnifiedTaxRegionType;
  } catch (error) {
    throw error;
  }
};

const update = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
  data: Partial<UnifiedTaxRegionType>;
}): Promise<UnifiedTaxRegionType> => {
  try {
    const { connector_config, data: region, id } = props;
    const key = get_auth_key(connector_config);
    const endpoint = `${connector_config.endpoint}/wp-json/wc/v3/taxes/${id}`;

    const res = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${key}`,
      },
      body: JSON.stringify(region),
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return data as UnifiedTaxRegionType;
  } catch (error) {
    throw error;
  }
};

const _delete = async (props: {
  connector_config: ConnectorConfigType;
  id: string;
}): Promise<void> => {
  try {
    const { connector_config, id } = props;
    const key = get_auth_key(connector_config);
    const endpoint = `${connector_config.endpoint}/wp-json/wc/v3/taxes/${id}`;

    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization: `Basic ${key}`,
      },
    });

    const data = (await res.json()) as unknown as any;

    if (!res.ok) {
      const message = data?.error || "We ran into an error !";
      throw new Error(message);
    }

    return;
  } catch (error) {
    throw error;
  }
};

const bulk_create = async (props: {
  connector_config: ConnectorConfigType;
  data: UnifiedTaxRegionType[];
}): Promise<UnifiedTaxRegionType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_update = async (props: {
  connector_config: ConnectorConfigType;
  data: Array<{ id: string; data: Partial<UnifiedTaxRegionType> }>;
}): Promise<UnifiedTaxRegionType[]> => {
  try {
    return [];
  } catch (error) {
    throw error;
  }
};

const bulk_delete = async (props: {
  connector_config: ConnectorConfigType;
  ids: string[];
}): Promise<void> => {
  try {
    return;
  } catch (error) {
    throw error;
  }
};

export const tax_regions = {
  list,
  retrieve,
  create,
  update,
  delete: _delete,
  bulk_create,
  bulk_update,
  bulk_delete,
};
