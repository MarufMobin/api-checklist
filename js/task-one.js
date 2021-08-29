// https://jsonplaceholder.typicode.com/comments
const loadDatas = async () =>{
       const url = 'https://jsonplaceholder.typicode.com/comments';

       const res = await fetch(url);
       const data = await res.json();

       showData(data);

}

const showData = results =>{
    const commntContainer = document.getElementById('comment-container');
    for( const result of results){
        console.log(result)
        const div = document.createElement('div');
        
        div.innerHTML = `
        <div class="card my-5">
            <div class="card-body">
                <h5 class="card-title d-inline me-3 text-primary">${result.name}</h5>
                <h6 class="card-subtitle d-inline mb-2 text-muted">Post Id: ${result.id}</h6>
                <p class="card-text">${result.body}</p>
                <a href="#" class="card-link text-decoration-none text-secondary">${result.email}</a>
            </div>
        </div>
        `;
        commntContainer.appendChild(div)       
    }
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then( datas => autoDataLoad(datas))


const autoDataLoad = (datas) =>{
    const postContainer = document.getElementById('post-container');
    for( const data of datas){
        console.log(data.title)
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = ` 
            <div class="text-white shadow-lg p-3 mb-5 bg-body rounded">
                <p>${data.title}</p>   
            </div>    
        `;
    postContainer.appendChild(div);

    }

}


