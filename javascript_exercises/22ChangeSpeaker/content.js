function remove_options(header) {
    let div_options = document.querySelector("div#op");
    if (div_options) header.removeChild(div_options);
}


function display_options(header, act_button) {
    remove_options(header);
    let options = document.createElement("div");
    options.setAttribute("id", "op");
    header.appendChild(options);
    let buttons = [];
    let back_button = document.createElement("button");
    back_button.setAttribute("class", "xTimesButton");
    back_button.innerHTML = "Back";
    back_button.addEventListener("click", () => {
        remove_options(header);
        act_button.style.display = "block";
    });
    options.appendChild(back_button);
    for (let c = 0; c < 3; c++) {
        buttons.push(document.createElement("button"));
        buttons[c].setAttribute("class", "xTimesButton");
        switch (c) {
            case 0:
                buttons[0].innerHTML = "1x";
                break;
            case 1:
                buttons[1].innerHTML = "1.5x";
                break;
            case 2:
                buttons[2].innerHTML = "2x";
                break;
            default:
                break;
        }
        buttons[c].addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                switch (c) {
                    case 0:
                        audio.playbackRate = 1;
                        break;
                    case 1:
                        audio.playbackRate = 1.5;
                        break;
                    case 2:
                        audio.playbackRate = 2;
                        break;
                    default:
                        break;
                }
            });
        });
        options.appendChild(buttons[c]);
    }
}


const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if (header) {
        clearInterval(interval);
        const act_button = document.createElement("button");
        act_button.setAttribute("class", "actButton");
        act_button.innerHTML = "audioSpeed";
        header.appendChild(act_button);
        act_button.addEventListener("click", () => {
            act_button.style.display = "none";
            display_options(header, act_button);
        });
    }
}, 1000);
