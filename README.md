# Workday SDE 1 assessment

## Features

- **Job Cards**: Each job listing is displayed as a card containing the job title, company name, location, job description (limited to a certain number of characters with an option to expand), required experience, and an apply button/link.
- **Filters**: Users can refine the job listings based on minimum experience, company name, location, remote/on-site work, tech stack, role, and minimum base pay.
- **Infinite Scroll**: The platform loads additional job listings automatically as the user scrolls down the page, without requiring them to click a "Load More" button.
- **Responsive Design**: The platform is designed to work well on different screen sizes, including mobile devices.

## Technologies Used

- **ReactJS**: The core library for building the user interface.
- **Redux Toolkit**: A modern Redux library for managing application state.
- **Material-UI**: A popular React UI library for implementing Material Design components.
- **Vanilla CSS**: Vanilla CSS styles for additional styling.
- **React Select**: Used for implementing filter UI similar to the one present in the Workday extension.


## Installation

1. Clone the repository:

```
git clone https://github.com/NitinPSingh/ASSESSMENT-.git
```

2. Navigate to the project directory:

```
cd workday
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

The application should now be running at `http://localhost:3000`.

## Project Structure

- `src/components`: Contains reusable React components.
- `src/features`: Contains Redux slices and store to manage application state.
- `src/constants`: Contains options for react-select.
- `src/Api`: Contains services for API calls.
- `src/screen`: Contains the main screens/components of the application.
- `src/App.css`: Contains custom CSS styles for components and layout.
- `src/index.js`: Entry point of the React application.
- `public`: Contains static assets like images, icons, and HTML template.
- `package.json`: Manifest file for Node.js projects, which includes project metadata and dependencies.
- `README.md`: Documentation file providing information about the project, its setup, and usage.


## Redux Slices

The project utilizes Redux Toolkit for state management and includes the following slices:

- **jobSlice**: Responsible for managing the job listings and related data.



