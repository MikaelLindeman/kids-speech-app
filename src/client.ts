import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "qkl0pvta",
  dataset: "kids-speech",
  useCdn: true,
});

export { client };
