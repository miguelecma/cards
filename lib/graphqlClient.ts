/**
 * Simple GraphQL client helper for making queries to the GraphQL API
 */
export async function executeQuery<T = unknown>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
  const endpoint = `${baseUrl}/api/graphql`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message || 'GraphQL query failed');
  }

  return json.data;
}
