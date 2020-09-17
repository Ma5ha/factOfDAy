export const api = {
  base: "https://favqs.com/api/",
  qotd: "qotd",
  key: "e33d7ad0df38e1f6070a62b3a4ac2e43",
  signUp: () => api.base + "users",
  login: () => api.base + "session",
  quotes: () => api.base + "quotes",
  typehead: () => api.base + "typeahead",
  favorite: (id: number) => api.quotes() + `/${id}/fav`,
  upvote: (id: number) => api.quotes() + `/${id}/upvote`,
  downvote: (id: number) => api.quotes() + `/${id}/downvote`,
  activities: () => `${api.base}/activities`,
};
