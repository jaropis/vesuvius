from PIL import Image
def transparenter(img, name, thr):
    img = img.convert("RGBA")
    datas = img.getdata()
    printing_count = 0
    newData = []
    for item in datas:
        if item[0] < thr and item[1] < thr and item[2] < thr:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(name, "PNG")
thr = 20
img = Image.open("assets/BRF2.interphase-montage-0.png")
transparenter(img, "/Users/jaropis/projects/vesuvius/assets/BRF2.interphase-montage-0_1.png", thr)
img = Image.open("assets/BRF2.interphase-montage-1.png")
transparenter(img, "/Users/jaropis/projects/vesuvius/assets/BRF2.interphase-montage-1_1.png", thr)
