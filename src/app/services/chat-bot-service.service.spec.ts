import { TestBed } from '@angular/core/testing';

import { ChatBotServiceService } from './chat-bot-service.service';

describe('ChatBotServiceService', () => {
  let service: ChatBotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
