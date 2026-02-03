# Project Hub - Task Management Application

A modern, full-stack task management application built for the Frontend Developer Intern Assignment. Features user authentication, profile management, and complete CRUD operations on tasks.

## Tech Stack

### Frontend
- **React 18.3** with TypeScript
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS
- **Shadcn/ui** - High-quality React components
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation
- **React Query** - Server state management
- **Lucide Icons** - Beautiful SVG icons

### Backend & Database
- **Supabase** - Open-source Firebase alternative
  - PostgreSQL database
  - Built-in authentication
  - Row-Level Security (RLS)
  - Real-time API
- **JWT Authentication** - Secure session management
- **PostgreSQL** - Robust relational database

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or bun package manager
- Git

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd project-hub-main

# 2. Install dependencies
npm install
# or with bun
bun install

# 3. Configure environment variables
# Create .env file with your Supabase credentials
echo "VITE_SUPABASE_PROJECT_ID=your_id" > .env
echo "VITE_SUPABASE_PUBLISHABLE_KEY=your_key" >> .env
echo "VITE_SUPABASE_URL=your_url" >> .env

# 4. Start development server
npm run dev
# or
bun run dev
```

Visit http://localhost:5173 in your browser.

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_PROJECT_ID=nlcqjerkziuxsxrmtgov
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_SUPABASE_URL=https://nlcqjerkziuxsxrmtgov.supabase.co
```

