import { useState } from "react";

export type RequestType<Params, Response> = (p: Params) => Promise<Response>;

export function useRequest<Params, Response>(
  request: RequestType<Params, Response>
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Response>();
  const [error, setError] = useState<string>();

  async function execute(params: Params) {
    try {
      const response = await request(params);
      setData(response);
    } catch (error) {
      setError((error as { message: string })?.message as string);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    data,
    error,
    execute,
  };
}
