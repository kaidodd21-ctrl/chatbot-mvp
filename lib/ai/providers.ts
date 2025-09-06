import {
  customProvider,
} from 'ai';
import { gateway } from '@ai-sdk/gateway';
import { isTestEnvironment } from '../constants';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': gateway.languageModel('openai/gpt-4'),
        'chat-model-reasoning': gateway.languageModel('openai/gpt-4'),
        'title-model': gateway.languageModel('openai/gpt-4'),
        'artifact-model': gateway.languageModel('openai/gpt-4'),
      },
    });

