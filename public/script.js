document.getElementById('api-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const input = document.getElementById('input').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Loading...";
  
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      resultDiv.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error("Error:", error);
      resultDiv.textContent = "Failed to fetch data. Please try again.";
    }
  });
  