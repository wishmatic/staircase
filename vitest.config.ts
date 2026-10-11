import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			provider: "v8",
			reporter: ["text"],
			include: ["libs/**/src/**", "src/**"],
			exclude: ["**/*.test.ts", "**/*.test.tsx", "**/*.d.ts", "**/*.txt"],
		},
		server: {},
		projects: [
			{
				extends: true,
				test: {
					name: "node",
					environment: "node",
					include: ["libs/**/*.test.ts", "src/**/*.test.ts"],
				},
			},
			{
				extends: true,
				plugins: [react()],
				test: {
					name: "components",
					environment: "jsdom",
					include: ["libs/**/*.test.tsx", "src/**/*.test.tsx"],
					setupFiles: ["./vitest.setup.ts"],
				},
			},
		],
	},
});
