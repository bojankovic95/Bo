import generateImage from "./general.js";

export function generateList (parent) {
    let ul = document.createElement("ul");
    ul.style.listStyle = 'none';
    ul.style.overflow = "hidden";
    parent.appendChild(ul);

    return ul; 
}


function generateListItem (parent, src) {
    let li = document.createElement("li");
    li.style.float = 'left';
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);

    return li;
}

export {generateListItem};

