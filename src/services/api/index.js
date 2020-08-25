export const retrieveIssues = () =>
  fetch(process.env.REACT_APP_ENDPOINT + '?per_page=10')
