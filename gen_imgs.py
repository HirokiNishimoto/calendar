import matplotlib.pyplot as plt
import numpy as np
import string

S = string.ascii_letters[26:]
colors = ["red", "tomato", "coral",  "orange", "olive", "blue", "black", "m", "lime"]
a = np.arange(0, 26, 1)

for n in range(1, 32):
    plt.figure()
    x_r = np.random.choice(a, size=len(S), replace=False)
    y_r = np.random.choice(a, size=len(S), replace=False)

    for i, s in enumerate(S):
        size = np.random.normal(loc=18, scale=1)
        c = np.random.choice(colors)
        plt.text(x_r[i],y_r[i], s, color=c, size=size, alpha=0.8)

    plt.xlim([-1,27])
    plt.ylim([-1,27])
    plt.tick_params(labelbottom=False,
                    labelleft=False,
                    labelright=False,
                    labeltop=False,
                    bottom=False,
                    left=False,
                    right=False,
                    top=False)
    plt.tight_layout()
    plt.savefig("public/imgs/img"+str(n)+".png", str='png')
