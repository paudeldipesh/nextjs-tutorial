import { DrinksList } from "@/components";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch drinks...");
  const result = await response.json();
  return result;
};

export default async function DrinksPage() {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
}
