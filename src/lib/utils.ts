import type { ConnectorConfigType } from "@/types/auth";

export const get_error_message = (error: unknown): string => {
  const message = error instanceof Error ? error.message : "Unknown error";

  return message;
};

export const get_auth_key = (config: ConnectorConfigType): string => {
  const auth_token = btoa(
    config.username.replace(/\s/gim, "") +
      ":" +
      config.password.replace(/\s/gim, ""),
  );
  return auth_token;
};
