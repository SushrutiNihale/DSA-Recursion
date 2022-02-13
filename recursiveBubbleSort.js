function sort(arr,index) {
    if (index === 0) {
        return arr.join(' ');
    }
    for (let i = 1; i <= index; i++) {
        if (arr[i-1] > arr[i]) {
            [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
        }
    }
    return sort(arr,index-1);
}
