document.getElementById('jokeBtn').addEventListener('click', async () => {
    const response = await fetch('https://caramblagues-test.onrender.com/api/jokes/random');
    const joke = await response.json();
    document.getElementById('jokeDisplay').textContent = joke.text;
});