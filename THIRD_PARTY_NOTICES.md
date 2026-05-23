# Third-Party Notices

This project depends on open-source packages from the JavaScript ecosystem.
Production dependency licenses were reviewed with:

```bash
pnpm licenses list --prod
```

At the time of review, production dependencies were reported under these
license families: MIT, Apache-2.0, Apache-2.0 AND LGPL-3.0-or-later, ISC,
BSD-3-Clause, CC-BY-4.0, Unlicense, and 0BSD.

Notable direct runtime dependencies:

| Package | License |
| --- | --- |
| @radix-ui/react-checkbox | MIT |
| @radix-ui/react-dropdown-menu | MIT |
| @radix-ui/react-label | MIT |
| @radix-ui/react-slot | MIT |
| @supabase/ssr | MIT |
| @supabase/supabase-js | MIT |
| class-variance-authority | Apache-2.0 |
| clsx | MIT |
| drizzle-orm | Apache-2.0 |
| lucide-react | ISC |
| next | MIT |
| next-themes | MIT |
| postgres | Unlicense |
| react | MIT |
| react-dom | MIT |
| tailwind-merge | MIT |

Generated UI components in `components/ui` follow the shadcn/ui component
model and use permissively licensed Radix UI primitives.

Static visual assets under `public/images` and generated metadata images are
project-created assets for this repository. They replace unverified stock or
template images so the repository can be published without unknown photo
provenance.
