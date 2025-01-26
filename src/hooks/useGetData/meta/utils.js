export function getParams(params) {
  console.log(params, "params");

  if (!Object.keys(params).length) return "";
  let output = [];
  for (const element in params) {
    console.log(params[element], "params[element]");
    if (!params[element]) continue
    output.push(element + "=" + params[element]);
  }


  return output.join("&");
}