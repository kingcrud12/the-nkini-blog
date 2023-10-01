import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "4q9v1coa",
  dataset: "production",
  apiVersion: "2023-09-25",
  useCdn: false,
};

const client = createClient(config);

export default client;