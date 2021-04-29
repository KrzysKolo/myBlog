
export const postsFetch = async() => {
    const url = 'http://localhost:4000/posts';
    const res = await fetch(url);
    const post = await res.json();
    console.log(post);
}
