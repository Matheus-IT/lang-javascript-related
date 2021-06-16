function findLyrics(artist, song) {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`); // This is a promise
}

async function doSubmit() {
  const lyrics_el = document.querySelector("#lyrics");
  const artist = document.querySelector("#artist");
  const song = document.querySelector("#song");

  lyrics_el.innerHTML = `
    <div class="spinner-grow" role="status" style="overflow: hidden;">
      <span class="sr-only">Loading...</span>
    </div>
  `;
  
  /* With "then" and "catch" 
  findLyrics(artist.value, song.value)
    .then(response => response.json())
    .then(data => {
      if (data.lyrics) {
        lyrics_el.innerHTML = data.lyrics;
      } else {
        lyrics_el.innerHTML = data.error;
      }
    })
    .catch(err => {
      lyrics_el.innerHTML = `Oops! ${err}`;
    });
  */

  // With "async" and "await"
  try {
    const lyricsResponse = await findLyrics(artist.value, song.value);
    const data = await lyricsResponse.json();
    if (data.lyrics) lyrics_el.innerHTML = data.lyrics;
    else lyrics_el.innerHTML = data.error;
  } catch(err) {
    console.log(err);
  }
}

const form = document.querySelector("#lyrics_form");
form.addEventListener("submit", e => {
  e.preventDefault();
  doSubmit();
});
