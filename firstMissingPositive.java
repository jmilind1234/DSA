import java.util.HashMap;

public class Solution {
	public static int firstMissing(int[] arr, int n) {
		// Write your code here.
		int minimumPositive = -1;
		int maximumPositive = -1;

		HashMap<Integer, Boolean> map = new HashMap<>();

		// run a loop to find first minimum positive
		for (int i = 0; i < n; i++) {
			if (minimumPositive == -1 && arr[i] >= 1)
				minimumPositive = arr[i];
			map.put(arr[i], true);
			if (arr[i] < minimumPositive && arr[i] >= 1) {
				minimumPositive = arr[i];
			}
		}

		// run a loop to find the maximum positive
		for (int i = 0; i < n; i++) {
			if (arr[i] > maximumPositive && arr[i] >= 1) {
				maximumPositive = arr[i];
			}
		}

		if ((minimumPositive == maximumPositive) && minimumPositive != 1) {
			return 1;
		}

		if ((minimumPositive == maximumPositive) && minimumPositive == -1) {
			return 1;
		}

		if (minimumPositive > 1) {
			return 1;
		}

		if (maximumPositive < 1) {
			return 1;
		}

		else if (maximumPositive != minimumPositive) {
			for (int j = minimumPositive; j <= maximumPositive; j++) {
				if (!map.containsKey(j)) {
					return j;
				}
			}
			return maximumPositive + 1;
		}
		return minimumPositive;
	}
}
