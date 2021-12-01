export const SAMPLE_SONGS = [
  {
    songName: "Solar Power",
    artistName: ["Lorde"],
    albumName: "Solar Power",
  },
  {
    songName: "Easy On Me",
    artistName: ["Adele"],
    albumName: "Easy On Me",
  },
  {
    songName: "good 4 u",
    artistName: ["Olivia Rodrigo"],
    albumName: "SOUR",
  },
  {
    songName: "Heat Waves",
    artistName: ["Glass Animals"],
    albumName: "Heat Waves",
  },
  {
    songName: "That Funny Feeling",
    artistName: ["Bo Burnham"],
    albumName: "Inside (The Songs)",
  },
  {
    songName: "Moon in the Morning",
    artistName: ["Adam Melchor"],
    albumName: "Melchor Lullaby Hotline Vol. 1",
  },
  {
    songName: "breadwinner",
    artistName: ["Kacey Musgraves"],
    albumName: "star-crossed",
  },
  {
    songName: "Shivers",
    artistName: ["Ed Sheeran"],
    albumName: "Shivers",
  },
  {
    songName: "All Too Well",
    artistName: ["Taylor Swift"],
    albumName: "Red (Taylor's Version)",
  },
  {
    songName: "Smokin Out The Window",
    artistName: ["Bruno Mars", "Anderson .Paak", "Silk Sonic"],
    albumName: "Smokin Out The Window",
  },
  {
    songName: "Ghost",
    artistName: ["Justin Bieber"],
    albumName: "Justice",
  },
  {
    songName: "Woman",
    artistName: ["Doja Cat"],
    albumName: "Planet Her",
  },
  {
    songName: "THATS WHAT I WANT",
    artistName: ["Lil Nas X"],
    albumName: "MONTERO",
  },
  {
    songName: "My Universe",
    artistName: ["Coldplay", "BTS"],
    albumName: "My Universe",
  },
  {
    songName: "Happier Than Ever",
    artistName: ["Billie Eilish"],
    albumName: "Happier Than Ever",
  },
  {
    songName: "Pepas",
    artistName: ["Farruko"],
    albumName: "Pepas",
  },
  {
    songName: "MONEY",
    artistName: ["LISA"],
    albumName: "LALISA",
  },
  {
    songName: "Overpass Graffiti",
    artistName: ["Ed Sheeran"],
    albumName: "=",
  },
]

export const getSampleSongs = () => {
  const songList = SAMPLE_SONGS
  for (let i = songList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[songList[i], songList[j]] = [songList[j], songList[i]]
  }
  return songList.slice(0, 9)
}
