export const client = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: null,
  app: async function (url, method = "GET", body = null) {
    url = `${this.apiUrl}${url}`;
    const headers = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      headers,
      method,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.app(url);
  },
  post: function (url, body) {
    return this.app(url, "POST", body);
  },
  put: function (url, body) {
    return this.app(url, "PUT", body);
  },
  patch: function (url, body) {
    return this.app(url, "PATCH", body);
  },
  delete: function (url) {
    return this.app(url, "DELETE");
  },
};
