export default defineEventHandler(async (event) => {
    setResponseHeader(event, 'Content-Type', 'text/plain');
    const origin = getSiteOrigin();
    let result = '';
    result += origin + '/\n';
    result += origin + '/songs_lists/1\n';
    try {
        let response = await fetch(origin + '/api/v1/songs/info');
        let songs = await response.json();
        for (let song of songs.list) {
            result += origin + '/song/' + song.id + '\n';
        }
    } catch (e) {
        console.log(e);
    }
    return result;
});
