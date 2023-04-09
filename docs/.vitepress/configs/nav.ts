import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Blog',
    link: 'https://notes.fe-mm.com'
  },
  {
    text: 'AI',
    items: [
      { text: 'Speech', link: 'https://speech.sherrystar.top' },
      { text: 'Assistant', link: 'https://chat.sherrystar.top' },
      { text: 'Chat', link: 'https://gpt.sherrystar.top' }
    ]
  },
  {
    text: 'Book',
    link: 'https://book.sherrystar.top:444/'
  }
]
