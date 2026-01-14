import { claudeCodeEnv } from "./claude-settings.js";
import { unstable_v2_prompt } from "@anthropic-ai/claude-agent-sdk";
import type { SDKResultMessage } from "@anthropic-ai/claude-agent-sdk";
import { app } from "electron";
import { join, delimiter } from "path";
import { homedir, platform } from "os";

// Get Claude Code CLI path for packaged app
export function getClaudeCodePath(): string | undefined {
  if (app.isPackaged) {
    return join(
      process.resourcesPath,
      'app.asar.unpacked',
      'node_modules',
      '@anthropic-ai',
      'claude-agent-sdk',
      'cli.js'
    );
  }
  return undefined;
}

// Build enhanced PATH for packaged environment
export function getEnhancedEnv(): Record<string, string | undefined> {
  const home = homedir();
  const isWin = platform() === 'win32';

  const additionalPaths = isWin
    ? [
        `${home}\\.bun\\bin`,
        `${home}\\AppData\\Local\\Volta\\bin`,
        `${home}\\AppData\\Roaming\\npm`,
        `C:\\Program Files\\nodejs`
      ]
    : [
        '/usr/local/bin',
        '/opt/homebrew/bin',
        `${home}/.bun/bin`,
        `${home}/.nvm/versions/node/v20.0.0/bin`,
        `${home}/.nvm/versions/node/v22.0.0/bin`,
        `${home}/.nvm/versions/node/v18.0.0/bin`,
        `${home}/.volta/bin`,
        `${home}/.fnm/aliases/default/bin`,
        '/usr/bin',
        '/bin',
      ];

  const currentPath = process.env.PATH || '';
  const newPath = [...additionalPaths, currentPath].join(delimiter);

  return {
    ...process.env,
    PATH: newPath,
  };
}

export const claudeCodePath = getClaudeCodePath();
export const enhancedEnv = getEnhancedEnv();

export const generateSessionTitle = async (userIntent: string | null) => {
  if (!userIntent) return "New Session";

  const result: SDKResultMessage = await unstable_v2_prompt(
    `please analynis the following user input to generate a short but clearly title to identify this conversation theme:
    ${userIntent}
    directly output the title, do not include any other content`, {
    model: claudeCodeEnv.ANTHROPIC_MODEL,
    env: enhancedEnv,
    pathToClaudeCodeExecutable: claudeCodePath,
  });

  if (result.subtype === "success") {
    return result.result;
  }


  return "New Session";
};
