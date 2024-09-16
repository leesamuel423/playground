def k_smallest(arr, l, r, k):
    if (k > 0 and k <= r - 1 + 1):
        index = partition(arr, l, r)[0]
        if index - l == k - 1:
            return arr[index]
        if index - 1 > k - 1:
            return k_smallest(arr, l, index - 1, k)
        return k_smallest(arr, index + 1, r, k - index + l - 1)

# def k_cara(arr, l, r, k):
#     A = arr[0:2 * k]
#     print(A)
#     print(partition(arr, l, k)[1])

def partition(arr, l, r):
    """
    partition algorithm to put arr[r] in right location

    :param arr: array 
    :param l: left pointer location 
    :param r: right pointer location (aka what the pivot will be)

    :return i: index of pivot point
    """
    x = arr[r]
    i = l
    for j in range(l, r):
        if arr[j] <= x:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[r] = arr[r], arr[i]
    return i, arr

def main():
    print("executing...")
    arr = [10, 4, 5, 8, 6, 11, 26]
    n = len(arr)
    k = 3
    print(k_smallest(arr, 0, n - 1, k))
    # print(k_cara(arr, 0, n - 1, k))


if __name__ == "__main__":
    main()

