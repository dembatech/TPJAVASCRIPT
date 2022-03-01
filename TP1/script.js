function box() {
    const BtnAdd = document.querySelector("button");
    BtnAdd.addEventListener("click", () => {

        // creation des element 
        const both = document.querySelector(".both");
        const conteneur = document.createElement("div");
        const icon = document.createElement("div");
        const icon1 = document.createElement("div");
        const add = document.createElement("i");
        const del = document.createElement("i");
        const divdemba = document.createElement("div");
        const textarea1 = document.createElement("textarea");

        // Structuration des éléments
        both.appendChild(conteneur);
        conteneur.appendChild(icon);
        conteneur.appendChild(divdemba);
        icon.appendChild(icon1);
        icon1.appendChild(add);
        icon1.appendChild(del);
        divdemba.appendChild(textarea1);


        // Ajout du design de page
        conteneur.setAttribute('id', 'conteneur');
        icon.setAttribute('class', 'icon');
        icon1.setAttribute('class', 'icon1');
        add.setAttribute('class', 'add');
        add.setAttribute('class', 'fa-solid fa-pen-to-square');
        del.setAttribute('class', 'fa-solid fa-trash-can');


        del.addEventListener('click', function() {
            del.parentNode.parentNode.parentNode.remove();
        });
        add.addEventListener('click', function() {
            textarea1.toggleAttribute('disabled');
            textarea1.focus();

        })
    });
}

box();

/*

<div id="conteneur">
    <div class="icon">
        <div class="icon1" id="item1">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash-can"></i>
        </div>
    </div>

    <div>
        <textarea name="" id="" cols="30" rows="20"></textarea>
    </div>
</div>

*/