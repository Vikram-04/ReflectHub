document
  .getElementById("experienceForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload on submit

    const name = document.getElementById("nameInput").value;
    const message = document.getElementById("messageInput").value;
    const role = document.getElementById("roleInput").value;

    const postContainer = document.getElementById("postsContainer");

    // Create new post element
    const postBox = document.createElement("div");
    postBox.className = "post-box margin-bottom-lg";

    const nameHeading = document.createElement("h4");
    nameHeading.textContent = name
      ? `${name} (${role})`
      : `Anonymous (${role})`;

    const messagePara = document.createElement("p");
    messagePara.textContent = message;

    postBox.appendChild(nameHeading);
    postBox.appendChild(messagePara);
    postContainer.prepend(postBox); // Add newest post at the top

    // Clear form
    document.getElementById("experienceForm").reset();
  });
