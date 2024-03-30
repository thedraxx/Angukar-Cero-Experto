interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 100,
    songDuration: 300,
    song: 'Song Name',
    details: {
        author: 'Author Name',
        year: 2021
    }
}

const { audioVolume, songDuration, song, details } = audioPlayer;

