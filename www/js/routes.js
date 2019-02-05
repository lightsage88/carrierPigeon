var routes = [
    // Index page
    {
      path: "/",
      url: "./index.html",
      name: "home"
    },// Default route (404 page). MUST BE THE LAST
{
    path: "(.*)",
    componentUrl: "./pages/404.html"
  }
];