 export const cleanPathname = (pathname: string) => {
  return pathname
    .replace(/\//g, "")           // remove all slashes
    .replace(/-/g, " ")           // replace hyphens with space
    .replace(/[0-9]/g, "")        // remove all numbers
    .replace(/[^a-zA-Z\s]/g, "")  // remove any remaining special characters
    .trim();                       // remove leading/trailing spaces
};