function sendMessage() {
  const msg = document.getElementById("messageInput").value;
  if (msg.trim() !== "") {
    firebase.database().ref("messages").push({
      name: "Kabir",
      message: msg
    });
    document.getElementById("messageInput").value = "";
  }
}

firebase.database().ref("messages").on("child_added", function(snapshot) {
  const msg = snapshot.val();
  const li = document.createElement("li");
  li.textContent = ${msg.name}: ${msg.message};
  document.getElementById("messageList").appendChild(li);
});
