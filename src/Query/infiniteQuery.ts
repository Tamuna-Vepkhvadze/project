import { infiniteAPI } from "../http/Api";

export default async function infinite(LIMIT: number, pageParam: number) {
  const skip = (pageParam - 1) * LIMIT;  // აქ არის მთავარი ცვლილება
  const result = await infiniteAPI.get(`?limit=${LIMIT}&skip=${skip}`);
  return result.data;
}