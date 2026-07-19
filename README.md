# Circle Apex Axis

Official digital distribution hub for Circle Apex Axis. Contains archival metadata, track manifests, and primary interface for independent musical compositions including *Kingdom of the Sun*.

## About

Circle Apex Axis is an NYC-based creative project exploring avant-rock, electronica, and instrumental composition. This site serves as the central hub for all releases, news, and community resources for listeners and collaborators.

## Follow

- 🎧 Apple Music — https://music.apple.com/artist/1887059935
- 💿 Bandcamp — https://circleapexaxis.bandcamp.com/album/hidden-name
- 🔗 SoundClick — https://www.soundclick.com/
- 🌐 Bluesky — https://bsky.app/profile/circleapexaxis.bsky.social

## Features

- 🎵 **Featured Releases** - Direct links to all platforms
- 📰 **News & Updates** - Blog section for announcements and archival updates
- 📧 **Newsletter Signup** - Email integration for exclusive updates
- 🛍️ **Support Links** - Bandcamp, Patreon, and SoundClick connections
- 📊 **Analytics** - Built-in tracking for audience insights

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form + Zod** - Form handling
- **Vercel Analytics** - Event tracking

## Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck
```

## Deployment

This site is optimized for **Vercel** deployment:

1. Push code to GitHub
2. Import repo in Vercel
3. Auto-deploys on every push

## Environment Variables

Optional (for analytics and email integrations):

```env
VITE_MAILCHIMP_API_KEY=your_key_here
VITE_PLAUSIBLE_DOMAIN=circleapexaxis.com
```

## License

MIT © Circle Apex Axis
