// Simple Dashboard Sample
class Dashboard {
    constructor(title) {
        this.title = title;
        this.data = [];
    }

    addData(item) {
        this.data.push(item);
    }

    displayData() {
        console.log(`${this.title}:`);
        this.data.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

// Usage
const myDashboard = new Dashboard('My Dashboard');
myDashboard.addData('Task 1');
myDashboard.addData('Task 2');
myDashboard.addData('Task 3');
myDashboard.displayData();