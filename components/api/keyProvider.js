const API_KEY_1 = "sjapce6gjgDFgpRHlc7wrzhza_9dbFji";
const API_KEY_2 = "9TPV0rQTkwUPIDiOSjwFQVvp7wYrFYby";
const API_KEY_3 = "VTwDsU6s6spJdOcQ8z2Sf43Pz9Ns1TdA";

const keys = [API_KEY_1, API_KEY_2, API_KEY_3];

let apiKeyCount = 0;
let counter = 0;

export function keyProvider() {
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
