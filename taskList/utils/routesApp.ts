interface Router {
  path: string;
  label: string;
}

export default () => {
  const routes: Router[] = [{ path: "/", label: "Home" }];

  return {
    routes,
  };
};
