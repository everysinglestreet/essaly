import { exec } from 'child_process';

export const execute = async ({ command }: { command: string }): Promise<unknown> =>
  new Promise((resolve, reject) =>
    exec(command, {}, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    }),
  );
