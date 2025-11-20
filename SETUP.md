# Setup Instructions

## Environment Variables

This project requires Supabase environment variables to be set. Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project settings: https://app.supabase.com/project/_/settings/api

**Note:** The project will run without these variables in development mode, but form submissions will fail. Make sure to set them for production.

## Node.js Version

This project requires Node.js >= 20.9.0. If you're using an older version, please upgrade Node.js.

## Installation & Running

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with your Supabase credentials (see above)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Fixed Issues

The following issues have been fixed:
- ✅ Invalid Tailwind CSS classes (`lg:ml-22`, `sm:w-22`, `sm:h-22`, `lg:py-30`)
- ✅ Supabase client now handles missing environment variables gracefully in development
- ✅ All TypeScript and linting errors resolved



