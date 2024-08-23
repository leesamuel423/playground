
class Sorting {
  public static void main(String[] args) {
    int[] test1 = {-2, 4, -20, 100};
    insertionSort(test1);
    printArray(test1);
  }

  public static void insertionSort(int[] arr) {

    // Version 1
    //for (int i = 1; i < arr.length; i++) {
    //  int j = i;
    //  while (j >= 1 && arr[j - 1] > arr[j]) {
    //    int temp = arr[j - 1];
    //    arr[j - 1] = arr[j];
    //    arr[j] = temp;
    //    j -= 1;
    //  }
    //}

    // Version 2
    for (int i = 1; i < arr.length; i++) {
      int key = arr[i];
      int k = i - 1;

      while (k >= 0 && arr[k] > key) {
        arr[k + 1] = arr[k];
        k -= 1;
      }

      arr[k + 1] = key;
    }
  }

  public static void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    
    System.out.println();
  }

}

