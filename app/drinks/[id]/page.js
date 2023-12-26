import Link from "next/link";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import drinkImage from "./drink.jpg";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) throw new Error("Failed to fetch a drink...");
  const result = await response.json();
  return result;
};

export default async function SingleDrinkPage({ params }) {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12 capitalize">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        alt={title}
        height={300}
        width={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
      />
      {/* <Image src={drinkImage} className="w-48 h-48 rounded" alt="drink" /> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}
