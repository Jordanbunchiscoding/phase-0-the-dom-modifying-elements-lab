// Write your code here!
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);

const mainElement = document.querySelector('main');
mainElement.remove();

function runTests() {
  describe("index.html", function() {
    // Your existing test code here
  });
}

runTests();
