export function getParams(params1) {
    if (!params1) return "";
    let output = [];
    for (const element in params1) {
      output.push(element + "=" + params1[element]);
    }

    return output.join("&");
}