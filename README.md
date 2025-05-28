# StreamingApp

## Descrizione del Compito

Realizzare un’applicazione mobile (React-Native) per la riproduzione di contenuti audio e video, basata su Zustand per la gestione dello state.

### Obiettivi principali

- Caricare e mostrare una lista di contenuti multimediali (mock).
- Consentire la selezione e riproduzione di audio/video.
- Gestire lo stato dell’app (playlist, traccia corrente, play/pause) con Zustand.
- Navigazione tra schermate Home (lista) e Player.

---

## Requisiti Funzionali

1. **Lista Tracce**
   - Visualizza almeno 5 elementi di mock (vedi `mediaMockData`).
   - Ogni voce mostra thumbnail, titolo e tipo (movie/documentary/live).
   - Cliccando su un elemento, viene impostato come `currentTrack`.
2. **Player**
   - Mostra titolo, descrizione e thumbnail della traccia corrente.
   - Pulsante Play/Pause che controlla la riproduzione.
   - Autoplay della traccia selezionata.
3. **Navigazione**
   - Schermata **HomeScreen** con componente `Playlist`.
   - Schermata **PlayerScreen** con componente `Player`, raggiungibile dal Home.
4. **Persistenza Stato** (Bonus)
   - Mantieni traccia corrente e stato play/pause tra le sessioni (AsyncStorage).

---

## Requisiti Tecnici

- **Framework:** React-Native (CLI o Expo).
- **Librerie:** Zustand, react-native-video o react-native-track-player.
- **Linguaggio:** TypeScript.
- **Navigazione:** qualsiasi libreria di tua scelta.

## Mock Data

```typescript
export interface Media {
  id: number;
  title: string;
  type: "movie" | "documentary" | "live";
  genre: string;
  duration: number;
  thumbnail: string;
  url: string;
  description: string;
  year: number;
  rating?: number;
}

export const mediaMockData: Media[] = [
  {
    id: 1,
    title: "Big Buck Bunny",
    type: "movie",
    genre: "Animation",
    duration: 596,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description: "Classico corto animato open source della Blender Foundation",
    year: 2008,
    rating: 4.8
  },
  {
    id: 2,
    title: "Tears of Steel",
    type: "movie",
    genre: "Sci-Fi",
    duration: 734,
    thumbnail: "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description: "Film sperimentale con effetti visivi all'avanguardia",
    year: 2012,
    rating: 4.7
  },
  {
    id: 3,
    title: "Sintel",
    type: "movie",
    genre: "Fantasy",
    duration: 888,
    thumbnail: "https://cdn.shortpixel.ai/spai/q_lossy+w_977+to_webp+ret_img/thumbnailtest.com/wp-content/uploads/2024/02/Face-in-YouTube-Thumbnail.jpg",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    description: "Avventura epica fantasy prodotta con Blender",
    year: 2010,
    rating: 4.9
  },
  {
    id: 4,
    title: "Documentario NASA",
    type: "documentary",
    genre: "Scienza",
    duration: 1800,
    thumbnail: "https://thumbnailtest.com/wp-content/uploads/2024/02/How-to-see-a-YouTube-Thumbnail-in-Full-Screen.jpg",
    url: "https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
    description: "Documentario sulla vita nella Stazione Spaziale Internazionale",
    year: 2020
  },
  {
    id: 5,
    title: "Live Concerto Jazz",
    type: "live",
    genre: "Musica",
    duration: 3540,
    thumbnail: "https://thumbnailtest.com/wp-content/uploads/2024/04/Thumbnail-URL.jpg"
    url: "https://stream-akamai.castr.com/5b9352dbda7b8c769937e459/live_2361c920455111ea85db6911fe397b9e/index.fmp4.m3u8",
    description: "Registrazione live del JAZZ IN MARCIAMEA 2023",
    year: 2023,
    rating: 4.6
  }
];
```

## Implementation

- I have used [Expo starter](https://github.com/kadikraman/expo-starter) as boilerplate, because it was recomended on the ofitial documentation site for [Expo Router](https://docs.expo.dev/router/basics/layout/).
