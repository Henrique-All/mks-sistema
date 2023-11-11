import { Product } from "@/@types/product";
import localforage from "localforage";

export async function getProducts(): Promise<Product[]> {
  try {
    const products = await localforage.getItem<Product[]>("@appreceitas");
    return products || [];
  } catch (error) {
    console.error("Error getting favorites:", error);
    return [];
  }
}

export async function saveProducts(newItem: Product): Promise<void> {
  try {
    const myProductss = await getProducts();
    const hasItem = myProductss.some((item) => item.id === newItem.id);

    if (hasItem) {
      return;
    }

    const updatedProducts = [...myProductss, newItem];
    await localforage.setItem("@appreceitas", updatedProducts);
  } catch (error) {
    console.error("Error saving favorites:", error);
  }
}

export async function deleteProducts(id: number): Promise<Product[]> {
  try {
    const myFavorites = await getProducts();
    const updatedFavorites = myFavorites.filter((item) => item.id !== id);

    await localforage.setItem("@appreceitas", updatedFavorites);
    return updatedFavorites;
  } catch (error) {
    console.error("Error deleting favorites:", error);
    return [];
  }
}

export async function isFavorite(receipe: Product): Promise<boolean> {
  try {
    const myFavorites = await getProducts();
    return myFavorites.some((item) => item.id === receipe.id);
  } catch (error) {
    console.error("Error checking if it is a favorite:", error);
    return false;
  }
}
