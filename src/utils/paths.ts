
// Avoid relying on `import.meta` so the Webflow bundler (CommonJS) can parse this file.

const runtimeBaseUrl =

typeof window !== "undefined"

? window.location.origin

: typeof process !== "undefined" && process.env.BASE_URL

? process.env.BASE_URL

: "";



export const baseUrl = runtimeBaseUrl.replace(/\/$/, "");









/** /src/utils/paths.ts



/**

* Utility function to get the base URL for the application

*/

export const getBaseUrl = () => {

return "";

};



/**

* Utility function to create a URL with the base path

*/

export const createUrl = (path: string) => {

const base = getBaseUrl();

const cleanPath = path.startsWith("/") ? path : `/${path}`;

return base ? `${base}${cleanPath}` : cleanPath;

};

