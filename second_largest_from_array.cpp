int print2largest(int arr[], int n) {
	    // code here
	    int firstLargest; 
        int secondLargest;
        int currentPointed;
        if(arr[0]>arr[1]){
            firstLargest = arr[0];
            secondLargest = arr[1];
        }else if(arr[1]>arr[0]){
            firstLargest = arr[1];
            secondLargest = arr[0];
        }else{
            firstLargest = arr[0];
            secondLargest = firstLargest;
        }
        for(int i=2;i<n; i++){
            int currentPointed = arr[i];
            if(currentPointed > firstLargest){
                secondLargest = firstLargest;
                firstLargest = currentPointed;
            } else if(currentPointed > secondLargest && currentPointed != firstLargest){
                secondLargest = currentPointed;
            } else if(currentPointed < secondLargest && secondLargest == firstLargest){
                secondLargest = currentPointed;
            }
        }
        if(firstLargest == secondLargest){
            return -1;
        }
        return secondLargest;
	}