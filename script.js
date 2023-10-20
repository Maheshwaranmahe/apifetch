fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
.then((res) => res.json())
.then((data) => {
  let text = '';
  data.forEach((values) => {
    text += `
      <div class="product">
        <h2>${values.id}</h2>
        <p>ID: ${values.type}</p>
        <p>Price: $${values.setup}</p>
        <p>Description: ${values.punchline}</p>
      </div>
    `;
  });
  document.getElementById('result').innerHTML = text;
})
