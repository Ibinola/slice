# Slice - URL Shortener

Slice is a URL shortening application that allows users to create shortened URLs for easy sharing and tracking. It provides the ability to shorten long URLs, customize the shortened URLs, and track basic analytics such as click counts and referral sources.

## Features

- Shorten URLs: Paste a long URL into Slice and generate a shorter URL.
- Custom URLs: Customize the shortened URLs with your own custom domain name to reflect your brand or content.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Firebase: Backend-as-a-Service platform for real-time database and authentication.
- Tailwind CSS: Utility-first CSS framework for styling.
- React Router: Routing library for React applications.

## Getting Started

To run the Slice application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/slice.git`
2. Install dependencies: `npm install`
3. Set up Firebase:
   - Create a Firebase project and set up a Realtime Database.
   - Add your Firebase project configuration in `src/firebase.js`.
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to access the Slice application.

## Folder Structure

The project structure is organized as follows:

- `public/`: Contains public assets and the main HTML file.
- `src/`: Contains the application's source code.
  - `components/`: Contains reusable React components.
  - `firebase.js`: Firebase configuration and initialization.
  - `App.js`: Main component that renders the application.
  - `index.js`: Entry point for the React application.
  - `index.css`: Global styles for the application.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to propose, please submit an issue or a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

