import geocoder
import json
from random import randrange


with open('datasets/balanced.json', 'r') as f:
    places = json.load(f)

enriched = []
for place in places[:6]:
    lon = place['lon'] if place['lon'] else 14.416602+float(randrange(10))/100
    lat = place['lat'] if place['lat'] else 50.072719+float(randrange(10))/100

    g = geocoder.osm([lat, lon], method='reverse')

    add = str(g).split(",")
    address = ','.join(add[1:-6])
    if address:
        print(address, bool(address))
        newplace = place
        newplace['address'] = address
        enriched.append(newplace)

with open('balanced-enriched.json', 'w', encoding='utf-8') as f:
    json.dump(enriched, f, ensure_ascii=False)