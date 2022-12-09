function calc1() {
            var numbers = document.getElementById("numbers");
            var NumArray = numbers.value.split(",");
            var sum = 0;
        for (var number of NumArray) {
        sum += parseFloat(number);
        }
        average = (sum / NumArray.length).toFixed(2);
        document.getElementById("avgS").value = average;
        }