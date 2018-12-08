
$.ajax({
    type: "GET",
    url: MY_SONG_API,
    data: 'json',
    headers: { 'authorization': 'Basic ' + localStorage.getItem('token')},
    success: function (listSong, textStatus, jqXHR) {
        console.log('success');
        var content = '';
        for (var i = 0; i < listSong.length; i++) {
            content += '<div class="song-item row">';
            content += '<div class="song-index col-sm-6 col-md-1 display-4 pt-3">' + (i + 1) + '</div>';
            content += '<div class="song-thumbnail col-sm-6 col-md-2">';
            content += '<img src="' + listSong[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor col-sm-12 col-md-5 pt-4">';
            content += '<div class="song-name lead">' + listSong[i].name + '</div>';
            content += '<div class="song-singer">' + listSong[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control col-sm-6 col-md-2" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">';
            content += '<img src="https://cdn3.iconfinder.com/data/icons/music-and-audio-controls/100/Play-512.png" alt="">';
            content += '</div>';
            content += '<div class="song-control col-sm-6 col-md-2 h4"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
            content += '</div>';
            // $('.btn-play').click(function () {
            //     playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\');
            // });
        }
        document.getElementById('list-song').innerHTML = content;
    },
    error: function () {
        console.log('error');
        alert('This page required logged in to continue!')
        $('#modal-login').modal('show');
    }
});
function playSong(link, name, singer) {
    $('#my-mp3').attr('src', link);
    $('#current-play-title').text('Current playing: ' + name + " - " + singer);
}