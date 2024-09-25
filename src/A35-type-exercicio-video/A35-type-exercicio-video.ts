interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocols {
  playToggle(): void;
  stop(): void;
  initiateEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocols {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.playButton.innerText = 'Pause'
      this.videoPlayer.play();
    }
    else {
      this.playButton.innerText = 'Play'
      this.videoPlayer.pause();
    }
  }

  stop(): void {
  }

  initiateEvents(): void {
    console.log('start events')
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    })

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = 'Play'
    })
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

videoPlayer.initiateEvents();
