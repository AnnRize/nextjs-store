export function starsArray(productRating: number) {
   const arr = [];
   let rate = productRating;

   for (let i = 0; i < 5; i++) {
      if (rate >= 1) {
         arr.push(1);
      } else if (rate > 0 && rate < 1) {
         arr.push(Number(rate.toFixed(1)));
      } else {
         arr.push(0);
      }
      rate--;
   }
   return arr.sort((a, b) => b - a);
}
