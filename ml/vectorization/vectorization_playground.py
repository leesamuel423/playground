import numpy as np
import time

def my_dot(a, b):
    """
    Compute dot product of two vectors

    Args:
        a (ndarray (n,)): input vector
        b (ndarray (n,)): input vector w/ same dimension as a

    Returns:
        x (scalar):
    """
    x = 0
    for i in range(a.shape[0]):
        x = x + a[i] * b[i]
    return x

# ---------> TESTING SPEED <----------
np.random.seed(1) # ensure random number generation will produce same values each time script runs
a = np.random.rand(1000000)
b = np.random.rand(1000000)

tic = time.time() # capture start time
c = np.dot(a, b) #vectorization
toc = time.time() # capture end time

print(f"np.dot(a, b) = {c:.4f}")
print(f"Vectorized version duration: {1000 * (toc - tic):.4f} ms")

tic = time.time() # capture start time
c = my_dot(a, b) #manual
toc = time.time() # capture end time


print(f"np.dot(a, b) = {c:.4f}")
print(f"Loop version duration: {1000 * (toc - tic):.4f} ms")

del(a)
del(b)


