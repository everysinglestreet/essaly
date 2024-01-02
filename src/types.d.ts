import { Request, Response } from 'express';

export interface Context {
  request: Request;
  response: Response;
}

export interface EssalyResponse {
  data?: T | null;
  metadata: {
    code: number;
    message?: string | null;
    success: boolean;
  };
}

export interface ExecuteTilemakerInput {
  config: string;
  input: string;
  output: string;
}

export interface ExecuteOsmosisInput {
  input: string;
  output: string;
}

export interface ExecuteRegenerateOverlay {
  osmosisReadXml: string;
  tilemakerConfig: string;
}
