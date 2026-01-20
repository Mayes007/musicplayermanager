# Music Player Manager

The Music Player Manager is a web-based application that allows users to upload, store, and play music files using Firebase. Audio files are stored in Firebase Storage, while song metadata such as title and artist are stored in Firestore. The application provides a simple interface for managing and playing songs directly in the browser.

---

## Instructions for Build and Use

### Steps to Build and Run the Software

1. Clone or download this repository to your local machine.
2. Open the project folder in Visual Studio Code.
3. Create a Firebase project in the Firebase Console.
4. Enable Firestore Database and Firebase Storage.
5. Add your Firebase configuration credentials to the `firebase.js` file.
6. Open `index.html` using Live Server or a local development server.

### Instructions for Using the Software

1. Enter the song title and artist name in the input fields.
2. Select an audio file from your computer.
3. Click the **Upload Song** button to save the song to Firebase.
4. Click a song from the list to play it using the built-in audio player.

---

## Development Environment

To recreate the development environment, you need the following software and libraries:

* Visual Studio Code
* Web browser (Chrome, Firefox, or Edge)
* Firebase (Firestore and Storage enabled)
* JavaScript (ES6 modules)
* HTML5 and CSS3
* Live Server extension for VS Code (recommended)

---

## Useful Websites to Learn More

The following websites were useful while developing this project:

* [Firebase Documentation](https://firebase.google.com/docs)
* [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [MDN Web Docs – HTML Audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
* [Visual Studio Code](https://code.visualstudio.com/)

---

## Future Work

The following items are planned improvements and additions for this project:

* [ ] Add user authentication and login
* [ ] Create playlists
* [ ] Allow deleting songs
* [ ] Add favorites or likes feature
* [ ] Improve UI styling and responsiveness
* [ ] Add progress bar and volume controls
