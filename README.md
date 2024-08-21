# IB Coursework Evaluation Platform

## Objective
This project is a web application for evaluating International Baccalaureate (IB) coursework. The application is built using Next.js 14, TailwindCSS, Zustand for state management, and Shadcn UI components. The design closely resembles the "ZuAi" interface provided in the Figma design.

## Figma Design
The design for this application can be viewed [here](https://www.figma.com/design/zxoVX8TMExUAZOMdOFStMi/Web-Task---ZuAI?node-id=0-1&t=pLJAY80MGdlbaAYl-1).

## Tech Stack
- **Next.js 14**
- **TailwindCSS**
- **Zustand** (State Management)
- **Shadcn UI** (Component Library)

## Key Features
1. **File Upload**
   - Drag-and-drop functionality for PDF files.
   - Manual file upload option.
   - Display file size limit ("Limit 25 MB per file").
   - Store uploaded files using browser local storage.

2. **Local Storage Implementation**
   - Save uploaded files and their metadata locally.
   - Ensure data persistence across page reloads.
   - Efficient retrieval of stored files and data.

3. **Coursework Details Form**
   - Dropdowns for "Coursework Type" and "Subject".
   - Text input for essay title.
   - Store form data locally with the associated file.

4. **Evaluation Display**
   - Display overall score with a circular progress indicator.
   - Breakdown of scores by criteria (A, B, C).
   - Display evaluation date.
   - Store and retrieve evaluation results locally.

5. **Coursework List**
   - Display previously uploaded coursework from local storage.
   - Show title, subject, word count, and other relevant details.

6. **Explore Coursework Section**
   - Tabbed interface for different coursework categories.
   - Grid layout for coursework examples.

## Bonus Features
- **Animations**: Smooth transitions between states, micro-interactions for enhanced user feedback.
- **User Gratification**: Congratulatory messages for good scores, encouraging feedback for areas of improvement.
- **Accessibility**: Proper use of ARIA attributes and keyboard navigation support.
- **Testing**: Unit tests for critical components, integration tests for main user flows.
- **Advanced Local Storage Features**: Data compression for efficient storage, option to clear local storage or individual files.
- **Mock API Integration**: Simulating server-side persistence using tools like MSW (Mock Service Worker).

## Implementation Notes
- Used mock API calls for the evaluation process.
- Ensured all data is stored and retrieved from local storage.
- Closely matched the provided Figma designs.
- Handled potential storage limitations gracefully with appropriate user feedback.
- Leveraged Next.js 14 features such as App Router and Server Components where beneficial.
- Used Zustand for global state management and Shadcn UI components to maintain design consistency.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/mehraankush/zuai.git
   cd zuai
   npm install
   npm run dev
   ```
