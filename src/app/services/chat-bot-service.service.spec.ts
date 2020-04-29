import { TestBed } from '@angular/core/testing';

import { ChatBotServiceService } from './chat-bot-service.service';

describe('ChatBotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatBotServiceService = TestBed.get(ChatBotServiceService);
    expect(service).toBeTruthy();
  });
});
