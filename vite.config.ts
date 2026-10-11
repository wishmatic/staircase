import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const REACT_PACKAGES =
	/node_modules[\\/](?:react|react-dom|react-router|react-icons|scheduler|use-sync-external-store)[\\/]/;
const MANTINE_PACKAGES = /node_modules[\\/]@mantine[\\/]/;
const MARKDOWN_PACKAGES =
	/node_modules[\\/](?:react-markdown|remark(?:-[a-z-]+)?|rehype(?:-[a-z-]+)?|unified|vfile(?:-[a-z-]+)?|mdast-util-[a-z-]+|micromark(?:-[a-z-]+)?|hast-util-[a-z-]+|hastscript|unist-util-[a-z-]+|property-information|space-separated-tokens|comma-separated-tokens|character-entities(?:-[a-z0-9]+)?|decode-named-character-reference|html-url-attributes|inline-style-parser|style-to-object|markdown-table|longest-streak|parse-entities|web-namespaces|html-void-elements|trim-lines|devlop|bail|trough|is-plain-obj|ccount|zwitch|escape-string-regexp)[\\/]/;
const WORKSPACE_PACKAGES =
	/(?:node_modules[\\/]@staircase[\\/]|libs[\\/](?:agent|agent-ui|character|character-ui|components|imagegen|imagegen-ui|styles|styles-ui|textgen|textgen-ui|tools|tools-ui|world|world-ui)[\\/])/;

export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	build: {
		rolldownOptions: {
			output: {
				codeSplitting: {
					groups: [
						{ name: "react", test: REACT_PACKAGES, priority: 2 },
						{ name: "mantine", test: MANTINE_PACKAGES, priority: 2 },
						{ name: "markdown", test: MARKDOWN_PACKAGES, priority: 2 },
						{ name: "staircase", test: WORKSPACE_PACKAGES, priority: 2 },
					],
				},
			},
		},
	},
});