Get your credentials from [Supabase Dashboard](https://supabase.com/dashboard)

## Database Setup

Database tables are automatically created via Supabase migrations:

**Tables:**
- `profiles` - User data (name, email, avatar)
- `tasks` - Task CRUD entity (title, description, status, priority)

**Security:**
- Row-Level Security (RLS) policies enforce user isolation
- Automatic profile creation on signup
- Indexed columns for performance

Migration file: [supabase/migrations/](supabase/migrations/)

## Features

### 🔐 Authentication
- User signup with email verification
- Secure login with password validation
- Password requirements: 6+ chars, uppercase, lowercase, number
- JWT session management
- Automatic session persistence
- Secure logout

### 📊 Dashboard
- User welcome message with profile name
- Task statistics (total, pending, in-progress, completed)
- Task completion rate
- Responsive grid layout
- Loading skeletons

### ✅ Task Management
- **Create**: Add tasks with title, description, status, priority
- **Read**: List tasks with real-time updates
- **Update**: Edit task details, change status/priority
- **Delete**: Remove tasks with confirmation dialog
- **Filter**: By status (pending, in-progress, completed)
- **Filter**: By priority (low, medium, high)
- **Search**: Search by title or description
- **UI**: Visual status/priority indicators

### 👤 Profile Management
- View user profile information
- Update full name and avatar URL
- Profile auto-created on signup
- Avatar image preview

## Project Structure

```
project-hub-main/
├── src/
│   ├── components/
│   │   ├── auth/              # Auth layouts
│   │   ├── dashboard/         # Dashboard components
│   │   │   ├── TaskCard.tsx
│   │   │   ├── TaskDialog.tsx
│   │   │   ├── TaskFilters.tsx
│   │   │   └── DashboardLayout.tsx
│   │   ├── ui/                # Shadcn components
│   │   ├── ProtectedRoute.tsx
│   │   └── NavLink.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx    # Auth state management
│   ├── hooks/
│   │   ├── useTasks.ts        # Task CRUD operations
│   │   └── useProfile.ts      # Profile operations
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Tasks.tsx
│   │   ├── Profile.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   ├── validations.ts     # Zod schemas
│   │   └── utils.ts
│   ├── integrations/
│   │   └── supabase/          # Supabase client
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   └── migrations/            # Database schema
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Security Implementation

✅ **Password Security**
- Bcrypt hashing via Supabase Auth
- No plain-text password storage
- Strong password requirements enforced

✅ **Authentication & Authorization**
- JWT tokens for session management
- Protected routes with ProtectedRoute component
- Automatic token refresh
- Session persistence

✅ **Data Security**
- Row-Level Security (RLS) policies
- Users can only access their own data
- Database constraints enforce data integrity

✅ **Input Validation**
- Client-side: Zod schema validation
- Server-side: PostgreSQL constraints
- Email format validation
- Required field validation

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run tests (Vitest)
npm run test:watch   # Watch mode testing
```

## Vercel Deployment

When deploying to Vercel, set the following in your project Environment Variables (Dashboard → Settings → Environment Variables):

- `VITE_SUPABASE_URL` = your Supabase URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` = your Supabase anon/public key
- `VITE_SUPABASE_PROJECT_ID` = your Supabase project id (optional)

Build settings:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 18.x (set by `engines.node` in `package.json`)

Make sure you do NOT commit a local `.env` file; use Vercel environment variables instead.

## Demo Credentials

You can test the application by creating a new account through the signup flow:

1. Go to `/signup`
2. Enter email and password meeting requirements
3. Verify email (check inbox or spam folder)
4. Login and start managing tasks

Or create test credentials:
- Email: `test@example.com`
- Password: `Test123456`

## API Documentation

### Authentication Endpoints (Supabase)
```
POST   /auth/v1/signup              # Register new user
POST   /auth/v1/token?grant_type=password # Login
POST   /auth/v1/logout              # Logout
GET    /auth/v1/user                # Get current user
```

### Database Queries (Supabase REST API)
```
GET    /rest/v1/profiles?select=*             # Get user profile
PUT    /rest/v1/profiles/id                   # Update profile
GET    /rest/v1/tasks?select=*                # List tasks
POST   /rest/v1/tasks                         # Create task
PATCH  /rest/v1/tasks/id                      # Update task
DELETE /rest/v1/tasks/id                      # Delete task
```

## Code Quality

- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Component modularity
- ✅ Custom hooks for logic reuse
- ✅ Consistent error handling
- ✅ Toast notifications for UX feedback
- ✅ Loading states and skeletons
- ✅ Mobile-first responsive design
- ✅ Accessibility best practices

## Performance Optimizations

- React Query for efficient data fetching and caching
- Code splitting with Vite
- Lazy component loading
- Image optimization
- CSS minification
- JavaScript minification

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Production Scalability

### Deployment
- Frontend: Deploy to Vercel, Netlify, or AWS Amplify
- Backend: Supabase managed infrastructure
- Database: Automated backups and disaster recovery

### CORS & Environment
- Supabase auto-handles CORS
- Use environment-specific Supabase projects
- Environment variables for configuration

### Database Optimization
- Indexes on user_id, status, priority columns
- Pagination for large datasets (recommended future enhancement)
- Connection pooling via Supabase

### Caching Strategy
- React Query request deduplication
- Service workers for offline support
- Browser cache for static assets

### Rate Limiting
- Supabase built-in rate limiting
- Frontend request throttling
- Auth endpoint protection

### Monitoring
- Error tracking with Sentry
- Supabase logs for database queries
- User analytics integration

### Security at Scale
- Rotate JWT secrets regularly
- Implement refresh token rotation
- DDoS protection (Cloudflare)
- Regular security audits
- Encrypt sensitive data at rest

## Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

### Environment variables not loading
- Ensure `.env` file is in root directory
- Restart dev server after creating `.env`
- Verify variable names match (VITE_ prefix required)

### Supabase connection issues
- Verify project ID and URL in `.env`
- Check Supabase project is active
- Ensure database migrations are applied

### Authentication errors
- Check email verification status
- Clear browser cookies/cache
- Verify password meets requirements

## Contributing

1. Create feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT

## Support

For issues or questions:
1. Check [requirements checklist](./REQUIREMENTS_CHECKLIST.md)
2. Review [Supabase documentation](https://supabase.com/docs)
3. Check React and React Router documentation
4. File an issue on GitHub

---

**Built with ❤️ for the Frontend Developer Intern Assignment**
