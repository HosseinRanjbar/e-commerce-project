export function getParams(params = {}) {
  if (!params || typeof params !== 'object' || !Object.keys(params).length) return "";
  let output = [];
  for (const element in params) {
    if (!params[element]) continue;
    output.push(element + "=" + params[element]);
  }
  return output.join("&");
}

export function constructQueryString(params = {}, inputParams = {}, inputPage, page, inputPageSize, pageSize) {
  let queryString = `${getParams(params)}&${getParams(inputParams)}`;
  if (inputPage) {
    queryString += `&page=${inputPage}`;
  } else if (page) {
    queryString += `&page=${page}`;
  }
  if (inputPageSize) {
    queryString += `&limit=${inputPageSize}`;
  } else if (pageSize) {
    queryString += `&limit=${pageSize}`;
  }
  if (queryString.charAt(queryString.length - 1) === '&') {
    queryString = queryString.slice(0, -1);
  }
  if (queryString) {
    queryString = '?' + queryString;
  }
  return queryString;
}