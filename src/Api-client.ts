export type FeatureFlags = "ENABLE_SHORT_FORM";

const baseUrl = "http://localhost:4000/featureflags/all";

export async function getFeatureFlags(): Promise<FeatureFlagDto[]> {
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!response.ok) {
    throw response.status;
  }
  return response.json();
}

export type FeatureFlagDto = {
  id: string;
  name: string;
  value: boolean;
  target_type: string;
  target_selector: string | null;
  created_at: string;
  updated_at: string;
};
