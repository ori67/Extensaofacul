let myImage = document.querySelector("img");
// seleciona todo o "img" atribuindo na variável

    myImage.onclick = () => { 
        // afirma que ao clicar no valor de myImage ativa a function
        let mySrc = myImage.getAttribute("src");
        // declara uma variável e seleciona o atributo src(onde está a imagem)

        if (mySrc === "images/ÉTICA E MORAL5.jpeg"){
            myImage.setAttribute("src", "images/ÉTICA E MORAL2.jpeg");
            //  se o valor da variável do atributo for "images/ÉTICA E MORAL5.jpg" durante o click então trocar para "images/ÉTICA E MORAL2.jpg"
       }else{
        myImage.setAttribute("src", "images/ÉTICA E MORAL5.jpeg")
        // se não, voltar para "images/ÉTICA E MORAL5.jpg"
       };
};    
       let myButton = document.querySelector("button");
       let myHeading = document.querySelector("h1")   
 function setUserName(){
    let myName = prompt ("Olá! Por favor, digite seu nome: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Seja bem-vindo ao meu trabalho de extensão, ${myName}!`;

 };
 myButton.onclick = () => {
    setUserName();

 }