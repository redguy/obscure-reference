from PIL import Image, ImageDraw
from random import randrange

im = Image.open("noise.png")
draw = ImageDraw.Draw(im)

for i in range(500):
    x = randrange(4090)
    y = randrange(4090)
    r, g, b, a = im.getpixel((x, y))
    print(r, g, b, a)