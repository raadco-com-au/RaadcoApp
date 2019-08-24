
// var arr=[1,2,1,5,9,5];
// $.each(arr, function(key, value) {
//     console.log(value);
//    });
// var longArray = [1, 2, 3, 4, 5, 6, 7, 8],
//  shortArray = [9, 10];
//  longArray.push(...shortArray);
//  for (const i of longArray) {
//      console.log(i);
//  }

 const State = {
    messages: [
        { from: 9177079209, to: 9332369461, time: "9:10 am", text: "Hi Sajad" },
        { from: 9177079209, to: 9332369461, time: "9:11 am", text: "How's it going?" },
        { from: 9332369461, to: 9177079209, time: "9:11 am", text: "Hi David" },
        { from: 9332369461, to: 9177079209, time: "9:12 am", text: "Not Bad" },
        { from: 9177079209, to: 9332369461, time: "9:12 am", text: "Where are you? I have to see you, when can you come on here?" },
    ],
    userId:9177079209
}

State.messages.push({ from: 9177079209, to: 9332369461, time: "12:10 am", text: "new messages" });
for (const i of State.messages) {
    console.log(i);
}

// var myArray = [1, 2, 3, 4, 99, 20];
// var maxValue = Math.max(...myArray); // 99
// var minValue = Math.min(...myArray); // 1
// console.log(minValue);