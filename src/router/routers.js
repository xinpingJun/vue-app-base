export const routers  = [
  {
    path: "/test",
    name: "test",
    component: resolve => {
      require(["iviews/test/"], resolve);
    }
  },
];
