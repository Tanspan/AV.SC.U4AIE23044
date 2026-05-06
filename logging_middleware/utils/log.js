const axios = require("axios");

const Log = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdi5zYy51NGFpZTIzMDQ0QGF2LnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjAxMjUsImlhdCI6MTc3ODA1OTIyNSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjgxNTc0NzFlLTM2YTItNDJlZS1iYTI5LTQxNjk1NDgwY2VhNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InMuay50YW51c3JpIiwic3ViIjoiYjQ5YjY5YjUtOTlkMC00ZjkyLTkwNjgtNWIyZDgyMWUwMzE1In0sImVtYWlsIjoiYXYuc2MudTRhaWUyMzA0NEBhdi5zdHVkZW50cy5hbXJpdGEuZWR1IiwibmFtZSI6InMuay50YW51c3JpIiwicm9sbE5vIjoiYXYuc2MudTRhaWUyMzA0NCIsImFjY2Vzc0NvZGUiOiJQVEJNbVEiLCJjbGllbnRJRCI6ImI0OWI2OWI1LTk5ZDAtNGY5Mi05MDY4LTViMmQ4MjFlMDMxNSIsImNsaWVudFNlY3JldCI6IldrS3FCSGFHdkZYdkJ6Q0MifQ.GAxdu65t1bPSsKC8zy6YV-X-6VOOSPd3gnBTClI5I1Y`,
        },
      }
    );

    console.log("Log Created:", response.data);
  } catch (error) {
    console.error("Logging Failed:", error.message);
  }
};

module.exports = Log;