export function getParams(params) {

  if (!Object.keys(params).length) return "";
  let output = [];
  for (const element in params) {
    if (!params[element]) continue
    output.push(element + "=" + params[element]);
  }


  return output.join("&");
}