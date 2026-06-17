# Task Tracker

A full-stack React web application for managing personal tasks — create, update, complete, and delete tasks, track progress, and view a live summary of task counts. Built for the FER202 React course assignment ("Custom React Web Application"), covering Learning Outcomes LO1–LO8.

## App Concept

Task Tracker helps a user organize daily work by letting them add tasks with a title, description, priority, and due date, then move each task through three states: To Do, In Progress, and Done. The Home page introduces the app, the Tasks page (Main Feature) is where the actual list management happens, and the About page describes the project and team. A global counter in the navbar always shows how many tasks are currently completed versus total, powered by Redux so the count stays accurate no matter which page the user is on.

## Tech Stack

- React (Create React App)
- React Router (Home `/`, Tasks `/feature`, About `/about`)
- Redux for global state (task counts / summary)
- Bootstrap / React-Bootstrap for layout and styling
- Fetch/Axios for API calls to a public REST API (e.g. fakestoreapi.com, used here to seed sample task-like data, or a dedicated tasks API if available)

## How to Run

```bash
git clone <repository-url>
cd task-tracker
npm install
npm start
```

The app runs at `http://localhost:3000`. No environment variables are required for the base setup; if a real backend/API key is used, add it to a `.env` file as documented in the code comments.

To build for production:

```bash
npm run build
```

## Learning Outcomes Coverage

**LO1 — Project setup & version control.** The project was scaffolded with Create React App and developed under Git with more than 5 commits, each representing a distinct development step (initial setup, components, routing, state, API integration, styling).

**LO2 — Reusable components (Class & Functional).** A `TaskCard` component exists in both a Class form and a Functional form, each rendering the same dynamic task data (title, description, status, priority) so both patterns can be compared directly.

**LO3 — JSX & ES6.** Components use JSX for declarative rendering along with ES6 features such as arrow functions, template literals (e.g. for dynamic class names and labels), and destructuring (e.g. pulling `title`, `status`, and `priority` out of a task object).

**LO4 — Styling.** The overall layout, navbar, and content sections use Bootstrap / React-Bootstrap components (Navbar, Container, Card, Button). The `TaskCard` component additionally has custom CSS for status-based color accents (e.g. green for Done, yellow for In Progress).

**LO5 — Routing.** React Router defines three routes: Home (`/`) introduces the app, Tasks (`/feature`) is the main task-management page, and About (`/about`) describes the project and contributors.

**LO6 — State & effects with event handlers.** `useState` manages the task list and form inputs; `useEffect` loads initial data on mount. Event handlers cover adding a task (form submit), deleting a task (button click), and updating a task's status (button click / dropdown).

**LO7 — API integration, loading/error states, lazy loading.** Task data is fetched from a public API using `fetch`/`axios`, with explicit loading and error states shown in the UI while the request is in flight or if it fails. The Tasks page (`/feature`) is lazy-loaded with `React.lazy` and wrapped in `Suspense` with a fallback spinner.

**LO8 — Redux global state.** Redux stores a summary of tasks (total count and completed count), which the Navbar reads and displays live, independent of which page is currently active.

## Team Contributions

| Member | ID | Role | Contributions | Username |
|---|---|---|---|---|
| Trần Quốc Huy | DE200146 | full-stack | All | @HuyTQDE200146 |
| [Name 2] | — | — | — | — |
| [Name 3] | — | — | — | — |

*(Replace with actual team member names and their specific contributions, e.g. "Set up project & routing", "Built TaskCard components", "Implemented Redux store", "API integration & styling".)*

## Resource Transparency

- Boilerplate generated with Create React App.
- UI components from React-Bootstrap (official documentation referenced for Navbar/Card usage).
- Sample/task data fetched from a public API (e.g. fakestoreapi.com) for demonstration purposes; in a production version this would be replaced by a dedicated tasks backend.
- No AI-generated code was directly copied into the final submission without review; any AI assistance used for scaffolding or debugging is noted in commit messages where applicable.

## Notes

- Redux is used for global state management as encouraged by the assignment (eligible for the additional bonus points noted in the exam guidelines).
- This README should be updated with the team's actual names, individual contribution details, and any deviations from the base concept before final submission.
