
let inputText = document.getElementById('search-filter');
let ul = document.querySelector('.listOfEmojis')

inputText.addEventListener('keyup', filEmoji);

function filEmoji(){
    ul.innerHTML = ""
    const filterList = emojiList.filter((ele)=>{
        return (ele.aliases[0].includes(`${inputText.value}`) ||
        ele.description.includes(`${inputText.value}`) ||
        ele.tags.some((x) => x.startsWith(`${inputText.value}`) ||
        ele.emoji.startsWith(`${inputText.value}`)))
    })
    

    filterList.map((ele)=>{
        let myList = document.createElement("li");
        const title = ele.aliases;
        myList.classList.add('Emoji-item')

        myList.innerHTML = `<div class="emoji">${ele.emoji}</div><div class="emoji-title">${title}</div><div>${ele.description}</div>`
        ul.appendChild(myList);
    })
}

window.onload(filEmoji())