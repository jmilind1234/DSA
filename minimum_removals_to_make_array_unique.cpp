#include <bits/stdc++.h> 
int minElementsToRemove(vector<int> &arr)
{
		sort(arr.begin(),arr.end());
		int len = arr.size();
        int tracker = 1;
        int minRemovals = 0;
        int currentValueIndex = 0;
	while (tracker < len) {
            if (arr[tracker] == arr[currentValueIndex]) {
                minRemovals += 1;
                tracker += 1;
            } else {
                currentValueIndex = tracker;
                tracker += 1;
            }
        }
        return minRemovals;
}