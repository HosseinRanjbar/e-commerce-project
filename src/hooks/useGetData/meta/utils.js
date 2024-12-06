export function getParams(params) {
  if (!Object.keys(params).length) return "";
  let output = [];
  for (const element in params) {

    output.push(element + "=" + params[element]);
  }


  return output.join("&");
}