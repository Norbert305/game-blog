const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: process.env.BACKEND_URL,
      loggedUser: {},
      postBloggers: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getBloggers: (id) => {
        fetch(`${getStore().backEndUrl}/api/blogger/user/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ postBloggers: data }))
          .catch((err) => console.error("Error:", err));
      },

      getUser: () => {
        fetch(`${getStore().backEndUrl}/api/user`)
          .then((res) => res.json())
          .then((data) => setStore({ loggedUser: data }))
          .catch((err) => console.error(err));
      },

      addBlogger: (newBlogger) => {
        fetch(`${getStore().backEndUrl}/api/blogger`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlogger),
        })
          .then((response) => response.json())
          .then((data) => setStore({ postBloggers: data }))
          .catch((err) => console.error("Error:", err));
      },

      updateProfile: (updatedProfile, id) => {
        fetch(`${getStore().backEndUrl}/api/user/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProfile),
        })
          .then((response) => response.json())
          .then((data) => setStore({ loggedUser: data }))
          .catch((err) => console.error("Error:", err));
      },

      deleteBlogger: (id) => {
        fetch(`${getStore().backEndUrl}/api/blogger/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => setStore({ postBloggers: data }))
          .catch((err) => console.error("Error:", err));
      },

      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
    },
  };
};

export default getState;
