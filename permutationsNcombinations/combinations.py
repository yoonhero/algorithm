import itertools

# nCr = nPr / r!
arr = ["A", "B", "C"]
nCr = itertools.combinations(arr, 2)
print(list(nCr))
