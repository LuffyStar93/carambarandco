document.getElementById('jokeBtn').addEventListener('click', async () => {
    try {
      const response = await fetch('https://caramblagues-test.onrender.com/api/jokes/random'); // Remplacer par l'URL de votre API déployée
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }
      const joke = await response.json();
      document.getElementById('jokeDisplay').textContent = joke.text;
    } catch (error) {
      console.error('Error fetching joke:', error);
      document.getElementById('jokeDisplay').textContent = 'Erreur: ' + error.message;
    }
  });