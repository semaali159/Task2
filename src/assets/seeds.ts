import type { Chat, Images, Message } from "../types";

const avatar = (n: number) => `https://i.pravatar.cc/160?img=${n}`;
const dog = (n: number) => `https://loremflickr.com/320/320/dog?lock=${n}`;
const cat = (n: number) => `https://loremflickr.com/320/320/cat?lock=${n}`;

export const chats: Chat[] = [
  { id: 'james', name: 'James', preview: 'Thank you! That was very helpful!', avatar: avatar(12) },
  { id: 'will', name: 'Will Kenny', preview: 'I know... I’m trying to get the funds.', avatar: avatar(33) },
  {
    id: 'beth',
    name: 'Beth Williams',
    preview: 'I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm...',
    avatar: avatar(47),
  },
  {
    id: 'rev',
    name: 'Rev Shawn',
    preview: 'Wanted to ask if you’re available for a portrait shoot next week.',
    avatar: avatar(5),
  },
];

export const conversation: Message[] = [
  {
    id: 1,
    from: 'them',
    text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
  },
  {
    id: 2,
    from: 'me',
    text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
  },
  { id: 3, from: 'them', text: 'Thank you! That was very helpful!' },
];

export const images: Images[] = [
  ...Array.from({ length: 36 }, (_, i): Images => ({ id: `d${i}`, tag: 'dog', src: dog(i + 1), alt: 'Dog' })),
  ...Array.from({ length: 24 }, (_, i): Images => ({ id: `c${i}`, tag: 'cat', src: cat(i + 1), alt: 'Cat' })),
];

export const meAvatar = avatar(15);
export const themAvatar = avatar(12);
