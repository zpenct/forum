import { BASE_URL } from "@/constant";

function putAccessToken(token: string) {
  window.localStorage.setItem("accessToken", token);
}

function getAccessToken() {
  return localStorage.getItem("accessToken");
}
const api = (() => {
  async function fetchWithAuth(url: string, options: any = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function registerUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { user },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return user;
  }

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const {
      status,
      message,
      data: { token },
    } = responseJson;
    putAccessToken(token);
    if (status !== "success") {
      throw new Error(message);
    }

    return token;
  }

  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { user },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return user;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { users },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return users;
  }

  async function createThread({
    title,
    body,
    category,
  }: {
    title: string;
    body: string;
    category: string;
  }) {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { thread },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return thread;
  }

  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { threads },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return threads;
  }

  async function getDetailThread(id: string) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { detailThread },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return detailThread;
  }

  async function createComment({
    threadId,
    content,
  }: {
    threadId: string;
    content: string;
  }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
        }),
      }
    );
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { comment },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return comment;
  }

  async function upVoteThread(threadId: string) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/up-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function downVoteThread(threadId: string) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/down-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function neutralVoteThread(threadId: string) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/neutral-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function upVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function downVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function neutralVoteComment({
    threadId,
    commentId,
  }: {
    threadId: string;
    commentId: string;
  }) {
    const response = await fetchWithAuth(
      `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
      {
        method: "POST",
      }
    );
    const responseJson = await response.json();
    if (responseJson.status !== "success") {
      alert(responseJson.message);
    }

    return responseJson;
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const responseJson = await response.json();
    const {
      status,
      message,
      data: { leaderboards },
    } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    return leaderboards;
  }

  return {
    // putAccessToken,
    // getAccessToken,
    registerUser,
    login,
    getOwnProfile,
    getAllUsers,
    createThread,
    getAllThreads,
    getDetailThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralVoteThread,
    upVoteComment,
    downVoteComment,
    neutralVoteComment,
    getLeaderboards,
  };
})();

export default api;
