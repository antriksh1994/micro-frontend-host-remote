export const mfConfig = {
  name: "remoteEntry",
  exposes: {
    "./Counter": "./src/Counter.tsx"
  },
  shared: ["react", "react-dom"],
};
