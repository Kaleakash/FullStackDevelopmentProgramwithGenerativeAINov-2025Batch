class SongNode {
    constructor(song) {
        this.song = song;
        this.prev = null;
        this.next = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current = null;
    }

    addSong(song) {
        const newSong = new SongNode(song);

        if (!this.head) {
            this.head = this.tail = newSong;
            this.current = newSong;
        } else {
            this.tail.next = newSong;
            newSong.prev = this.tail;
            this.tail = newSong;
        }
    }

    playNext() {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            console.log("Playing:", this.current.song);
        }
    }

    playPrev() {
        if (this.current && this.current.prev) {
            this.current = this.current.prev;
            console.log("Playing:", this.current.song);
        }
    }
}

// Usage
const playlist = new MusicPlaylist();
playlist.addSong("Song 1");
playlist.addSong("Song 2");
playlist.addSong("Song 3");

playlist.playNext(); // Song 2
playlist.playNext(); // Song 3
playlist.playPrev(); // Song 2