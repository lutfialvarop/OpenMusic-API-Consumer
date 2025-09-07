class Listener {
  constructor(playlistService, songService, mailSender) {
    this._playlistService = playlistService;
    this._songService = songService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());

      const playlist = await this._playlistService.getPlaylist(playlistId);
      const songs = await this._songService.getSongs(playlistId);

      const resultPlaylist = {
        playlist: {
          ...playlist[0],
          songs,
        },
      };

      const result = await this._mailSender.sendEmail(targetEmail, JSON.stringify(resultPlaylist));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
