async function createTodo() {
  try {
    const response = await fetch(
      "https://todo-app-1-7ca01-default-rtdb.firebaseio.com/alisher.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify(),
      }
    );
    if (response.status !== 200) {
      console.error(error);
    }
  } catch (error) {}
}
  