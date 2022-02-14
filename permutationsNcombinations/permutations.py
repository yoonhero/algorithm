import itertools

# nPr = n! / (n-r)!
arr = ["A", "B", "C"]
nPr = itertools.permutations(arr, 2)
print(list(nPr))
