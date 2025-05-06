# Architecture Overview

## 1. Overview

This is a full-stack web application built using a modern JavaScript/TypeScript stack. The project follows a client-server architecture with a React frontend and an Express.js backend. The application appears to be a website for a financial institution called "Shivrai Mahila Urban Co-op. Credit Society Ltd." offering banking services including savings accounts, loans, and fixed deposits.

The codebase is organized as a monorepo with clear separation between client and server code, using shared types and schemas between them.

## 2. System Architecture

The system follows a traditional three-tier architecture:

### Client Tier
- React-based SPA (Single Page Application)
- UI components from shadcn/ui (Radix UI primitives with Tailwind CSS)
- State management using React Query
- Client-side routing with Wouter

### Server Tier
- Express.js REST API
- API endpoints prefixed with `/api`
- Built with TypeScript for type safety
- Structured with middleware for error handling and logging

### Data Tier
- PostgreSQL database (via Neon Database)
- Drizzle ORM for database queries and schema management
- Schema-based data validation using Zod

## 3. Key Components

### Frontend Components

The frontend is organized around a set of main page components and reusable UI components:

1. **Page Components**
   - `Home.tsx`: Main landing page composed of multiple section components
   - `NotFound.tsx`: 404 error page

2. **Section Components**
   - `Header.tsx`: Navigation and site header
   - `Hero.tsx`: Hero section with call-to-actions
   - `Features.tsx`: Highlights of key features
   - `About.tsx`: Information about the organization
   - `Services.tsx`: Banking services offered
   - `AccountTypes.tsx`: Different account options
   - `CTA.tsx`: Call-to-action section
   - `Contact.tsx`: Contact information
   - `Footer.tsx`: Site footer with links and information

3. **UI Components**
   - Extensive library of UI components from shadcn/ui
   - Components are based on Radix UI primitives with Tailwind styling
   - Custom utility components for consistent styling

### Backend Components

The backend follows a modular structure:

1. **Entry Point**
   - `server/index.ts`: Main server entry point that configures Express

2. **Routes**
   - `server/routes.ts`: API route definitions

3. **Storage Interface**
   - `server/storage.ts`: Abstract storage interface with in-memory implementation
   - Designed to be replaceable with a database implementation

4. **Database Schema**
   - `shared/schema.ts`: Defines database tables and validation schemas
   - Currently includes a basic user model with username/password

5. **Development Tools**
   - `server/vite.ts`: Development server configuration with Vite

## 4. Data Flow

### Client-Server Communication

1. **API Requests**
   - Client makes API requests to endpoints prefixed with `/api`
   - Requests are handled by the Express router
   - Responses are JSON-formatted

2. **Data Fetching**
   - React Query is used for data fetching, caching and state management
   - Custom query client configured in `client/src/lib/queryClient.ts`

3. **Form Handling**
   - Forms use React Hook Form (based on imported resolvers)
   - Data validation likely uses Zod schemas

### Database Interactions

1. **ORM Layer**
   - Drizzle ORM provides type-safe database access
   - Schema defined in `shared/schema.ts`
   - Data is validated using Zod schemas derived from Drizzle schema

2. **Current Implementation**
   - Currently using in-memory storage via `MemStorage` class
   - Designed to be replaced with actual Drizzle/PostgreSQL implementation

## 5. External Dependencies

### Frontend Dependencies
- **React**: UI library
- **Wouter**: Lightweight router for React
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Component library based on Radix UI
- **Radix UI**: Unstyled, accessible UI components
- **React Query**: Data fetching and state management
- **React Hook Form**: Form handling
- **Zod**: Schema validation

### Backend Dependencies
- **Express**: Web server framework
- **Drizzle ORM**: Database ORM
- **Neon Database**: PostgreSQL provider
- **Connect-PG-Simple**: PostgreSQL session store

### Development Dependencies
- **Vite**: Frontend build tool and dev server
- **TypeScript**: Static typing
- **esbuild**: JavaScript bundler
- **tsx**: TypeScript execution

## 6. Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development**
   - `npm run dev`: Runs the development server with hot-reloading
   - Uses Vite for frontend development server
   - Backend runs with tsx for TypeScript execution

2. **Build Process**
   - `npm run build`: Builds both client and server
   - Frontend: Vite builds static assets to `dist/public`
   - Backend: esbuild bundles server code to `dist/index.js`

3. **Production**
   - `npm run start`: Runs the production build
   - Serves static assets from the `dist/public` directory
   - API endpoints handled by Express

4. **Database**
   - Uses `@neondatabase/serverless` for PostgreSQL connectivity
   - Environment variable `DATABASE_URL` for database connection
   - Schema migrations with Drizzle using `npm run db:push`

The application is designed to work in both development and production environments with appropriate configuration for each.