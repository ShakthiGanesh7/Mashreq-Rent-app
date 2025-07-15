# Mashreq Rent Advance Loan App

This document provides essential guidance for AI agents working in this codebase.

## Design Reference
- Figma Design: [Mashreq Rent Advance](https://www.figma.com/design/qbL6yI5sHkgR4kJJEtnlZM/Mashreq---Rent-Advance?node-id=0-1&p=f&t=TCaVRqpx9dpkip0N-0)
- All components should strictly follow the Figma design specifications for:
  - Colors
  - Typography
  - Spacing
  - Responsive behavior
  - Component alignment
  - Interactive states

## Project Overview

A Next.js application for Mashreq Bank's Rent Advance Loan product, built with:
- Next.js 14+ with App Router
- TypeScript
- Material-UI (MUI) with custom theme
- Styled Components for custom styling

## Key Architecture Patterns

### Component Structure
- `src/app/components/`: Reusable UI components
- `src/app/theme/`: MUI theme customization
- Pages follow Next.js 14 App Router conventions

### Styling Approach
1. MUI Theme Configuration (`src/app/theme/theme.ts`):
   - Custom color palette with brand colors
   - Typography settings with Droid Sans font
   - Component-level style overrides

2. Component Styling Pattern:
   ```typescript
   const StyledComponent = styled(MUIComponent)({
     // Component-specific styles
   });
   ```

3. Responsive Design:
   - Uses MUI's breakpoint system
   - Mobile-first approach
   - Custom breakpoint handling in styled components:
   ```typescript
   const Component = styled(Box)(({ theme }) => ({
     // Base styles
     [theme.breakpoints.down('md')]: {
       // Mobile styles
     }
   }));
   ```

## Development Workflows

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```

### Key Development Patterns
1. Component Structure:
   - Use 'use client' directive for client components
   - Styled components defined at top of file
   - Props interface defined when needed

2. Theme Usage:
   - Access theme via styled-components
   - Use design tokens from theme.ts
   - Extend MUI components with custom styles

3. Image Handling:
   - Use Next.js Image component
   - Store images in /public/images/
   - Always specify width/height or fill

## Integration Points

### Material-UI Integration
- Theme provider wrapped at root
- Custom components extend MUI base
- Use MUI Grid system for layouts

### Next.js Conventions
- Pages in app directory
- Server/Client component separation
- Image optimization via next/image

## Common Tasks

### Adding New Pages
1. Create page in appropriate app directory
2. Import and use shared components
3. Wrap with ThemeProvider if using MUI

### Styling New Components
1. Import styled from @mui/material/styles
2. Create styled components at file top
3. Use theme variables for consistency

### Handling Images
1. Place in public/images
2. Import and use next/image
3. Configure proper sizing/optimization

## Best Practices

1. Component Organization:
   ```typescript
   'use client';
   import { styled } from '@mui/material/styles';
   
   // Styled components
   const StyledComponent = styled(Component)({...});
   
   // Component definition
   export default function ComponentName() {...}
   ```

2. Theme Usage:
   ```typescript
   const Component = styled(Box)(({ theme }) => ({
     color: theme.palette.primary.main,
     [theme.breakpoints.down('md')]: {...}
   }));
   ```

3. Page Structure:
   ```typescript
   import { ThemeProvider } from '@mui/material';
   import theme from '../theme/theme';
   
   export default function Page() {
     return (
       <ThemeProvider theme={theme}>
         <Component />
       </ThemeProvider>
     );
   }
   ```
