function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("box2").value + ": " + document.getElementById("box").value;
    newItem.onclick = removeItem;
    newItem.id = "deleteme"
    document.getElementById("list").appendChild(newItem);
    saveList();
  }
  function removeItem() {
    if (confirm("Are you sure you want to delete?") == true) {
      document.getElementById("list").removeChild(this);
      saveList();
    }
  }
  function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
  }
  function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(var i = 0; i < list.children.length; i++) {
      list.children[i].onclick = removeItem;
    }
  }
