const animais = [

{
nome:"Thor",
idade:"2 anos",
sexo:"Macho",
porte:"Grande",
cidade:"Natal",
situacao:"Vacinado e Castrado",
foto:"https://images.unsplash.com/photo-1517849845537-4d257902454a",
historia:"Thor foi resgatado das ruas.",
personalidade:"Brincalhão e muito dócil.",
saude:"Excelente saúde.",
requisitos:"Casa com quintal."
},

{
nome:"Luna",
idade:"1 ano",
sexo:"Fêmea",
porte:"Pequeno",
cidade:"Parnamirim",
situacao:"Vacinada",
foto:"https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
historia:"Foi abandonada ainda filhote.",
personalidade:"Muito carinhosa.",
saude:"Saudável.",
requisitos:"Apartamento ou casa."
},

{
nome:"Mel",
idade:"4 anos",
sexo:"Fêmea",
porte:"Médio",
cidade:"Mossoró",
situacao:"Vacinada e Castrada",
foto:"https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
historia:"Encontrada em situação de maus-tratos.",
personalidade:"Calma.",
saude:"Excelente.",
requisitos:"Família responsável."
}

];

const cards=document.getElementById("cards");

animais.forEach((animal)=>{

cards.innerHTML+=`

<div class="card">

<img src="${animal.foto}">

<h3>${animal.nome}</h3>

<p>Idade: ${animal.idade}</p>

<p>Sexo: ${animal.sexo}</p>

<p>Porte: ${animal.porte}</p>

<p>Cidade: ${animal.cidade}</p>

<p>${animal.situacao}</p>

<button onclick="verAnimal('${animal.nome}')">Ver mais</button>

</div>

`;

});

function verAnimal(nome){

let a=animais.find(x=>x.nome==nome);

document.getElementById("perfil").style.display="block";

document.getElementById("fotoGrande").src=a.foto;

document.getElementById("nomeAnimal").innerHTML=a.nome;

document.getElementById("historia").innerHTML="<b>História:</b> "+a.historia;

document.getElementById("personalidade").innerHTML="<b>Personalidade:</b> "+a.personalidade;

document.getElementById("saude").innerHTML="<b>Saúde:</b> "+a.saude;

document.getElementById("requisitos").innerHTML="<b>Requisitos:</b> "+a.requisitos;

}

document.getElementById("fechar").onclick=function(){

document.getElementById("perfil").style.display="none";

}

document.getElementById("pesquisa").addEventListener("keyup",function(){

let texto=this.value.toLowerCase();

let lista=document.querySelectorAll(".card");

lista.forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(texto)
?"block":"none";

});

});