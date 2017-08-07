let header = document.querySelector('.header');
let basics = document.querySelector('.basics');
let story = document.querySelector('.story');



function reqListener() {

  let data = JSON.parse(this.responseText);
  console.log(data);

    let heading = `
                <h1>${data.name}</h1>

                `;

    let basicsInfo = `
            <h1>The Basics</h1>
              <ul>
                  <li> <span class="list-object">Name</span>: ${data.name}<l/i>
                  <li> <span class="list-object">GitHub URL: </span><a href='${data.html_url}'>${data.login}</a></li>
                  <li> <span class="list-object">Email:</span> ${data.email}</li>
                  <li> <span class="list-object">Company:</span> ${data.company}</li>
                  <li> <span class="list-object">Website:</span> <a href="${data.url}">${data.url}</a> </li>
              </ul>
              `;

      let storyInfo = `
            <h1>The Story</h1>
                <p class="bio"> ${data.bio}
                <img src="${data.avatar_url}">
                </p>

              `;
    header.innerHTML = heading;
    basics.innerHTML = basicsInfo;
    story.innerHTML = storyInfo;
}



let req = new XMLHttpRequest();
req.open("GET", "http://192.168.1.12:8000/octocat");
req.addEventListener("load", reqListener);
req.send();
