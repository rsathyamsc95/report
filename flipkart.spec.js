import {test,expect} from '@playwright/test'
import { text } from 'node:stream/consumers';
test("myntra kids t-shirt",async ({page}) => {
  await page.goto("https://www.myntra.com/boy-tshirts");
  await page.waitForTimeout(2000);
  const list=await page.locator('//li[@class="product-base"]').count();
  await page.waitForTimeout(2000);
  console.log("Number of  t-shirts   :" +list);
  const pricetexts =await page.locator('//li[@class="product-base"]//div[@class="product-price"]//span[@class="product-discountedPrice" or(text() and not(@class))]').allInnerTexts();
   console.log("list of price all t-shirts   :" +pricetexts);
// Extract product name + price
  const products = await page.$$eval('.product-base', items =>
    items.map(el => {
      const name = el.querySelector('.product-product')?.innerText || 'No Name';
      const priceText = el.querySelector('.product-price')?.innerText || '';

      const match = priceText.match(/Rs\.?\s?(\d+)/);
      const price = match ? parseInt(match[1]) : null;

      return { name, price };
    }).filter(p => p.price !== null)
  );

  // Find minimum price product using for loop
  let minProduct = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price < minProduct.price) {
      minProduct = products[i];
    }
  }

  console.log("Total products:", products.length);
  console.log("Minimum price:", minProduct.price);
  console.log("Product name:", minProduct.name);
  



 })