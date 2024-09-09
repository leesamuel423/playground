import java.util.*;

class MergeSort {

  public static void main(String[] args) {
    int[] test1 = {5, 2, 3, 6, 9, 12, 51, 2};
    System.out.println(Arrays.toString(mergeSort(test1, 0, test1.length - 1)));
    
  }

  public static int[] mergeSort (int[] arr, int low, int high) {
    if (low >= high) return arr;
    int mid = (low + high) / 2;

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    int[] C = merge(Arrays.copyOfRange(arr, low, mid + 1), Arrays.copyOfRange(arr, mid + 1, high + 1));

    System.arraycopy(C, 0, arr, low, C.length);
    return arr;
  }

  public static int[] merge(int[] A, int[] B) {
    int[] C = new int[A.length + B.length];
    int a = 0, b = 0, c = 0;

    while (a < A.length && b < B.length) {
      if (A[a] > B[b]) {
        C[c] = B[b];
        b += 1;
      } else {
        C[c] = A[a];
        a += 1;
      }
      c += 1;
    }

    // Add remaining a
    while (a < A.length) {
      C[c] = A[a];
      a += 1;
      c += 1;
    }

    // Add remaining b
    while (b < B.length) {
      C[c] = B[b];
      b += 1;
      c += 1;
    }

    return C;
  }

}


/**
MERGE STEP
Input: two sorted arrays of size n and m
Output: a single sorted array of size n + m

array1         array2           output
3               2
7               5
12              16
18              21

Algorithm runs in O(m + n) for combine step


// Recurrence Relation
T(n) is time for mergeSort to sort a list of n elements
Steps going into T(n)?
  - Divide: 0 step
  - Conquer: sort 2 arrays of length n / 2 each: <= 2T(n / 2) steps
  - Combine: merge 2 sorted lists of length n / 2 each: <= n steps

  T(n) <= 2T(n / 2) + n steps

  Base Case: T(1) = 0


Master Theorem
Root Level contribution: n ^ c
Second Level: (n/b) ^ c
  Total = (a / b^c) n^c
a/b^c is ratio between successive levels

< 1 decreasing series
> 1 increasing series -> leaf level -> each leaf contributes 1 and need to find number of leaves -> a ^ logb(n) = n ^ logb(a)
= 1 constant series

Therefore: The recurrence T(n) <= aT(n / b) + n^c has a solution
  T(n) => if a < b^c       O(n^c)
          if a > b^c       O(n^logb(a))
          if a = b^c       O(n^c logn)

*/
