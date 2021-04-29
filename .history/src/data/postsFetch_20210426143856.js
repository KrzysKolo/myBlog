
export const postsFetch = async() => {
    const url = 'http://localhost:4000/posts';
    const res = await fetch(url);
    const posts = await res.json();
    console.log(posts);
    return posts
}
