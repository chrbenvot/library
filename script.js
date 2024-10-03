const myLibary=[];


class Book{
    constructor(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){ return (this.title+" by "+ this.author+","+this.pages+this.read)};}
}
const lotr= new Book("lord","tolkien",80,true);

function addBookToLibrary(book){
    myLibary.push(book);
};
addBookToLibrary(lotr);
const mainContainer=document.querySelector("body>div");

function looper(){
    mainContainer.innerHTML = '';
    let counter=0;
    function delHandler(e){
         e.target.parentElement.remove();
         const index=+e.target.parentElement.id;
         myLibary.splice(index-1,1);}
    function chHandler(e){
        const index=+e.target.parentElement.id;
        myLibary[index-1].read=true;
        looper();

    }
    for (const i of myLibary){
        const container=document.createElement("div");
        container.setAttribute("id",++counter);
        mainContainer.appendChild(container);
        const l=document.createElement("ul");
        const del=document.createElement('button');
        del.setAttribute('id',"del");
        del.addEventListener('click',delHandler);
        const changeRead=document.createElement('button');
        changeRead.setAttribute('id',"changeRead");
        del.textContent="Delete book";
        changeRead.textContent="Change Read status";
        changeRead.addEventListener('click',chHandler);
        container.appendChild(l);
        for (const j in i){
            const element=document.createElement('li');
            element.textContent=j+": "+i[j];
            l.appendChild(element);
        }
        container.appendChild(del);
        container.appendChild(changeRead);
    }
    };
looper()
const add=document.querySelector('#new');
function frm(){
    const form=document.createElement('form');
    document.querySelector('body').appendChild(form);
    const label1=document.createElement('label');
    const label2=document.createElement('label');
    const label3=document.createElement('label');
    const label4=document.createElement('label');
    const label5=document.createElement('label');
    const title=document.createElement('input');
    const author=document.createElement('input');
    const pages=document.createElement('input');
    const readY=document.createElement('input');
    const readN=document.createElement('input');
    const sub=document.createElement('button');
    sub.setAttribute("type","submit");
    sub.textContent="Submit";
    
    form.addEventListener('submit',subHandler);
    title.setAttribute("type","text");
    title.setAttribute("id","title");
    title.setAttribute("name","title");
    author.setAttribute("type","text");
    author.setAttribute("id","author");
    author.setAttribute("name","author");
    pages.setAttribute("type","number");
    pages.setAttribute("id","pages");
    pages.setAttribute("name","pages");
    readY.setAttribute("type","radio");
    readY.setAttribute("id","true");
    readY.setAttribute("value","true");
    readY.setAttribute("name","read");
    readN.setAttribute("type","radio");
    readN.setAttribute("id","false");
    readN.setAttribute("value","false");
    readN.setAttribute("name","read");
    label1.htmlFor="title";
    label1.textContent="title"
    label2.htmlFor="author";
    label2.textContent="author"
    label3.htmlFor="pages";
    label3.textContent="pages"
    label4.htmlFor="true";
    label4.textContent="true"
    label5.htmlFor="false";
    label5.textContent="false"
    form.appendChild(label1);
    form.appendChild(title);
    form.appendChild(label2);
    form.appendChild(author);
    form.appendChild(label3);
    form.appendChild(pages);
    form.appendChild(label4);
    form.appendChild(readY);
    form.appendChild(label5);
    form.appendChild(readN);
    form.append(sub);
    function subHandler(e){
        e.preventDefault();
        const readValue = document.querySelector('input[name="read"]:checked');
        const aux = readValue ? readValue.value === "true" : false;
        const newBook=new Book(title.value,author.value,pages.value,aux);
        addBookToLibrary(newBook);
        looper();
    }


}
add.addEventListener('click',frm);
