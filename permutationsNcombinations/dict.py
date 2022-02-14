d = {"ysh": 17, "ysj": 15}

for k, i in d.items():
    print(k, i)

d["ysj"] = 10
print(d)

del d["ysh"]
print(d)
