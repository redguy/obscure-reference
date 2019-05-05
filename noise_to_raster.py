import geopandas
from shapely.geometry import Point, Polygon
from PIL import Image, ImageDraw
import config

def create_polygon():
    lat_point_list = [50.1, 50.05, 50.0, 50.01]
    lon_point_list = [14.37, 14.38, 14.36, 14.38]

    polygon_geom = Polygon(zip(lon_point_list, lat_point_list))
    crs = {'init': 'epsg:4326'}
    polygon = geopandas.GeoDataFrame(index=[0], crs=crs, geometry=[polygon_geom])
    print(polygon.geometry)
    return polygon


def gps2pix(lng, lat):
    x_scale = 4096 / (float(config.limits["x_max"]) - config.limits["x_min"])
    y_scale = 4096 / (float(config.limits["y_max"]) - config.limits["y_min"])

    x = (lng - config.limits["x_min"]) * x_scale
    y = (lat - config.limits["y_min"]) * y_scale

    x = 4090 if x >= 4090 else x
    y = 4090 if y >= 4090 else y

    x = 0 if x < 0 else x
    y = 0 if y < 0 else y

    return x,y


file_name = "gml/HM_Ekola_ADP_pasma_den_p.gml"
noise = geopandas.read_file(file_name, layer=0)
im = Image.open("template.png")
draw = ImageDraw.Draw(im)

i = 0
for index, row in noise.iterrows():
    i +=1
    print(type(row), repr(row))
    if row['DB_HI'] > 50:
        continue

    (lb_lng, lb_lat, rt_lng, rt_lat) = row['geometry'].bounds
    print(f"------------------ {i}")
    if i % 1000 == 0:
        im.save('silent.png')

    print(row['geometry'].bounds)
    step = 0.0002
    lng = lb_lng
    while lng < rt_lng:
        lat = lb_lat
        while lat < rt_lat:
            point = Point(lng, lat)
            if point.within(row['geometry']):
                #print("##### ",lat, lng, (row['DB_LO'] + row['DB_HI']) / 2)
                (x,y) = gps2pix(lng, lat)
                #print(int(x), int(y), 10, 10, 10, int(row['DB_HI']) * 2)
                #im.putpixel((int(x), int(y)), (10, 10, 10, int(row['DB_HI'])*2))
                draw.rectangle([int(x), int(y), int(x+4), int(y+4)], fill=(0, 0, 0, int(row['DB_HI']) * 2), outline=(0, 0, 0, int(row['DB_HI']) * 2))
            lat += step
        lng += step

im.save('silent.png')
