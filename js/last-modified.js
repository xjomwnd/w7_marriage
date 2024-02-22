document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});
