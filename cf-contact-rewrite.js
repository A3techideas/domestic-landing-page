function handler(event) {
  var request = event.request;
  if (request.uri === "/contact-us" || request.uri === "/contact-us/") {
    request.uri = "/";
  }
  return request;
}
