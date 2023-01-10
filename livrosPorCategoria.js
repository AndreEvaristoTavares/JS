const booksCategory = [
    {
        category: "riqueza",
        books: [
            {
                title:"os segredos da mente milionaria",
                author:"T. harv eker"
            },
            {
                title:"o homem mais rico da babilonia",
                author:"george s. clason"
            },
            {
                title:"pai rico , pai pobre",
                author:"robert t. kiyosaki e sheron l. lechter"
            },
        ],
    },
    {
        category: "inteligencia emocional",
        books: [
            {
                title:"voce e insubstituivel",
                author:"augusto cury"
            },
            {
                title:"ansiedade como enfrentar o mal do seculo",
                author:"augusto cury"
            },
            {
                title:"os 7 habitos das pessoas altamente eficazes",
                author:"stephen r. covey"
            },
        ]
    }

];
const totaCategories = booksCategory.length
console.log(totaCategories)
for(let category of booksCategory){
    console.log('total de livros: ', category)
}
function countAuthors(){
    let authors = [];
    for(let category of booksCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("total de autores: ", authors.length)
    console.log(authors)
}
function booksAuthor(author){
    let books = [];
    for(let category of booksCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`os livros do autor: ${author} -> ${books.join(", ")}   `);
}
countAuthors();
booksAuthor('stephen r. covey')