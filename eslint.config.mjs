const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...require("eslint-config-next/core-web-vitals"),
  ...require("eslint-config-next/typescript"),
];

export default eslintConfig;
