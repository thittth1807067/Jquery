$.ajax({
    type: "GET",
    url: LIST_SONG_API,
    data: 'json',
    headers: { 'authorization': 'Basic ' + localStorage.getItem('token')},
    success: function (listSong, textStatus, jqXHR) {
        console.log('success');
        var content = '';
        for (var i = 0; i < listSong.length; i++) {
            content += '<div class="song-item">';
            content += '<div class="song-index">' + (i + 1) + '</div>';
            content += '<div class="song-thumbnail">';
            content += '<img src="' + listSong[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">' + listSong[i].name + '</div>';
            content += '<div class="song-singer">' + listSong[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
            content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML = content;
    },
    error: function () {
        console.log('error');
        alert('This page required logged in to continue!')
        window.location.href = "login.html";
    }
});