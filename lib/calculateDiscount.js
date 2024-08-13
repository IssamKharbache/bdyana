export function calculateDiscountPercentage(normalPrice, salePrice) {
  // Ensure normalPrice and salePrice are numbers and greater than zero
  if (
    typeof normalPrice !== "number" ||
    typeof salePrice !== "number" ||
    normalPrice <= 0 ||
    salePrice < 0
  ) {
    throw new Error(
      "Invalid input: normalPrice and salePrice must be positive numbers."
    );
  }

  // Calculate the discount amount
  const discountAmount = normalPrice - salePrice;

  // Calculate the discount percentage
  const discountPercentage = (discountAmount / normalPrice) * 100;

  // Return the discount percentage rounded to 2 decimal places
  return Math.round(discountPercentage * 100) / 100;
}
