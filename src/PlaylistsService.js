const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylist(PlaylistId) {
    const query = {
      text: `SELECT id, name
            FROM playlists WHERE id = $1`,
      values: [PlaylistId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = PlaylistsService;
