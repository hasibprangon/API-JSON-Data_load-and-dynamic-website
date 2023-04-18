function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const post_container = document.getElementById('post-container')
    for (const post of posts) {

        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
   <h4>User-${post.id}</h4>
   <h5>Post: ${post.title}</h5>
   <p>Post description: ${post.body}</p>
   `;
        post_container.appendChild(postDiv);
    }

}

loadPost();

/*
1.get the container element where you want to add the new element.
2. creat child element.
3. set innerText or innerHTML.
4.appendchild
*/
