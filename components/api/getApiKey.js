const keys = [
  process.env.NEXT_PUBLIC_API_KEY_1,
  process.env.NEXT_PUBLIC_API_KEY_2,
  process.env.NEXT_PUBLIC_API_KEY_3,
];

let apiKeyCount = 0;
let counter = 0;

export default function getApiKey() {
  if (counter % 5 === 0 && counter !== 0) {
    apiKeyCount++;
  }
  if (apiKeyCount > keys.length - 1) {
    apiKeyCount = 0;
  }
  counter++;
  return keys[apiKeyCount];
}

// export function getApiKey(requestCount) {
//   requestCount++;
//   return keys[requestCount % 3];
// }
