import { trackError } from "../utils/error";

export async function getData<Data, Key extends string>(
    url: Key,
): Promise<Data> {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw await response.json();
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      trackError(error as Error);
      throw error;
    }
}

export async function getDataWithArgs<
  Data, 
  Key extends string, 
  ExtraArgs extends object,
>(url: Key, { arg }: { arg: ExtraArgs }): Promise<Data> {
  try{
    let queryString = '';
    for (const [key, value] of Object.entries(arg)) {
      queryString += `&${key}=${value}`;
    }
    const response = await fetch(`${url}?${queryString.replace('&', '')}`, {
      method: 'GET',
    });

    if(!response.ok) {
      throw await response.json();
    }

    return await response.json();
  } catch(error) {
    console.error('Error fetching data:', error);
    trackError(error as Error);
    throw error;
  }
}