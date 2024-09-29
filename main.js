new Promise((resolve, reject) => {
  (async () => {
    try {
      console.log("Fetching data...");

      const result = await fetch("https://dog.ceo/api/breeds/image/random");

      if (result.ok) {
        resolve(await result.json());
      } else {
        resolve({
          status: result.status,
          statusText: result.statusText,
        });
      }

      console.log("Data fetched!");
    } catch (error) {
      reject(error);
    }
  })();
})
  .then((data) => console.log(data))
  .catch((err) => console.log("Error in promise:", err));
