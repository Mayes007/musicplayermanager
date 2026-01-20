import { db, storage } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const uploadBtn = document.getElementById("uploadBtn");
const songList = document.getElementById("songList");
const player = document.getElementById("player");

uploadBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const file = document.getElementById("file").files[0];

  if (!file) return alert("Select a song!");

  const storageRef = ref(storage, `songs/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "songs"), {
    title,
    artist,
    url
  });

  loadSongs();
});
async function loadSongs() {
  songList.innerHTML = "";

  const snapshot = await getDocs(collection(db, "songs"));

  snapshot.forEach(doc => {
    const song = doc.data();

    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;

    li.onclick = () => {
      player.src = song.url;
      player.play();
    };

    songList.appendChild(li);
  });
}

loadSongs();
