document.getElementById('fetchBtn').addEventListener('click', () => {
    const fetchResult = document.getElementById('fetchResult');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        fetchResult.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
      })
      .catch(error => {
        fetchResult.innerHTML = `<p class="error">Error: ${error.message}</p>`;
      });
  });

  document.getElementById('xhrBtn').addEventListener('click', () => {
  const xhrResult = document.getElementById('xhrResult');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      xhrResult.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
    } else {
      xhrResult.innerHTML = `<p class="error">Error: Failed to fetch data. Status: ${xhr.status}</p>`;
    }
  };

  xhr.onerror = function () {
    xhrResult.innerHTML = `<p class="error">Error: Network issue occurred.</p>`;
  };

  xhr.send();
});
document.getElementById('xhrBtn').addEventListener('click', () => {
    const xhrResult = document.getElementById('xhrResult');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        xhrResult.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
      } else {
        xhrResult.innerHTML = `<p class="error">Error: Failed to fetch data. Status: ${xhr.status}</p>`;
      }
    };
  
    xhr.onerror = function () {
      xhrResult.innerHTML = `<p class="error">Error: Network issue occurred.</p>`;
    };
  
    xhr.send();
  });
  
  document.getElementById('postForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const postTitle = document.getElementById('postTitle').value;
    const postBody = document.getElementById('postBody').value;
    const postResult = document.getElementById('postResult');
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: postTitle, body: postBody }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        return response.json();
      })
      .then(data => {
        postResult.innerHTML = `<p>Post created successfully! ID: ${data.id}</p>`;
      })
      .catch(error => {
        postResult.innerHTML = `<p class="error">Error: ${error.message}</p>`;
      });
  });
  
  document.getElementById('putForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const postId = document.getElementById('postId').value;
    const updateTitle = document.getElementById('updateTitle').value;
    const updateBody = document.getElementById('updateBody').value;
    const putResult = document.getElementById('putResult');
  
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', `https://jsonplaceholder.typicode.com/posts/${postId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        putResult.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
      } else {
        putResult.innerHTML = `<p class="error">Error: Failed to update post. Status: ${xhr.status}</p>`;
      }
    };
  
    xhr.onerror = function () {
      putResult.innerHTML = `<p class="error">Error: Network issue occurred.</p>`;
    };
  
    xhr.send(JSON.stringify({ title: updateTitle, body: updateBody }));
  });
  
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  }).then(response => {
    if (response.ok) {
      console.log('Post deleted successfully');
    }
  });
  