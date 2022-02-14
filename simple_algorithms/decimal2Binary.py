def d2b(n, binary):
    if n == 0:
        return binary[::-1]
    else:
        binary += str(n % 2)
        return d2b(n//2, binary)
        
print(d2b(2, ""))