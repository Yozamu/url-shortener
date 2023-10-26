import { Status } from '@/types/commonTypes';
import { create } from 'zustand';

type ShrinkerState = {
  message: { status: Status; content: string };
  shortUrl: string;
  setMessage: (_status: Status, _content: string) => void;
  setShortUrl: (_url: string) => void;
};

export const useShrinkerStore = create<ShrinkerState>()((set) => ({
  message: { status: '', content: '' },
  shortUrl: '',
  setMessage: (status, content) => set((_state) => ({ message: { status, content } })),
  setShortUrl: (url) => set((_state) => ({ shortUrl: url })),
}));
